const routes = require('express').Router()
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


module.exports = routes;