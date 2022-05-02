const model = require('../models/models');
const moment = require('moment');
const helper = require('../helper/helper')
const TRACK_USD_VALUE_ABOVE=0.1

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
            balance:{$ne:0},
            priceUsd:{$ne:null},
            valueUsd:{$ne:null},
        }).sort({valueUsd:-1})
        .then(result => {
            
            const ChartData = async _ => {
                //console.log("Start");
                const holdingItemsCount = 0; 
                const chart_data_response = [];
                const token_data_response = [];
                const block_token_data_response = [];
                //let start = moment().format("YYYY-MM-DD");
                let end = moment().subtract(30, 'days').format("YYYY-MM-DD");

                for(i=0;i<=30;i++){ //For 30 Days
                    let valueUsd_data = 0;
                    result.map(v1 => {

                        v1.chart_data.map(v=>{
                            timestamp = moment(v.timestamp).format("YYYY-MM-DD")
                            if(end===timestamp){
                                //we don't want to add untracked coin balance in 30days chart i.e, v1.blockStatus is checked
                                if(v.close.quote && !v1.blockStatus) { valueUsd_data = valueUsd_data + v.close.quote; } //(here quote=balance*price )
                            }
                        })

                        if(i==0 && v1.balance && v1.priceUsd){
                            // Only Inserting Token we are useful
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
                                priceUsd:v1.priceUsd,
                                valueUsd:v1.valueUsd,
                                blockStatus:v1.blockStatus
                            };
                            if(v1.blockStatus) block_token_data_response.push(token_obj);
                            else token_data_response.push(token_obj);
                        }
                    })
                    
                    const chart_obj = { date:end,balance:valueUsd_data };
                    // console.log(chart_obj);
                    if(valueUsd_data) { chart_data_response.push(chart_obj); }
                    end = moment(end).add(1,'days').format("YYYY-MM-DD");
                }
                //console.log('End');
                result2.push({chart_data_response,token_data_response,block_token_data_response})
            };

            if(result!=""){
            ChartData();
            res.json(result2);
            }else{
                res.json()
            }
        })        
    }
}


async function blockShitCoin(req,res){
    if(!req.body) return res.status(400).json("HTTP Data not Provided");
    blockStatusParams = req.query.blockStatus;
    contract_addressParams = req.query.contract_address;
    chain_idParams = req.query.chain_id;
    console.log(blockStatusParams+" "+contract_addressParams+" "+chain_idParams)
    if(blockStatusParams && contract_addressParams && chain_idParams){
        model.Holding_item.
        findOneAndUpdate({contract_address:contract_addressParams,chain_id:chain_idParams},{blockStatus: blockStatusParams},function(err,doc){
            if (!doc) return res.send(404, {error: "okkkkkkkk Holding not found"});
            return res.send("ShitCoin Marked untracked");
        });
    }
}

async function getTokenPortfolio(req,res){
    chain_id = req.query.chain_id;
    address = req.query.address;
    let response = [];
    if(chain_id && address){
        model.Holding_item.find({
            user_address:address,
            chain_id:chain_id,
            contract_name:{$ne:null},
            balance:{$ne:null},
            priceUsd:{$ne:null},
            blockStatus:{$ne:1},
            valueUsd:{$ne:null},
        }).gt('valueUsd',TRACK_USD_VALUE_ABOVE).sort({valueUsd:-1})
        .then(result => { 
            const WaitForData = async _ => {
                let graph_data = [];
                let graph_token = [];
                graph_token.push(result);
                result.map(v1=>{
                    graph_data.push(parseFloat(v1.valueUsd.toString()))
                })     
                response.push({graph_token:graph_token,graph_data:graph_data,graph_token_colors:helper.getRGB_Array(graph_data.length)})
            }
            if(result!=""){
                WaitForData();
                res.json(response);
            }else{
                res.json();
            }
        });
    }
}

async function checkUser_NextUpdate(req,res){
    chain_id = req.query.chain_id;
    address = req.query.address;
    if(chain_id && address){
    model.Holding.findOne({
    chain_id:chain_id,
    user_address:address
    }).then(result=>{
        if(result){
        return res.json({UserExist:1,NextUpdateTime:result.next_update_at})
        }else{
        return res.json({UserExist:0,NextUpdateTime:null})
        }
    
    })
    }
    else{  res.status(300).json("Incorrect Data"); }
}

    
module.exports = {
    getPortfolioValueHistory,
    blockShitCoin,
    getTokenPortfolio,
    checkUser_NextUpdate
}