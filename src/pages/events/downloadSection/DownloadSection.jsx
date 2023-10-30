import React from 'react'
import "./download.css";
import p from "../../../images/rulebook.png";
function DownloadSection() {
  return (
    <div id='downloads'><h2>Downloads</h2>
    
    
 <div className="body-download" style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
 <a onClick={(e)=>e.stopPropagation()} href="https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/events%2FhUaPM58nSpDcAbUNXSf7%2FTNKC%202023%20RULEBOOK%20V-1.0.pdf?alt=media&token=daf951ff-1f60-4073-983a-526187b4a24c" rel="noreferrer" target="_blank">
                  <div className="hm" style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                    <img src={p} alt="RuleBook Download PDF"/>
                    <div>
                    <span class="material-symbols-outlined">download</span>
                 <span>RULEBOOK </span> 
                    </div>
                  </div>
                </a>
                <a onClick={(e)=>e.stopPropagation()} href="https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/events%2FhUaPM58nSpDcAbUNXSf7%2FTNKC%20SEASON-%2001%20REGISTRATION%20GUIDELINES.pdf?alt=media&token=a0648df2-5f07-4070-9688-f75b6c92505b" rel="noreferrer" target="_blank">
                  <div className="hm" style={{display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}}>
                    <img src={p} alt="Registraion Guidlines Download PDF"/>
                    <div>
                    <span class="material-symbols-outlined">download</span>
                 <span style={{textTransform:'uppercase'}}>Registration Guidelines</span> 
                    </div>
                  </div>
                </a>
 </div>
    </div>
  )
}

export default DownloadSection