const axios = require('axios').default;
const model = require('../models/models');

const covalent_key = process.env.COVALENT_API_KEY;

function getPortfolioValueHistory_Covalent(req,res) {
    if(!covalent_key) return res.status(400).json("API KEY MISSING");
    if(!req.body) return res.status(400).json("Post HTTP Data not Provided");
    chain_id = req.query.chain_id;
    address = req.query.address;
    if(chain_id && address){
        url = 'https://api.covalenthq.com/v1/'+chain_id+'/address/'+address+'/portfolio_v2/?quote-currency=USD&format=JSON&key='+covalent_key;
         
        try{
          axios.get(url).then( async(response) =>{
             
            let user = "";
            let holding = "";
            let holding_item = "";
            const create_all_data = async _ => {
              user = await model.Users.find({address:address})
              if(user=="") { user = await create_user(response.data.data.address)}
              holding = await create_holding(response.data.data)
              holding_item = await create_holding_item(response);
              console.log("end")
          } 
          await create_all_data();
          console.log("before RES");
          res.json({user:user,holding:holding,holding_item:holding_item,covalent_response:response.data});

          }).catch(function (error) {
            console.log("here : "+error);
            res.status(300).json(error)
          });
        }catch(e){ console.log(e) }
    }
}
async function create_user(address)
{
  let user = ""
  const Create = new model.Users({ address:address, date: new Date()}); 
  await Create.save().then(result=>{ user = result; })
  return user;
}

async function create_holding(data){
  
  let filter = { user_address: data.address, chain_id: data.chain_id }
  let update = { quote_currency: data.quote_currency, updated_at: data.updated_at, next_update_at: data.next_update_at }
  await model.Holding.updateOne( filter, update, { "upsert":true } )
  return await model.Holding_item.find({user_address:data.address,chain_id:data.chain_id});

}

async function create_holding_item(response){
  let filter = "";
  let update = "";
  response.data.data.items.map(async (v,i)=>{
    filter = {
      user_address:response.data.data.address,
      contract_address:v.contract_address,
      chain_id:response.data.data.chain_id
    };
    update = {
      quote_currency:response.data.data.quote_currency,
      contract_decimals:v.contract_decimals,
      contract_name:v.contract_name,
      contract_ticker_symbol:v.contract_ticker_symbol,
      logo_url:v.logo_url,
      balance:(v.holdings[0].close.balance/10**v.contract_decimals),
      priceUsd:v.holdings[0].quote_rate,
      valueUsd:v.holdings[0].close.quote,
      chart_data:v.holdings
    };
    await model.Holding_item.updateOne( filter, update, { "upsert":true } )
  })
  return await model.Holding_item.find({user_address:response.data.data.address,chain_id:response.data.data.chain_id});
}

module.exports = {
    getPortfolioValueHistory_Covalent,
}