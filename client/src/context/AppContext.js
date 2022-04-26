import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import millify from 'millify';

export const AppContext = React.createContext();

const { ethereum } = window;

export const AppProvider = ({children}) => {

    const [walletAddress, setWalletAddress] = useState("");
    const [walletNetworkId, setWalletNetworkId] = useState("");
    const [walletCurrency, setWalletCurrency] = useState("")
    const [walletBalance, setWalletBalance] = useState("")

    const chainList =[
        {
            id:1,
            name:'Ethereum',
            currency:'ETH'
        },
        {
            id:56,
            name:'Binance Smart Chain',
            currency:'BNB'
        },
        {
            id:137,
            name:'Polygon',
            currency:'MATIC',
        },

    ]
    const checkIfWalletIsConnect = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length) {
            setWalletAddress(accounts[0]);
            
            if(window.ethereum.networkVersion){
                chainList.map( (v,i) => {
                    if(window.ethereum.networkVersion == v.id)
                    {
                        setWalletNetworkId(v.id);
                        setWalletCurrency(v.currency);
                        try {
                                if(walletAddress){
                                    const provider = new ethers.providers.Web3Provider(ethereum);
                                    provider.getBalance(walletAddress).then((balance) => {
                                    setWalletBalance(millify(ethers.utils.formatEther(balance),{precision: 4}));
                            })
                                }
                            }  catch(error) {
                                console.log('Error connecting... while BalanceFetch' + error);
                            } 
                    
                    }
                })
            }
            
          } else {
            console.log("No accounts found");
          }
        } catch (error) {
          console.log(error);
        }
    };
    const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setWalletAddress(accounts[0]);
            
            if(window.ethereum.networkVersion){
                chainList.map( (v,i) => {
                    if(window.ethereum.networkVersion == v.id)
                    {
                        setWalletNetworkId(v.id);
                        setWalletCurrency(v.currency);
                        try {
                                if(walletAddress){
                                    const provider = new ethers.providers.Web3Provider(ethereum);
                                    provider.getBalance(walletAddress).then((balance) => {
                                    setWalletBalance(millify(ethers.utils.formatEther(balance),{precision: 4}));
                            })
                                }
                            }  catch(error) {
                                console.log('Error connecting... while BalanceFetch' + error);
                            } 
                    
                    }
                })
            }
          window.location.reload();
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
    };

    window.ethereum.on('chainChanged', function () {
        window.location.reload(); 
    });

    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload();
    });

    useEffect(() => {
        checkIfWalletIsConnect();
        console.log(walletAddress+" - "+walletCurrency+" - "+walletBalance);
      },[walletAddress,walletBalance]);
    
      return (
        <AppContext.Provider
          value={{
            connectWallet,
            walletAddress,
            walletBalance,
            walletNetworkId,
            walletCurrency
          }}
        >
          {children}
        </AppContext.Provider>
      )
    }
