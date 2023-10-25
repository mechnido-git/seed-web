import React from 'react'
import "./download.css";
import p from "../../../images/rulebook.png";
function DownloadSection() {
  return (
    <div id='downloads'><h2>Downloads</h2>
    
    
    <a onClick={(e)=>e.stopPropagation()} href="https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/events%2FhUaPM58nSpDcAbUNXSf7%2FTNKC%202023%20RULEBOOK%20V-1.0.pdf?alt=media&token=daf951ff-1f60-4073-983a-526187b4a24c" rel="noreferrer" target="_blank">
                  <div className="hm">
                    <img src={p} alt="RuleBook Download PDF"/>
                    <div>
                    <span class="material-symbols-outlined">download</span>
                 <span>RULEBOOK </span> 
                    </div>
                  </div>
                </a>
    </div>
  )
}

export default DownloadSection