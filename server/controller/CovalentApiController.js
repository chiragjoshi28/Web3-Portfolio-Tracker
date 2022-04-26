require('dotenv').config({ path : "./config.env"});
const axios = require('axios').default;
const model = require('../models/models');

covalent_key = process.env.COVALENT_API_KEY;

function getPortfolioValueHistory_Covalent(req,res) {
    if(!req.body) return res.status(400).json("Post HTTP Data not Provided");
    chain_id = req.query.chain_id;
    address = req.query.address;
    console.log(1)
    if(chain_id && address){
        url = 'https://api.covalenthq.com/v1/'+chain_id+'/address/'+address+'/portfolio_v2/?quote-currency=USD&format=JSON&key='+covalent_key;
         try{

          axios.get(url).then( async(response) =>{
            create_user(response.data.data);
            create_holding(response.data.data);

            const holding_item_array = [];
            
            response.data.data.items.map((v,i) =>{
                  holding_item_array[i] = {
                  user_address:response.data.data.address,
                  chain_id:response.data.data.chain_id,
                  quote_currency:response.data.data.quote_currency,
                  contract_decimals:v.contract_decimals,
                  contract_name:v.contract_name,
                  contract_ticker_symbol:v.contract_ticker_symbol,
                  contract_address:v.contract_address,
                  logo_url:v.logo_url,
                  balance:(v.holdings[0].close.balance/10**v.contract_decimals),
                  priceUsd:v.holdings[0].quote_rate,
                  valueUsd:v.holdings[0].close.quote,
                  chart_data:v.holdings
              }
            })
            const delete_data = {address:response.data.data.address,chain_id:response.data.data.chain_id}
            create_holding_item(delete_data,holding_item_array);

            
            res.json(response.data);
          }).catch(function (error) {
            console.log("here"+error);
          });
        }catch(e){ console.log(e) }
    }
}

function create_user(data)
{
  return new Promise((resolve, reject) => {
    model.Users.exists({ address:data.address }).then(exists => {
      if (!exists) {
        const Create = new model.Users({
          address: data.address,
          date: new Date()
        }) 
        Create.save(function(err){
          if (!err) resolve({status:200,data:Create})
          reject({status:400,data:err})
        });
      }
    });
  })
}

async function create_holding(data){
 
  await model.Holding.exists({ address:data.address,chain_id:data.chain_id }).then(exists => {
    if (!exists) {
      const Create = new model.Holding({
        user_address: data.address,
        chain_id: data.chain_id,
        quote_currency: data.quote_currency,
        updated_at: data.updated_at,
        next_updated_at: data.next_updated_at
      }) 
      Create.save(function(err){
        if (!err) return ({status:200,data:Create})
        return({status:400,data:err})
      });
    }
  });
}

async function create_holding_item(delete_data,data){
  await model.Holding_item.deleteMany(delete_data);
  try{ await model.Holding_item.insertMany(data); }catch(e){console.log("INSIDE INSERT "+e)}
 
}

module.exports = {
    getPortfolioValueHistory_Covalent
}