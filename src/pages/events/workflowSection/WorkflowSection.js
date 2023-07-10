import React, { useEffect } from 'react'
import './workflow.css'

function WorkflowSection({ event }) {

  return (
    <div className='worklow-secrion'>
      <h2>{event.workflow.title}</h2>
      <div className="workflow-container">
        <div className="back">
          {[1,2,3,4].map((item, key)=><img key={key} src='https://img.freepik.com/free-vector/karting-race-concept-illustration_114360-12216.jpg?w=1060&t=st=1688982672~exp=1688983272~hmac=464cbe8602006202bb129d3480f99a2121b1a52dfa45d1d1fc49ba1b21c08ad2' alt="" />)}
        </div>
        {event.workflow.data.map((item, key) => (
          <div className="content">
            <h3>{key + 1}</h3>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkflowSection