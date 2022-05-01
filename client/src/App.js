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
          <BottomInfoBox title="Demo Data, Please Connect Wallet"></BottomInfoBox>
          :''
        }
    </div>
  );
}

export default App;
