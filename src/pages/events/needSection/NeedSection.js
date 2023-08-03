import {React , useContext } from 'react'
// import tick from "../../../images/tick64.png";
import tick from "../../../images/check-mark.png";
import tickwhite from "../../../images/checkmarkwhite.png";
import "./need.css";
import { StoreContext } from "../../../store/StoreContext";

function NeedSection({event}) {

  const {theme,setCheck,setTheme, check}= useContext(StoreContext);
  // useEffect(()=>{
  //   console.log(" check value is ",check);
  // },[theme]);

  const sibling = event.why.sibling;
 
  return (
    <div>
       <div className='whysection' id='features'> 
    <div>
      <h2 className='whyh1'>Why <span style={{color:"var(--primary)"}}>TN</span>KC 2023?</h2>
      <div class="grid-container">
    {
      sibling.map((element)=>{
        return  <div class="grid-item">
        <img className='devimg' src={ check ? tickwhite : tick } alt="image"/>
          <h5 className='devtitle'>{element.title}</h5>
          <p className='devdes'>{element.description}</p>
        </div>
      })
    }
    
</div>

    </div>

    </div>
    </div>
  )
}

export default NeedSection;