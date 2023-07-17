import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../store/StoreContext';
import './quote.css';
export default function Quote() {

  const {quotations} = useContext(StoreContext); 
  let num= 0;
  useEffect(() => {
    num = Math.ceil(Math.random()*101);
  }, []);
  

  const [index, setIndex] = useState(num);
  return (
   
    <div>
      <div className='quotes'>
         <h4 className='quote'>{quotations[index].quote}</h4><br></br>
         <h4 className="author">-{quotations[index].author}</h4>
      </div>
    </div>
  )
}
