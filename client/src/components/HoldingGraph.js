import React,  { useState,useEffect,useContext } from 'react'
import { AreaChart,Area,Tooltip,ResponsiveContainer } from "recharts";
import { HoldingList } from './HoldingList';
import { AppContext } from "../context/AppContext";
import { getPrecisedData } from '../helper/helper'
import { dummyDataForHoldings } from '../helper/dummyData'
import { ShimmerThumbnail,ShimmerTable } from "react-shimmer-effects";
import { NoData } from './NoData'
import * as api from '../api'

  export const HoldingGraph = () => {
      
    const [actionUi,setActionUi] = useState(1); // 1- Loading, 2-Success, 3-ERR, 4-Empty Data
    const [holdingData,setHoldingData] = useState([]);

    const { walletAddress,walletNetworkId,holdingBlockChanged,loadDummyData,newUserDataLoading} = useContext(AppContext);
    
    let graph_component;
    let list_component;
    let MainClassName = "";
    let NoData_component;
    let OverviewClassName = "hidden";

    useEffect(() => {
        
        if(walletAddress && walletNetworkId && !holdingBlockChanged && newUserDataLoading==2){
           fetchData({chain_id:walletNetworkId,address:walletAddress})
        }
        if(holdingBlockChanged){
            fetchDataWithOutShimmer({chain_id:walletNetworkId,address:walletAddress})
        }
        if(loadDummyData){
            let data = dummyDataForHoldings()
            setHoldingData(data); 
            document.getElementById('holdingBalance').innerHTML= getPrecisedData(data.data[0].chart_data_response.at(-1).balance);
            document.getElementById('holdingBalanceDate').innerHTML = data.data[0].chart_data_response.at(-1).date;
            setActionUi(2);
        }
    }, [walletAddress,walletNetworkId,holdingBlockChanged,loadDummyData,newUserDataLoading])

    const fetchDataWithOutShimmer = async(params) => {
        let data = await api.fetchHolding(params);
        //console.log(data);
        if(data!=="") { 
            setHoldingData(data);  
            document.getElementById('holdingBalance').innerHTML= getPrecisedData(data.data[0].chart_data_response.at(-1).balance);
            document.getElementById('holdingBalanceDate').innerHTML = data.data[0].chart_data_response.at(-1).date;
        }
    }
    const fetchData = async(params) => {
        try{
            const data = await api.fetchHolding(params);
            if(data.data!="") { 
                setHoldingData(data);  
                document.getElementById('holdingBalance').innerHTML= getPrecisedData(data.data[0].chart_data_response.at(-1).balance);
                document.getElementById('holdingBalanceDate').innerHTML = data.data[0].chart_data_response.at(-1).date;
                setActionUi(2);
            }
            else { setActionUi(4); }
            
        }catch(err){
            setActionUi(3);
            console.log(err);
        }
    }
    

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            document.getElementById('holdingBalance').innerHTML = getPrecisedData(payload[0].payload.balance);
            document.getElementById('holdingBalanceDate').innerHTML =payload[0].payload.date;
            return null;
        }
        return null;
      };
   
    
    if(actionUi==1){
        graph_component = <ShimmerThumbnail height={232} rounded className="dark-shimmer"/>;
        list_component = <div className="dark-shimmer"><ShimmerTable row={5} col={5} className="dark-shimmer"/></div>;
    }else if(actionUi==2){
        graph_component = graph(holdingData.data);
        OverviewClassName=""
        list_component = <HoldingList TokenData={holdingData.data[0].token_data_response} BlockTokenData={holdingData.data[0].block_token_data_response}></HoldingList>
    }else if(actionUi==3){
        graph_component = <div>Error While Fetching</div>;
        list_component = <div className="text-white">Error While Fetching</div>;
    }else if(actionUi==4){
        graph_component = <div>No Data to Track</div>;
        list_component = <div className="text-white">No Data to Track</div>;
        MainClassName="hidden"
        NoData_component = <NoData></NoData>
    }
    
    return (
        <>
        {NoData_component}
        <div className={MainClassName+" holding-graph mx-auto w-full md:w-12/12 lg:w-7/12 lg:pr-0 pr-0"} >
            <div className="flex-wrap justify-content px-2 py-2 bg-theme text-white">
                <div className={OverviewClassName}>
                    <h4 className="w-full p-2 text-center tracking-widest uppercase font-bold">Holdings Overview</h4>
                    <h1 className="w-full p-2 text-center text-5xl font-orbitron tracking-normal uppercase font-black">$ <span className="font-orbitron" id="holdingBalance">0.00</span></h1>                         
                </div>
                {graph_component}
                <h4 className="w-full p-2 text-center tracking-widest font-orbitron font-bold" id="holdingBalanceDate"></h4>
            </div>
                {list_component}
        </div>
        </>
    )

    function graph( data ){
    
        let chart_data = data[0].chart_data_response;
         return(
             <ResponsiveContainer className="w-full" width={"100%"} height={250}>
             <AreaChart data={chart_data} margin={{top: 10,right: 10,left: 10,bottom: 0}}>
                 <defs>
                     <linearGradient id="bg-overview" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#081F5B" stopOpacity="1"></stop>
                         <stop offset="100%" stopColor="#010C35" stopOpacity="0.25"></stop>
                     </linearGradient>
                     <linearGradient id="l-positive-holdings-overview" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#499DFF"></stop
                     ><stop offset="100%" stopColor="#3F32D4"></stop></linearGradient>
                 </defs>
                 <Tooltip wrapperStyle={{display:'none'}} content={<CustomTooltip/>} />
                 <Area  type="monotone" dataKey="balance" stroke="url(#l-positive-holdings-overview)" fillOpacity={1} fill="url(#bg-overview)" />
             </AreaChart>
             </ResponsiveContainer>
         )
    }
}



