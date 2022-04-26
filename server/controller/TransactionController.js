const model = require('../models/models');
const moment = require('moment');
const { response } = require('express');

async function getPortfolioValueHistory(req,res){
    if(!req.body) return res.status(400).json("Post HTTP Data not Provided");
    chain_id = req.query.chain_id;
    address = req.query.address;
    let result2 = [];
    if(chain_id && address){
        model.Holding_item.find({
            user_address:address,
            chain_id:chain_id,
            contract_name:{$ne:null},
            balance:{$ne:null},
            priceUSD:{$ne:null},
            valueUSD:{$ne:null}
        })
        .then(result => {

            const ChartData = async _ => {
                console.log('Start');

                const chart_data_response = [];
                const token_data_response = [];
                let start = moment().format("YYYY-MM-DD");
                let end = moment().subtract(30, 'days').format("YYYY-MM-DD");
                console.log(start+" - "+end);
                let _priceUsd,_valueUsd;

                for(i=0;i<=30;i++){
                    let balance_data = 0;
                    result.map(v1 => {
                        _priceUsd = v1.priceUsd;
                        _valueUsd = v1.valueUSD;
                        
                        v1.chart_data.map(v=>{
                            timestamp = moment(v.timestamp).format("YYYY-MM-DD")
                            if(end===timestamp){
                                if(v.close.quote) { balance_data = balance_data + v.close.quote; }
                                if(_priceUsd===null){ _priceUsd = v.close.quote; } 
                            }
                        })
                        if(i==0 && _priceUsd!=null){
                            const token_obj = { 
                                user_address:v1.user_address,
                                chain_id:v1.chain_id,
                                contract_name:v1.contract_name,
                                contract_decimals:v1.contract_decimals,
                                contract_address:v1.contract_address,
                                contract_ticker_symbol:v1.contract_ticker_symbol,
                                quote_currency:v1.quote_currency,
                                logo_url:v1.logo_url,
                                balance:v1.balance,
                                priceUsd:_priceUsd,
                                valueUsd:v1.balance*_priceUsd
                            };
                            token_data_response.push(token_obj);
                        }
                    })
                    
                    const chart_obj = { date:end,balance:balance_data };
                    // console.log(chart_obj);
                    if(balance_data) { chart_data_response.push(chart_obj); }
                    end = moment(end).add(1,'days').format("YYYY-MM-DD");
                }
                console.log('End');
                result2.push({chart_data_response,token_data_response})
            };
               ChartData();
               res.json(result2);
        })        
    }
}

module.exports = {
    getPortfolioValueHistory
}