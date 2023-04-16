import React, { useState } from 'react'
import './dashboard.css'

function Dashboard() {
    const [teamName, setTeamName] = useState('SAMPLE NAME')
    const [teamMembers, setTeamMembers] = useState(5)
    const [kartType, setKartType] = useState('')
    const [collegeName, setCollegeName] = useState('Sample Name')
    const [collegeAddress, setCollegeAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')

    const onSumbitHandler = () => {

    }

  return (
    <div className='dashboard'>
        <h2>Dashboard</h2>
        <div className="team-logo">
            <div className="logo"></div>
            <button>Edit</button>
        </div>
    <div className="form-div">
        
    <form onSubmit={onSumbitHandler}>
            <div className="input-div">
            <label htmlFor="team-name">Team Name</label> :
            <input value={teamName} type="text" name='teamName' required onChange={(e)=>setTeamName(e.target.value.toUpperCase())}/>
            </div>

            <div className="input-div">
            <label htmlFor="team-members">No of Team Members</label> :
            <input value={teamMembers} type="number" min={3} max={25} name='teamMembers' required onChange={(e)=>setTeamMembers(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="Kart Type">Kart Type</label> :
            <select name="kartType" id="kartType" value={kartType} onChange={(e)=>setKartType(e.target.value)}>
                <option value="gokart">Gokart</option>
                <option value="ekart">E-Kart</option>
            </select>
            </div>

            <div className="input-div">
            <label htmlFor="college-name">College Name</label> :
            <input value={collegeName} type="text" name='collegeName' required onChange={(e)=>setCollegeName(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="college-adress">College Address</label> :
            <input value={collegeAddress} type="text" name='collegeAddress' required onChange={(e)=>setCollegeAddress(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="city">City</label> :
            <input value={city} type="text" name='city' required onChange={(e)=>setCity(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="state">State</label> :
            <input value={state} type="text" name='state' required onChange={(e)=>setState(e.target.value)}/>
            </div>
            
            <div className="input-div">
            <label htmlFor="pincode">Pincode</label> :
            <input value={pincode} type="number" name='pincode' required onChange={(e)=>setPincode(e.target.value)}/>
            </div>

            <hr />

            <div className="input-div">
            <label htmlFor="pincode">Facualty</label> :
            <div style={{display: 'flex', alignItems: 'center', gap: '5px', textAlign: 'center'}} >
            <input type="checkbox" name='fac' style={{height: '100%', padding: '10px',}} required onChange={(e)=>setPincode(e.target.value)}/>  one
            <input type="checkbox" name='fac' required onChange={(e)=>setPincode(e.target.value)}/>  two
            </div>
            </div>
        </form>
    </div>

    </div>
  )
}

export default Dashboard