import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader';
import ClipLoader from "react-spinners/ClipLoader";
import Quote from "../components/Quote";
import logo from "../images/seed_logo/Seed.svg";
import './quote.css';
function Spinner({loading, other}) {
  return (
   
 <div className={`spinner ${other}`}>
      <div className='loading-container'>
        <img src={logo} alt=" company logo"/>
      <Quote/>
      <ScaleLoader
        className='loader'
        color={'#00B17B'}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    
      </div>
  
    
  )
}

export default Spinner