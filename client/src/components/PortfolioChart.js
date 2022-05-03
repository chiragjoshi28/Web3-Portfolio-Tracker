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
  const [actionUi,setActionUi] = useState(1); // 1- Loading, 2-Success, 3-ERR, 4-Empty Data
  const [portfolioData,setPortfolioData] = useState([]);
  const { walletAddress,walletNetworkId,holdingBlockChanged,loadDummyData,newUserDataLoading} = useContext(AppContext);

  let graph_component;
  let list_component;
  let MainClassName = "";
  let graph_circle_class;

    useEffect(() => {
        if(walletAddress && walletNetworkId && !holdingBlockChanged && newUserDataLoading==2){
           fetchData({chain_id:walletNetworkId,address:walletAddress})
        }
        if(holdingBlockChanged){
            fetchDataWithOutShimmer({chain_id:walletNetworkId,address:walletAddress})
        }
        if(loadDummyData){
          let data = dummyDataForPortfolio();
          setPortfolioData(data);  
          document.getElementById('wallet_value').innerHTML = getSumArrayWith2Digits(data.data[0].graph_data);
          setActionUi(2);
        }
        
    }, [walletAddress,walletNetworkId,holdingBlockChanged,loadDummyData,newUserDataLoading])

    const fetchDataWithOutShimmer = async(params) => {
      let data = await api.fetchPortfolio(params);
      //console.log(data);
      if(data!=="") { 
        setPortfolioData(data);  
        document.getElementById('wallet_value').innerHTML = getSumArrayWith2Digits(data.data[0].graph_data);
        setActionUi(2);
      }
  }
  const fetchData = async(params) => {
      try{
        setActionUi(1);
          const data = await api.fetchPortfolio(params);
          if(data.data!=="") { 
            //console.log(data);
              setPortfolioData(data);  
              document.getElementById('wallet_value').innerHTML = getSumArrayWith2Digits(data.data[0].graph_data);
              setActionUi(2);
          }
          else { setActionUi(4); }
          
      }catch(err){
          setActionUi(3);
          console.log(err);
      }
  }

  
  if(actionUi==1){
    graph_circle_class = "hidden";
    graph_component = <ShimmerCircularImage size={200} className="dark-shimmer py-8"/>;
    list_component = <div className="dark-shimmer ml-4"><ShimmerTable row={5} col={2} className="dark-shimmer"/></div>;
    
  }else if(actionUi==2){
    graph_circle_class = "";
      graph_component = <Doughnut { ...setChartData(portfolioData.data[0].graph_data,portfolioData.data[0].graph_token_colors) } />;
      list_component = <PortfolioLables TokenList={portfolioData.data[0].graph_token[0]} TokenColor={portfolioData.data[0].graph_token_colors}></PortfolioLables>
  }else if(actionUi==3){
    graph_circle_class = "hidden";
    graph_component = "Error While Fetching";
    list_component = "Error While Fetching";
  }else if(actionUi==4){
    graph_circle_class = "hidden";
    graph_component = "";
    list_component = "";
    MainClassName = "hidden"
  }

    return (
        <div className={" portfolio-chart lg:w-5/12 md:w-12/12 rounded-lg pt-0 lg:pl-0 p-8 md:ml-auto w-full mt-10 md:mt-0 "+MainClassName}>
            <div className="flex justify-content px-2 py-8 bg-theme text-white">
                <div className="item mx-auto">
                    <div className="chart relative">
                      {  graph_component } 
                      <div className={graph_circle_class}>
                        <div className="title_background"></div>
                        <h4 className="mb-4 w-full font title text-center">Wallet Value
                          <span className="block text-2xl font-bold font-orbitron">$ 
                            <span className="font-orbitron" id="wallet_value">0.00</span> 
                          </span>
                        </h4>
                      </div>
                    </div>
                </div>
            </div>
            {list_component}
        </div>
    )
}
