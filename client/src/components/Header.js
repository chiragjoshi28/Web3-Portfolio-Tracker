import React,{ useContext,useEffect,useRef,useState} from 'react'
import { MdDashboard } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import { beautifyAddress } from "../helper/helper"
import  moment  from "moment"
import LoadingBar from 'react-top-loading-bar'
import { BottomInfoBox } from './BottomInfoBox'
import * as api from '../api'


export const Header = () => {
    const { walletAddress,connectWallet,walletNetworkId,walletBalance,walletCurrency,loadDummyData,setNewUserDataLoading,metamaskAvailable} = useContext(AppContext);
    const ref = useRef(null)
    const [loaderInfo,setLoaderInfo] = useState(0);
    let loaderInfo_component = "";
    const MINUTE_MS = 30000;
    useEffect(()=>{
        const interval = setInterval(() => {
            if(walletAddress && walletNetworkId){
                checkUser_NextUpdate({chain_id:walletNetworkId,address:walletAddress})
            }
          }, MINUTE_MS);
          
        if(walletAddress && walletNetworkId){
            checkUser_NextUpdate({chain_id:walletNetworkId,address:walletAddress})
        }
        if(loadDummyData){
            setLoaderInfo(1);
        }
        return () => clearInterval(interval);
    },[walletAddress,walletNetworkId,loadDummyData]);

    const checkUser_NextUpdate = async(params) => {
        if(!walletNetworkId && !walletAddress) return 0;
        ref.current.continuousStart()
        try{
        let data = await api.checkUser_NextUpdate(params);
        if(data.status===200){
            
            if(data.data.UserExist!=0){
                let currentDateTime = moment().local().format('YYYY-MM-DD HH:mm:ss')
                let NextUpdateTime = moment(data.data.NextUpdateTime).local().format('YYYY-MM-DD HH:mm:ss')
                if(currentDateTime >= NextUpdateTime){
                    console.log(currentDateTime+" ::: "+NextUpdateTime+" Update Required");
                    await fetchDataFromCovalent(params)
                }else{
                    console.log(currentDateTime+"-"+NextUpdateTime+" Update Not Required");
                    ref.current.complete()
                    setNewUserDataLoading(2);
                    setLoaderInfo(1);
                }
            }else {
                await fetchDataFromCovalent(params)
            }
        }
        }catch(err){
            console.log(err)
        }
    }
    const fetchDataFromCovalent = async(params) => {
        await api.fetchDataFromCovalent(params);
        ref.current.complete()
        setNewUserDataLoading(2);
        setLoaderInfo(1);
    }

    if(loaderInfo==0){
        loaderInfo_component = <BottomInfoBox title="Please Wait ! It may take up to 60 Seconds"></BottomInfoBox>;
    }else if(loaderInfo==1){
        loaderInfo_component = "";
    }
    
    return (
        <div className="container border-b border-gray-800 pt_header px-10 py-4 mb-5 max-w-full">
            <LoadingBar color="#f11946" ref={ref} shadow={true} />
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-12/12 lg:w-6/12 ">
                    <h2 className="flex text-3xl font-black leading-7 items-center font-normal">
                        <MdDashboard></MdDashboard>&nbsp;Portfolio Tracker
                    </h2>
                </div>

                <div className="flex w-full justify-center mt-4 md:w-12/12 lg:w-6/12 md:justify-end md:mt-0">
                   { (walletAddress)
                    ?   ( <p className="rounded-lg px-2 py-1 text-white bg-gray-700 w-max">{walletBalance} {walletCurrency}
                            <button className="rounded-lg px-2 ml-2 text-white bg-theme-2" onClick={connectWallet}>{beautifyAddress(walletAddress)}</button>
                        </p> )
                    :  (metamaskAvailable) ? (<button className="rounded-lg px-2 py-1 text-white bg-blue-600" onClick={connectWallet}>Connect</button>)
                        : (<a href="https://metamask.io/download/"><button className="rounded-lg px-2 py-1 text-white bg-blue-600">Please Install MetaMask Wallet</button> </a>)
                    }                   
                </div>
            </div>
            {loaderInfo_component}
        </div>
    )
}
