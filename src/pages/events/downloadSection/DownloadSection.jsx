import React from 'react'

function DownloadSection() {
  return (
    <div id='downloads'><h2>Downloads</h2>
    
    
    <a onClick={(e)=>e.stopPropagation()} href="https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/events%2FhUaPM58nSpDcAbUNXSf7%2FTNKC%202023%20RULEBOOK%20V-1.0%20(1).pdf?alt=media&token=21dfd721-3ca1-4a7e-bbd9-9a1f2b5639d4&_gl=1*qsodtk*_ga*OTQxNTA1NzcyLjE2ODc5NTg1OTk.*_ga_CW55HF8NVT*MTY5NzkyMTQyNy41MS4xLjE2OTc5MjE1MzYuMjAuMC4w" rel="noreferrer" target="_blank">
                  <div className="hm">
                  <span class="material-symbols-outlined">download</span>
                 
                  <span>RULEBOOK </span> 
                  
                   
                  </div>
                  
                </a>
    </div>
  )
}

export default DownloadSection