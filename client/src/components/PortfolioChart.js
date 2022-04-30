import React,{useState,useContext,useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import {PortfolioLables} from './PortfolioLables';
import { AppContext } from "../context/AppContext";
import { ShimmerCircularImage,ShimmerTable } from "react-shimmer-effects";
import { setChartData,getSumArrayWith2Digits } from '../helper/helper'
import { dummyDataForPortfolio } from '../helper/dummyData'
import * as api from '../api'

Chart.register(ArcElement);
  
export const PortfolioChart = () => {
  const [isLoading,setIsLoading] = useState(1);
  const [isErr,setIsErr] = useState(0);
  const [portfolioData,setPortfolioData] = useState([]);
  const { walletAddress,walletNetworkId,holdingBlockChanged,loadDummyData} = useContext(AppContext);

  let graph_component;
  let list_component;
  let graph_loader;

    useEffect(() => {
        if(walletAddress && walletNetworkId && !holdingBlockChanged){
           fetchData({chain_id:walletNetworkId,address:walletAddress})
        }
        if(holdingBlockChanged){
            fetchDataWithOutShimmer({chain_id:walletNetworkId,address:walletAddress})
        }
        if(loadDummyData){
          let data = dummyDataForPortfolio();
          setPortfolioData(data);  
          document.getElementById('wallet_value').innerHTML = getSumArrayWith2Digits(data.data[0].graph_data);
          setIsLoading(0);
        }
    }, [walletAddress,walletNetworkId,holdingBlockChanged,loadDummyData])

    const fetchDataWithOutShimmer = async(params) => {
      let data = await api.fetchPortfolio(params);
      //console.log(data);
      if(data!="") { 
        setPortfolioData(data);  
        document.getElementById('wallet_value').innerHTML = getSumArrayWith2Digits(data.data[0].graph_data);
        setIsLoading(0);
      }
  }
  const fetchData = async(params) => {
      try{
          setIsLoading(1);
          const data = await api.fetchPortfolio(params);
          if(data!="") { 
            //console.log(data);
              setPortfolioData(data);  
              document.getElementById('wallet_value').innerHTML = getSumArrayWith2Digits(data.data[0].graph_data);
              setIsLoading(0);
          }
          else { setIsErr(1); }
          
      }catch(err){
          setIsErr(1);
          setIsLoading(0);
          console.log(err);
      }
  }

  
  if(isLoading){
    graph_component = <ShimmerCircularImage size={300} className="dark-shimmer py-8"/>;
    list_component = <div className="dark-shimmer ml-4"><ShimmerTable row={5} col={2} className="dark-shimmer"/></div>;
    
  }else if(isLoading==0 && isErr==0){
      graph_component = <Doughnut { ...setChartData(portfolioData.data[0].graph_data,portfolioData.data[0].graph_token_colors) } />;
      list_component = <PortfolioLables TokenList={portfolioData.data[0].graph_token[0]} TokenColor={portfolioData.data[0].graph_token_colors}></PortfolioLables>
  }else if(isErr){
      graph_component = <div>Error While Fetching</div>;
      list_component = <div className="text-white">Error While Fetching</div>;
  }

    return (
        <div className="portfolio-chart lg:w-5/12 md:w-12/12 rounded-lg pt-0 lg:pl-0 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className="flex justify-content px-2 py-8 bg-theme text-white">
                <div className="item mx-auto">
                  {graph_loader}
                    <div className="chart relative">
   
                      {  graph_component } 
                      <div className="title_background"></div>
                      <h4 className="mb-4 w-full font title text-center">Wallet Value
                        <span className="block text-2xl font-bold font-orbitron">$ 
                          <span className="font-orbitron" id="wallet_value">0.00</span> 
                        </span>
                      </h4>
                    </div>
                </div>
            </div>
            {list_component}
        </div>
    )
}
