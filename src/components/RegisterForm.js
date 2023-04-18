import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom';

function RegisterForm() {
    const [teamName, setTeamName] = useState('');
    const [teamEmail, setTeamEmail] = useState('');
    const [teamMembers, setTeamMembers] = useState(3);
    const [capName, setCapName] = useState('');
    const [kartType, setKartType] = useState('');
    const [contact, setContact] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const onSumbitHandler = (e) => {
        e.preventDefault();
        console.log(password);
    }


  return (
    <div className="register-form">
        <form onSubmit={onSumbitHandler}>
            <div className="input-div">
            <label htmlFor="team-name">Team Name</label> :
            <input value={teamName} type="text" name='teamName' required onChange={(e)=>setTeamName(e.target.value.toUpperCase())}/>
            </div>

            <div className="input-div">
            <label htmlFor="team-email">Team Email Id</label> :
            <input value={teamEmail} type="email" name='teamEmail' required onChange={(e)=>setTeamEmail(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="team-members">No of Team Members</label> :
            <input value={teamMembers} type="number" min={3} max={25} name='teamMembers' required onChange={(e)=>setTeamMembers(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="team-captain">Captain Name</label> :
            <input value={capName} type="text" name='capName' required onChange={(e)=>setCapName(e.target.value.toUpperCase())}/>
            </div>

            <div className="input-div">
            <label htmlFor="Kart Type">Kart Type</label> :
            <select name="kartType" id="kartType" value={kartType} onChange={(e)=>setKartType(e.target.value)}>
                <option value="gokart">Go-kart</option>
                <option value="ekart">E-Kart</option>
            </select>
            </div>

            <div className="input-div">
            <label htmlFor="team-contact">Contact Number</label> :
            <input value={contact} type="tel" min={10} name='contact' required onChange={(e)=>setContact(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="college-name">College Name</label> :
            <input value={collegeName} type="text" name='collegeName' required onChange={(e)=>setCollegeName(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="password">Password</label> :
            <input value={password} type="password" name='password' required onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className="input-div">
            <label htmlFor="confirm-password">Confirm Passwrd</label> :
            <input value={confPassword} type="password" name='confPassword' required onChange={(e)=>setConfPassword(e.target.value)}/>
            </div>

            <div className="terms">
            <input type="checkbox" name='terms'/>
            <label htmlFor="terms">I hereby agree to all <Link target='_blank' id='terms' to='terms'>*Terms and Conditions*</Link> </label> 
            </div>

            <input type="submit" value="Register" />

        </form>
    </div>
  )
}

export default RegisterForm