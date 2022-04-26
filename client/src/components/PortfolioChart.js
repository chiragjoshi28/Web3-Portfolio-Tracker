import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import {PortfolioLables} from './PortfolioLables';

Chart.register(ArcElement);

const config = {
  data :{
    datasets: [{
      label: 'My First Dataset',
      data: [300, 5, 1],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    cutout : 130,
    borderRadius: 25,
    borderJoinStyle : 'round',
    spacing: 20,
    borderWidth: 0,
  }
  };

  
export const PortfolioChart = () => {
    return (
        <div className="portfolio-chart lg:w-5/12 md:w-12/12 rounded-lg pt-0 lg:pl-0 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className="flex justify-content px-2 py-8 bg-theme text-white">
                <div className="item mx-auto">
                    <div className="chart relative">
                      <Doughnut {...config} />
                      <div className="title_background"></div>
                      <h4 className="mb-4 w-full font title text-center ">Wallet Value
                        <span className="block text-2xl font-bold font-orbitron">$ 432.12
                        </span>
                      </h4>
                    </div>
                </div>
            </div>
            <PortfolioLables></PortfolioLables>
           
        </div>
    )
}
