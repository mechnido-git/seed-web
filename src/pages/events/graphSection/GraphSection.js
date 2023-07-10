import React from 'react'
import './graphSection.css'

function GraphSection({event}) {
  return (
    <div className='grpah-section'>
      <h2>Features</h2>
      <div className="graph-container">
        {event.features.sib.map((item, key)=>
          <div key={key} className='feature'>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default GraphSection