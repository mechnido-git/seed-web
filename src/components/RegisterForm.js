import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "./Spinner";
import Terms from "../pages/events/terms/Terms";

function RegisterForm({ event }) {
  const [teamName, setTeamName] = useState("");
  const [teamEmail, setTeamEmail] = useState("");
  const [teamMembers, setTeamMembers] = useState(3);
  const [capName, setCapName] = useState("");
  const [kartType, setKartType] = useState("gokart");
  const [contact, setContact] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [fac, setFac] = useState('one');
  const [terms, setTerms] = useState(false);
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(false)
  const [termsDiv, setTermsDiv] = useState(false);
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')

  const onSumbitHandler = (e) => {
    console.log(e);
    e.preventDefault();

    setLoading(true)
    onAuthStateChanged(auth, user=>{
        if(user){
            getDoc(doc(db, 'events', event.id)).then(data=>{
                if(data){
                    const enrolled = data.data().enrolled
                    if(enrolled && enrolled.includes(user.uid)){
                        alert('You are alredy enrolled')
                        window.location.reload()
                        return
                    }
                    
                }

                addDoc(collection(db, 'enrolled'),{
                    id: user.uid,
                    eventId: event.id,
                    teamName,
                    teamEmail,
                    teamMembers,
                    capName,
                    kartType,
                    contact,
                    collegeName,
                    fac,
                    adress,
                    city,
                    state,
                    pincode
                }).then(()=>{
                    updateDoc(doc(db, 'events', event.id),{
                        enrolled: arrayUnion(user.uid)
                    }).then(()=>window.location.reload()).catch(err=>console.log(err))
                }).catch(err=>console.log(err))
                
            }).catch(err=>console.log(err))
            
            
        }
    })
  };

  const validate = (e) =>{
    const inputs = document.querySelectorAll('input')
    inputs.forEach((inp ,i) => {
      if(inp.value === '' && i != 0 ){
        console.log(inp);
        inp.style.border = '2px solid red'
      }
    });
  }

  return (
    <div className="register-form">
        {loading && <Spinner loading={loading} />}
      <h3>{event.name}</h3>
      <form onSubmit={onSumbitHandler}>
        <div className="input-div">
          <label htmlFor="team-name">Team Name</label> :
          <input
            minLength={3}
            value={teamName}
            type="text"
            name="teamName"
            required
            onChange={(e) => setTeamName(e.target.value.toUpperCase())}
            placeholder="Name"
          />
        </div>

        <div className="input-div">
          <label htmlFor="team-email">Team Email Id</label> :
          <input
            value={teamEmail}
            type="email"
            name="teamEmail"
            required
            onChange={(e) => setTeamEmail(e.target.value)}
            placeholder="example@gmail.com"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>

        <div className="input-div">
          <label htmlFor="team-members">No of Team Members</label> :
          <input
            value={teamMembers}
            type="number"
            min={3}
            max={25}
            name="teamMembers"
            required
            onChange={(e) => setTeamMembers(e.target.value)}
            placeholder="3-25"
            id="members"
          />
        </div>

        <div className="input-div">
          <label htmlFor="team-captain">Captain Name</label> :
          <input
            minLength={3}
            value={capName}
            type="text"
            name="capName"
            required
            onChange={(e) => setCapName(e.target.value.toUpperCase())}
            placeholder="Name"
          />
        </div>

        <div className="input-div">
          <label htmlFor="Kart Type">Kart Type</label> :
          <select
            name="kartType"
            id="kartType"
            value={kartType}
            onChange={(e) => setKartType(e.target.value)}
          >
            <option value="gokart">Go-kart</option>
            <option value="ekart">E-Kart</option>
          </select>
        </div>

        <div className="input-div">
          <label htmlFor="team-contact">Contact Number</label> :
          <input
            value={contact}
            type="tel"
            min={10}
            name="contact"
            required
            onChange={(e) => setContact(e.target.value)}
            pattern="[6789][0-9]{9}" title="Please enter valid phone number"
            placeholder="6234567890"
          />
        </div>

        <div className="input-div">
          <label htmlFor="college-name">College Name</label> :
          <input
            minLength={3}
            value={collegeName}
            type="text"
            name="adress"
            required
            onChange={(e) => setCollegeName(e.target.value)}
            placeholder="College"
          />
        </div>

        <div className="input-div">
          <label htmlFor="college-name">College Adress</label> :
          <textarea
          value={adress}
          onChange={(e)=>setAdress(e.target.value)}
          rows={5}
          cols={5}
          placeholder="Address"
        />
        </div>

        <div className="input-div">
          <label htmlFor="college-name">City</label> :
          <input
            minLength={3}
            value={city}
            type="text"
            name="city"
            required
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>

        <div className="input-div">
          <label htmlFor="college-name">State</label> :
          <input
            minLength={3}
            value={state}
            type="text"
            name="state"
            required
            onChange={(e) => setState(e.target.value)}
            placeholder="Tamil Nadu"
          />
        </div>

        <div className="input-div no-arrow">
          <label htmlFor="college-name">Pincode</label> :
          <input
            min={6}
            value={pincode}
            type="number"
            name="pincode"
            required
            onChange={(e) => setPincode(e.target.value)}
            placeholder="65251"
            pattern="[1-9][0-9]{5}" title="Please enter a valid zip code, example: 65251" 
          />
        </div>

        <div className="input-div" onChange={(e)=>setFac(e.target.value)}>
          <label htmlFor="pincode">Faculty</label> :
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textAlign: "center",
            }}
          >
            <input
            checked={fac == 'one'? true : false}
              type="radio"
              name="fac"
              style={{ height: "100%", padding: "10px" }}
              value='one'
            />
            One
            <input type="radio" name="fac" value="two" checked={fac == 'two'? true : false} />
            Two
          </div>
        </div>

        {/*<div className="input-div">
          <label htmlFor="password">Password</label> :
          <input
            value={password}
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-div">
          <label htmlFor="confirm-password">Confirm Passwrd</label> :
          <input
            value={confPassword}
            type="password"
            name="confPassword"
            required
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>*/}

        <div className="terms">
          <input type="checkbox" checked={terms} required onChange={()=>setTerms(!terms)} name="terms" />
          <label htmlFor="terms">
            I hereby agree to all{" "}
            <span id="terms" onClick={()=>setTermsDiv(true)}>
              *Terms and Conditions*
            </span>
          </label>
        </div>

        <input type="submit" value="Register" onClick={validate} />
      </form>
      {termsDiv && <div className="wrapper">
        <Terms close={setTermsDiv} />
      </div>}
    </div>
  );
}

export default RegisterForm;
