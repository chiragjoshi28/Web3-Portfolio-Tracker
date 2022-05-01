import React from 'react'

export function NoData() {
  return (
    <div className="NoData-UI w-full text-white mt-8 text-center px-10">
       <h2 className="text-3xl font-bold ">Opps, we don't found any Token in your wallet, <br></br> if we are wrong in this case :</h2>
       <h3 className="text-3xl mt-8">Feel Free to Give Feedback on : </h3>
       <a href="https://twitter.com/chiragjoshi28" target="blank"><button className="mt-8 bg-sky-400/100 hover:bg-sky-500 px-4 py-2 rounded-3xl"> DM on Twitter</button></a>
    </div>
  )
}
