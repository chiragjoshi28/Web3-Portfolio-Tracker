import axios from 'axios'

const API = axios;
//const API = axios.create({ baseURL: process.env.REACT_APP_API})

export const fetchPortfolio =(data) => axios.get( `/api/getTokenPortfolio?chain_id=${data.chain_id}&address=${data.address}`)
export const fetchHolding =(data) => axios.get( `/api/getPortfolioValueHistory?chain_id=${data.chain_id}&address=${data.address}`)
export const blockShitCoin =(data) => axios.get( `/api/blockShitCoin?chain_id=${data.chain_id}&contract_address=${data.contract_address}&blockStatus=${data.blockStatus}`)
export const checkUser_NextUpdate =(data) => axios.get( `/api/checkUser_NextUpdate?chain_id=${data.chain_id}&address=${data.address}`)

export const fetchDataFromCovalent =(data) => axios.get( `/api/getPortfolioValueHistory_Covalent?chain_id=${data.chain_id}&address=${data.address}`)
