import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../store/StoreContext';
import './quote.css';
export default function Quote() {

  const {quotations, quotes , setQuote, num, setNum} = useContext(StoreContext); 
  const [index, setIndex] = useState(num);
  
  
 
  useEffect(()=>{
    if(quotes){
 setIndex( Math.ceil(Math.random()*100));

  
  setQuote(false);
 
  }},[quotes]);
 
  return (
   
    <div>
      <div className='quotes'>
         <h4 className='quote'>{quotations[index].quote}</h4><br></br>
         <h4 className="author">-{quotations[index].author}</h4>
      </div>
    </div>
  )
}
