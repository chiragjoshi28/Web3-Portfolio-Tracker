import axios from 'axios'

const API = axios;
// const API = axios.create({baseURL: "http:/localhost:8080"})
//const API = axios.create({ baseURL: process.env.REACT_APP_API})

export const fetchPortfolio =(data) => API.get( `/api/getTokenPortfolio?chain_id=${data.chain_id}&address=${data.address}`)
export const fetchHolding =(data) => API.get( `/api/getPortfolioValueHistory?chain_id=${data.chain_id}&address=${data.address}`)
export const blockShitCoin =(data) => API.get( `/api/blockShitCoin?chain_id=${data.chain_id}&contract_address=${data.contract_address}&blockStatus=${data.blockStatus}`)
export const checkUser_NextUpdate =(data) => API.get( `/api/checkUser_NextUpdate?chain_id=${data.chain_id}&address=${data.address}`)

export const fetchDataFromCovalent =(data) => API.get( `/api/getPortfolioValueHistory_Covalent?chain_id=${data.chain_id}&address=${data.address}`)
