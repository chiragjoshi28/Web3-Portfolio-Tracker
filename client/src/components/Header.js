import React,{ useContext} from 'react'
import { MdDashboard,MdQrCode } from "react-icons/md";
import { AppContext } from "../context/AppContext";

export const Header = () => {
    const { walletAddress, connectWallet,walletBalance,walletCurrency} = useContext(AppContext);

    function beautifyAddress(address) {
        return address.substring(0, 5)+"..."+address.slice(-5);
    }
    return (
        <div className="container border-b border-gray-800 pt_header px-10 py-4 mb-5 max-w-full">
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-12/12 lg:w-6/12 ">
                    <h2 className="flex text-3xl font-black leading-7 items-center font-normal">
                        <MdDashboard></MdDashboard>&nbsp;Portfolio Tracker
                    </h2>
                </div>

                <div className="flex w-full md:w-12/12 lg:w-6/12 justify-end">
                   { (walletAddress)
                    ?   ( <p className="rounded-lg px-2 py-1 text-white bg-gray-700 w-max">{walletBalance} {walletCurrency}
                            <button className="rounded-lg px-2 ml-2 text-white bg-theme-2" onClick={connectWallet}>{beautifyAddress(walletAddress)}</button>
                        </p> )
                    :  (<button className="rounded-lg px-2 py-1 text-white bg-blue-600" onClick={connectWallet}>Connect</button>)
                    }                   
                </div>
            </div>
        </div>
    )
}
