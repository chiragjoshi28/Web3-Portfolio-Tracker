import './App.css';
import React,  {useContext } from 'react'
import { AppContext } from "./context/AppContext"
import {Header} from './components/Header'
import {Portfolio} from './components/Portfolio'
import {BottomInfoBox} from './components/BottomInfoBox'

function App() {
  const {loadDummyData} = useContext(AppContext);
  return (
    <div className="App">
      <Header></Header>
      <Portfolio></Portfolio>
        {(loadDummyData)
          ? 
          <BottomInfoBox title="Demo Data, Please Connect Wallet or Install Metamask"></BottomInfoBox>
          :''
        }
        <div className="text-white text-center mt-4 font-bold">Made with ❤️ by <a href="https://twitter.com/chiragjoshi28" className="text-sky-500">Chirag Joshi</a></div>
    </div>
  );
}

export default App;
