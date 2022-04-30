import React from 'react'
import { getPrecisedData,setStringMaxChar } from '../helper/helper'

export const PortfolioLables = (props) => {
    return (
        <div className="Portfolio-Token-List pt-4">
        {(props.TokenList.length) 
            ?<section className="p-6 mx-auto labels">
            <div className="flex items-center">
                <div className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    { 
                        props.TokenList.map((value,index) => 
                        <InnerComponent key={index} data={value} color={props.TokenColor[index]}></InnerComponent>
                    )}
                </div>
            </div>
            </section>
        : ''
        }
        </div>
    )
}

function addDefaultSrc(e){
    e.target.src = "/images/blank.png";
}
function InnerComponent({data,color}){
    return(
        <div className="text-center">
            <div className="flex">
                <div className='w-1 h-1 rounded py-2 align-self' style={{background: color ?? '#f9c74f'}}></div>
                <div className="flex ml-4">
                    <img className="object-cover object-center mr-2 rounded" src={data.logo_url ?? ''} onErrorCapture={addDefaultSrc}  alt="avatar"/>
                    <div className="coin_name">
                        <h3 className="text-base font-medium text-gray-700 dark:text-gray-200">{setStringMaxChar(data.contract_name,12) ?? ''}</h3>
                    </div>
                </div>
            </div>
            
            <div className="flex ml-4">
                <span className="mt-1 text-xs text-gray-600 dark:text-gray-300">{getPrecisedData(data.balance.$numberDecimal) ?? 0} {data.contract_ticker_symbol ?? ''} | {getPrecisedData(data.valueUsd.$numberDecimal) ?? 0} USD</span>
            </div>
        </div>  
    )
}


