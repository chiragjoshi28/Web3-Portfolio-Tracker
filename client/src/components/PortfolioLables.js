import React from 'react'

const obj = [
    {
        name:'Harmony',
        alias:'ONE',
        color:'#5752e6',
        icon:'https://assets.coingecko.com/coins/images/4344/small/Y88JAze.png',
        balance:10,
        priceUsd:0.2
    },{
        name:'Elrond',
        alias:'EGLD',
        color:'#47FCDE',
        icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/6892.png',
        balance:0.5,
        priceUsd:158.05
    },{
        name:'Kava',
        alias:'KAVA',
        color:'#FFA16F',
        icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png',
        balance:30,
        priceUsd:4.02
    },{
        name:'Polkadot',
        alias:'DOT',
        color:'#C378F6',
        icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
        balance:2.5,
        priceUsd:17.75
    },{
        name:'Kava',
        alias:'KAVA',
        color:'#FFA16F',
        icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png',
        balance:30,
        priceUsd:4.02
    },{
        name:'Polkadot',
        alias:'DOT',
        color:'#C378F6',
        icon:'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
        balance:2.5,
        priceUsd:17.75
    }
]
export const PortfolioLables = () => {
    return (
        <section className="p-6 mx-auto labels">
            <div className="flex items-center">
                <div className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {obj.map((value,index) => <InnerComponent key={index} data={value}></InnerComponent>)}
                </div>
            </div>
        </section>
    )
}

function InnerComponent({data}){
    return(
        <div className="text-center">
            <div className="flex">
                <div className='w-1 h-1 rounded py-2 align-self' style={{background: data.color ?? '#f9c74f'}}></div>
                <div className="flex ml-4">
                    <img className="object-cover object-center mr-2 rounded" src={data.icon ?? ''} alt="avatar"/>
                    <div className="coin_name">
                        <h3 className="text-base font-medium text-gray-700 dark:text-gray-200">{data.name ?? ''}</h3>
                    </div>
                </div>
            </div>
            
            <div className="flex ml-4">
                <span className="mt-1 text-xs text-gray-600 dark:text-gray-300">{data.balance ?? 0} {data.alias ?? ''} | {data.priceUsd*data.balance ?? 0} USD</span>
            </div>
        </div>  
    )
}


