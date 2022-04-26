import './App.css';
import {Header} from './components/Header'
import {Portfolio} from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Portfolio></Portfolio>
      {/* <div class="fixed  left-0 right-0 flex items-center justify-center py-2 mx-auto text-sm rounded-md shadow-md w-52 bottom-5 bg-blue-600 text-white opacity-95">
        <div class="animate animate-spin"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="animate animate-pulse opacity-70" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"></path></g></svg></div>
        <div class="ml-2 font-semibold">Updating holdings...</div>
      </div> */}
    </div>
  );
}

export default App;
