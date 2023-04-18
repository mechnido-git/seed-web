import Router from "./Router";
import './App.css'
import Store from './store/StoreContext'

function App() {
  
  return <div className="App"><Store><Router /></Store></div>
}

export default App;
