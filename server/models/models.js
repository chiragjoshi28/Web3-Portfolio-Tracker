const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Users => field => ['address','created_at']
const users_model = new Schema({
    address:{type: String,unique:true,required:true,dropDups: true },
    created_at:{ type : Date, default : Date.now}
})

//Holding => field => ['user_address','chain_id','quote_currency','updated_at','next_update_at']
const holding_model = new Schema({
    user_address:{type: String},
    chain_id:{type: Number},
    quote_currency:{type: String,default:'USD'},
    updated_at:{type : Date},
    next_update_at:{type : Date}
})

//Holding_item => field => [ 'user_address','chain_id','quote_currency','blockStatus',
//                           'contract_decimals','contract_name','contract_ticker_symbol','contract_address',
//                           'logo_url','balance','priceUsd','valueUsd','chart_data']

const holding_item = new Schema({
    user_address:{type: String},
    chain_id:{type: Number},
    blockStatus:{type: Boolean,default:'false'},
    quote_currency:{type: String,default:'USD'},
    contract_decimals:{type: Number},
    contract_name:{type: String},
    contract_ticker_symbol:{type: String},
    contract_address:{type: String},
    logo_url:{type: String},
    balance:{type: Schema.Types.Decimal128},
    priceUsd:{type: Schema.Types.Decimal128},
    valueUsd:{type: Schema.Types.Decimal128},
    chart_data:{type : Array},
    created_at:{ type : Date, default : Date.now}
})

const Users = mongoose.model('users', users_model);
const Holding = mongoose.model('holding', holding_model);
const Holding_item = mongoose.model('holding_item',holding_item);

module.exports = {
    Users,
    Holding,
    Holding_item
}