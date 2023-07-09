import React from 'react'

function WorkflowSection({event}) {
  return (
    <div>
        <h1>{event.title}</h1>
        <h3>{event.subtitle}</h3>
    </div>
  )
}

export default WorkflowSection