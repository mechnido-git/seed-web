import React, { useContext, useEffect, useState } from "react";
import '../components/Themes.css';
import { StoreContext } from "../store/StoreContext";

export default function Themes() {
const {theme, setTheme , check, setCheck} = useContext(StoreContext);



const toggleTheme= ()=>{
 

  if(theme==='Light-mode'){
      setTheme('Dark-mode');
      console.log(theme);
      setCheck(false);
  }
  else{
      setTheme('Light-mode');
      
      setCheck(true);
  }
  localStorage.setItem('theme', theme);

}



useEffect(()=>{
 document.body.className = localStorage.getItem('theme'); 
},[theme])

// useEffect(()=>{
//    if ( localStorage.getItem('theme')==='Light-mode')
//    setCheck(false);
//    else
//    setCheck(true);
   
// },[])

  return (
    <div>
      <label class="switch">
        <input type="checkbox" onClick={toggleTheme} checked={check} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}
