import React, { useContext, useEffect, useState } from "react";
import '../components/Themes.css';
import { StoreContext } from "../store/StoreContext";

export default function Themes() {
const {theme, setTheme , check, setCheck} = useContext(StoreContext);



 const toggleTheme= ()=>{
    if(theme==='Light-mode'){
        setTheme('Dark-mode');
        setCheck(true);
    }
    else{
        setTheme('Light-mode');
        setCheck(false);
    }
 }

 useEffect(()=>{
   document.body.className = theme; 
 },[theme])

 useEffect(()=>{
     if (document.body.className==='Light-mode')
     setCheck(false);
     else
     setCheck(true);
 },[])

  return (
    <div>
      <label class="switch">
        <input type="checkbox" onClick={toggleTheme} checked={check} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}
