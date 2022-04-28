import React,{useContext} from 'react'
import millify from "millify";
import * as api from '../api'
import { AppContext } from "../context/AppContext";
import {BiHide,BiShow} from 'react-icons/bi'
export const HoldingList = (props) => {

    const {walletNetworkId,setHoldingBlockChanged,holdingBlockChanged} = useContext(AppContext);

    const blockHandlerClick = (e) => {
        if(!e.target.dataset.contract_address) return 0;
        updateStatus({ chain_id:walletNetworkId,contract_address : e.target.dataset.contract_address,blockStatus:1 })
        console.log({ contract_address : e.target.dataset.contract_address,blockStatus:1 })
    }

    const unblockHandlerClick = (e) => {
        if(!e.target.dataset.contract_address) return 0;
        updateStatus({ chain_id:walletNetworkId,contract_address : e.target.dataset.contract_address,blockStatus:0 })
        console.log({ contract_address : e.target.dataset.contract_address,blockStatus:0 })
    }

    const updateStatus = async(params)=>{
        const data = await api.blockShitCoin(params);
        if(data.status===200){
            console.log("success"+data)
            let count = holdingBlockChanged;
            setHoldingBlockChanged(count+1);
        }else{
            console.log("err"+data)
        }
    }

    return (
        <div className="Token-List">
            {(props.TokenData)
            ? <table className="table-auto border-collapse table-auto w-full text-sm text-white">
                <thead>
                    <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Asset</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Balance</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Value</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { props.TokenData.map((value,index)=> <TokenList key={index} data={value} handlerBlock={blockHandlerClick}></TokenList> ) }
                </tbody>
            </table>
            : 'No Holding Found for this Token'
            }
            {(props.BlockTokenData)
            ? <table className="table-auto border-collapse table-auto w-full text-sm text-white mt-8">
                <thead>
                    <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Untracked Asset</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Balance</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Value</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { props.BlockTokenData.map((value,index)=> <BlockTokenList key={index} data={value} handlerUnblock={unblockHandlerClick}></BlockTokenList> ) }
                </tbody>
            </table>
            : 'No Holding Found for this Token'
            }

        </div>
    )
}

function addDefaultSrc(e){
    e.target.src = "/images/blank.png";
}

const getPrecisedData = (value) => {
    if(value<Number.MAX_SAFE_INTEGER){
    if(value) return millify(value,{precision: 8}) 
    else return '0.0000' 
    }
    return '0.00';
}
function TokenList({ data , handlerBlock }){
    return(
        <tr>
            <td className="border-b border-slate-700 p-4 py-2 text-slate-500 dark:text-slate-400">
                <div className="flex">
                    <img className="w-6 h-6 mr-2 rounded-2xl" src={ data.logo_url ?? '' } onErrorCapture={addDefaultSrc} alt="tokenImage"/>
                    <h2 className="text-white text-sm">{ data.contract_name ?? '' }</h2>
                </div>
                <span className="ml-8">({data.contract_ticker_symbol ?? ''})</span>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h2 className="text-white text-sm">
                ${getPrecisedData(data.priceUsd.$numberDecimal)}  
                </h2>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h2 className="text-white text-sm">
                {getPrecisedData(data.balance.$numberDecimal)}  
                </h2>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h2 className="text-white text-sm">
                ${getPrecisedData(data.priceUsd.$numberDecimal*data.balance.$numberDecimal)}  
                </h2>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <button className="bg-rose-500 hover:bg-rose-800 text-white px-2 py-1 rounded" onClick={handlerBlock} data-contract_address={ data.contract_address  ?? ''}><BiHide style={{'pointer-events' :'none'}}></BiHide></button>
            </td>
        </tr>
        
    )
}
function BlockTokenList({ data , handlerUnblock }){
   
    return(
        <tr>
            <td className="border-b border-slate-700 p-4 py-2 text-slate-500 dark:text-slate-400">
                <div className="flex">
                    <img className="w-6 h-6 mr-2 rounded-2xl brightness-50" src={ data.logo_url ?? '' } onErrorCapture={addDefaultSrc} alt="tokenImage"/>
                    <h2 className="text-sm">{ data.contract_name ?? '' }</h2>
                </div>
                <span className="ml-8">({data.contract_ticker_symbol ?? ''})</span>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h2 className="text-sm">
                ${getPrecisedData(data.priceUsd.$numberDecimal)}  
                </h2>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h2 className="text-sm">
                {getPrecisedData(data.balance.$numberDecimal)}  
                </h2>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <h2 className="text-sm">
                ${getPrecisedData(data.priceUsd.$numberDecimal*data.balance.$numberDecimal)}  
                </h2>
            </td>
            <td className="border-b border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                <button className="bg-rose-500 hover:bg-rose-800 text-white px-2 py-1 rounded" onClick={handlerUnblock} data-contract_address={ data.contract_address  ?? ''}><BiShow style={{'pointer-events' :'none'}}></BiShow></button>
            </td>
        </tr>
        
    )
}
