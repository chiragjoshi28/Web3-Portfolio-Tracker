import './App.css';
import React,  {useContext } from 'react'
import { AppContext } from "./context/AppContext"
import {Header} from './components/Header'
import {Portfolio} from './components/Portfolio'

function App() {
  const {loadDummyData} = useContext(AppContext);
  return (
    <div className="App">
      <Header></Header>
      <Portfolio></Portfolio>
        {(loadDummyData)
          ? <div className="fixed  left-0 right-0 flex items-center justify-center py-2 mx-auto text-sm rounded-md shadow-md w-max bottom-5 bg-blue-900 text-white opacity-95">
              <div className="mx-2 font-semibold">Demo Data, Please Connect Wallet</div>
            </div>
          :''
        }
    </div>
  );
}

export default App;
