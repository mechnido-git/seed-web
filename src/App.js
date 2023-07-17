import Router from "./Router";
import './App.css'
import Store, { StoreContext } from './store/StoreContext'
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

function App() { 
  
  const {setUser } = useContext(StoreContext); 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user=>{
      if(user){
        setUser(user)
      }
    })
    return unsubscribe;
  }, [])
  
  return <div className="App" ><Store><Router /></Store></div>
}

export default App;
