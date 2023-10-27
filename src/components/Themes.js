import React, { useContext, useEffect, useState } from "react";
import '../components/Themes.css';
import { StoreContext } from "../store/StoreContext";

export default function Themes() {
const {theme, setTheme , check, setCheck} = useContext(StoreContext);



const toggleTheme= ()=>{
 

  if(theme==='Light-mode'){
    console.log(theme);
      setTheme('Dark-mode');
      setCheck(true);
      document.body.className = 'Dark-mode';
      localStorage.setItem('theme', 'Dark-mode');
  }
  else{
    console.log(theme);
      setTheme('Light-mode');
      
      setCheck(false);
      document.body.className = 'Light-mode';
      localStorage.setItem('theme', 'Light-mode');
  }

}



useEffect(()=>{
  let temp = localStorage.getItem('theme')
 document.body.className = temp ;
 if(temp) setCheck(temp === 'Dark-mode'? true: false)
 if(temp) setTheme(temp === 'Dark-mode'? 'Dark-mode': 'Light-mode')
},[])

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
