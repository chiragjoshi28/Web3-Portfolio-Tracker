const routes = require('express').Router()
const dotenv = require('dotenv');
dotenv.config();
const TransactionController = require('../controller/TransactionController')
const CovalentApiController = require('../controller/CovalentApiController')

//http://localhost:8080/api/getPortfolioValueHistory_Covalent?address=0x6f6699652d4733ad422a610780c43cfd919d9a86&chain_id=56
routes.route('/api/getPortfolioValueHistory_Covalent')
.get(CovalentApiController.getPortfolioValueHistory_Covalent);

//http://localhost:8080/api/getPortfolioValueHistory?address=0x6f6699652d4733ad422a610780c43cfd919d9a86&chain_id=56
routes.route('/api/getPortfolioValueHistory')
.get(TransactionController.getPortfolioValueHistory);


//http://localhost:8080/api/blockShitCoin?blockStatus=1&contract_address=0x6f6699652d4733ad422a610780c43cfd919d9a86&chain_id=56
routes.route('/api/blockShitCoin')
.get(TransactionController.blockShitCoin);


//http://localhost:8080/api/getTokenPortfolio?address=0x6f6699652d4733ad422a610780c43cfd919d9a86&chain_id=56
routes.route('/api/getTokenPortfolio')
.get(TransactionController.getTokenPortfolio);

//http://localhost:8080/api/checkUser_NextUpdate?address=0x6f6699652d4733ad422a610780c43cfd919d9a86&chain_id=56
routes.route('/api/checkUser_NextUpdate')
.get(TransactionController.checkUser_NextUpdate);


module.exports = routes;