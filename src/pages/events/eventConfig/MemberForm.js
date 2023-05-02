import React from 'react'
import './fac.css'

function MemberForm() {
  return (
    <div className="fac-div">
        <div className="fac">
            <h3>Team Member</h3>
          <div className="input-div">
            <label htmlFor="photo">Passport Image</label>:
            <div className="div"></div>
          </div>
          <div className="input-div">
            <label htmlFor="college">College Id</label>
            :
            <input type="text" />
          </div>
          <div className="input-div">
            <label htmlFor="college">Year of Study</label>
            :
            <input type="text" />
          </div>
          <div className="input-div">
            <label htmlFor="college">Name</label>
            :
            <input type="text" />
          </div>
          <div className="input-div">
            <label htmlFor="college">Department</label>
            :
            <input type="text" />
          </div>
          <div className="input-div">
            <label htmlFor="college">Date of Birth</label>
            :
            <input type="date" />
          </div>
          <div className="input-div">
            <label htmlFor="college">Email ID</label>
            :
            <input type="email" />
          </div>
          <div className="input-div">
            <label htmlFor="college">Mobile</label>
            :
            <input type="number" />
          </div>
        </div>
  </div>
  )
}

export default MemberForm