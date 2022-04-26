import React from 'react'
import millify from "millify";
export const HoldingList = (props)=>{
    console.log(props)
    return (
        <table className="table-auto border-collapse table-auto w-full text-sm text-white">
            <thead>
                <tr>
                <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Asset</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Balance</th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Value</th>
                </tr>
            </thead>
            <tbody>
                { props.Token_data.map((value,index)=> <TokenList key={index} data={value}></TokenList> ) }
            </tbody>
        </table>
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
function TokenList({data}){
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
        </tr>
        
    )
}
