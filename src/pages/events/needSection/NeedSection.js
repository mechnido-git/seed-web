import {React , useContext , useEffect ,useState} from 'react'
// import tick from "../../../images/tick64.png";
import tick from "../../../images/check-mark.png";
import tickwhite from "../../../images/checkmarkwhite.png";
import "./need.css";
import { StoreContext } from "../../../store/StoreContext";

function NeedSection({event}) {

  const {theme,setCheck,setTheme, check}= useContext(StoreContext);
  useEffect(()=>{
    console.log(" check value is ",check);
  },[theme]);
  return (
    <div>
       <div className='whysection' id='features'> 
    <div>
      <h2 className='whyh1'>Why <span style={{color:"var(--primary)"}}>TN</span>KC 2023?</h2>
      <div class="grid-container">
  <div class="grid-item">
   <img className='devimg' src={ check ? tickwhite : tick } alt="image1"/>
   
    <h5 className='devtitle'>{event.why.sibling[0].title}</h5>
    <p className='devdes'>{event.why.sibling[0].description}</p>
  </div>
  <div class="grid-item">
  <img className='devimg' src={ check ? tickwhite : tick } alt="image2"/>
    <h5 className='devtitle'>{event.why.sibling[1].title}</h5>
    <p className='devdes'>{event.why.sibling[1].description}</p>
  </div>
  <div class="grid-item">
  <img className='devimg' src={ check ? tickwhite : tick } alt="image3"/>
    <h5 className='devtitle'>{event.why.sibling[2].title}</h5>
    <p className='devdes'>{event.why.sibling[2].description}</p></div>  
  <div class="grid-item">
  <img className='devimg' src={ check ? tickwhite : tick } alt="image4"/>
    <h5 className='devtitle'>{event.why.sibling[3].title}</h5>
    <p className='devdes'>{event.why.sibling[3].description}</p>
  </div>
  <div class="grid-item">
  <img className='devimg' src={ check ? tickwhite : tick } alt="image5"/>
    <h5 className='devtitle'>{event.why.sibling[4].title}</h5>
    <p className='devdes'>{event.why.sibling[4].description}</p>
  </div>
  <div class="grid-item">
  <img className='devimg' src={ check ? tickwhite : tick } alt="image6"/>
    <h5 className='devtitle'>{event.why.sibling[5].title}</h5>
    <p className='devdes'>{event.why.sibling[5].description}</p></div>  
  <div class="grid-item">
  <img className='devimg' src={ check ? tickwhite : tick } alt="image7"/>
    <h5 className='devtitle'>{event.why.sibling[6].title}</h5>
    <p className='devdes'>{event.why.sibling[6].description}</p>
  </div>
  <div class="grid-item">
  <img className='devimg' src={ check ? tickwhite : tick } alt="image8"/>
    <h5 className='devtitle'>{event.why.sibling[7].title}</h5>
    <p className='devdes'>{event.why.sibling[7].description}</p>
  </div>
   
</div>

    </div>

    </div>
    </div>
  )
}

export default NeedSection;