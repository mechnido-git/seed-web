import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../store/StoreContext';
import './quote.css';
export default function Quote() {

  const {quotations, quotes , setQuote, num, setNum} = useContext(StoreContext); 
  const [index, setIndex] = useState(num);
  
 
  return (
   
    <div>
      <div className='quotes'>
         <h4 className='quote'>{quotes.quote}</h4><br></br>
         <h4 className="author">-{quotes.author}</h4>
      </div>
    </div>
  )
}
