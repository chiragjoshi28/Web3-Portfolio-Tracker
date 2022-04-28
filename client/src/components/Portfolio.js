import React from 'react'
import { PortfolioChart } from './PortfolioChart'
import { HoldingGraph } from './HoldingGraph'

export const Portfolio = () => {
    return (
        <div className="container mx-auto flex flex-wrap">
            <HoldingGraph></HoldingGraph>
            <PortfolioChart></PortfolioChart>
        </div>
    )
}
