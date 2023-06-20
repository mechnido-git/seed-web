import React, { useEffect, useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "./Spinner";
import Terms from "../pages/events/terms/Terms";
import logo from "../images/man.png";
import MemberForm from "../pages/events/eventConfig/MemberForm";
import FacultyForm from "../pages/events/eventConfig/FacultyForm";
import axios from "axios";


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

  const [members, setMembers] = useState([])
  const [memberForm, setMemberForm] = useState(false)

  const [faculty, setFaculty] = useState([])
  const [facForm, setFacForm] = useState(false)
  const [facN, setFacN] = useState(null)

  const base = "https://real-lime-iguana-coat.cyclic.app"
   // const base = 'http://localhost:4242'

  const sentMail = async(eventId, name, email, teamName) => {
    const url = `${base}/event/email`;
    const data = {
        eventId,
        name,
        teamName,
        email
    }
    try {
      const res = await axios.post(url, data)
      console.log(res);
      window.location.reload()
    } catch (error) {
      alert(error)
    }
  }

  const [current, setCurrent] = useState(0)
  const onSumbitHandler = (e) => {
    e.preventDefault();
    setLoading(true)
    onAuthStateChanged(auth, user => {
      if (user) {
        getDoc(doc(db, 'events', event.id)).then(data => {
          if (data) {
            const enrolled = data.data().enrolled
            if (enrolled && enrolled.includes(user.uid)) {
              alert('You are alredy enrolled')
              window.location.reload()
              return
            }

          }

          addDoc(collection(db, 'enrolled'), {
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
            pincode,
            members,
            faculty
          }).then(() => {
            updateDoc(doc(db, 'events', event.id), {
              enrolled: arrayUnion(user.uid)
            }).then(() => {
              sentMail(event.id, capName, teamEmail, teamName)
            }).catch(err => console.log(err))
          }).catch(err => console.log(err))

        }).catch(err => console.log(err))


      }
    })
  };

  useEffect(() => {
    if (fac === 'one') setFacN(1)
    if (fac === 'two') setFacN(2)
  }, [fac])

  const validate = (e) => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((inp, i) => {
      if (inp.value === '' && i != 0) {
        console.log(inp);
        inp.style.border = '2px solid red'
      }
    });
  }


  const removeMember = (index) => {
    let temp = members;
    temp.splice(index, 1)
    setMembers(temp)
  }

  const removeFac = (index) => {
    let temp = faculty;
    temp.splice(index, 1)
    setFaculty(temp)
  }

  const getNextPage = (e) => {
    e.preventDefault()
    //if(current === 0) updateMembers(teamMembers)
    const inputs = document.querySelectorAll(`#page-${current + 1} > .input-div > input`)
    inputs.forEach((inp, i) => {
      if (inp.value === '') {
        console.log(inp);
        inp.style.border = '2px solid red'
      }

    });
    const error = document.querySelectorAll('.error')
    error.forEach(item => item.innerHTML = "")
    var letters = /^[A-Za-z]+$/;
    var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    var pin = /[1-9][0-9]{5}/
    console.log(teamName.match(letters));
    let flag = false;
    switch (current) {
      case 0:
        if (teamName.length < 3) {
          document.getElementById('team-name').innerText = "Name Must be more than 3 characters";
          flag = true;
        } else if (!teamName.match(letters)) {
          document.getElementById('team-name').innerText = "Team Name Must be in Alphabetics";
          flag = true;
        }

        if (teamEmail.length === 0) {
          document.getElementById('team-email').innerText = "Email cannot be empty";
          flag = true;
        } else if (!teamEmail.match(email)) {
          document.getElementById('team-email').innerText = "Please include an '@' symbol and a valid domain extension such as .com or .net.";
          flag = true;
        }

        if (capName.length < 3) {
          document.getElementById('cap-name').innerText = "Name Must be more than 3 characters";
          flag = true;
        } else if (!capName.match(letters)) {
          document.getElementById('cap-name').innerText = "Name Must be in Alphabetics";
          flag = true;
        }

        if (contact.length === 0) {
          document.getElementById('team-contact').innerText = "Contact cannot be empty";
          flag = true;
        } else if (contact.length < 10) {
          document.getElementById('team-contact').innerText = "Contact must be 10 numbers";
          flag = true;
        } else if (!(!isNaN(contact) && !isNaN(parseFloat(contact)))) {
          document.getElementById('team-contact').innerText = "Contact must be numeric";
          flag = true;
        }
        if (!flag) setCurrent(current + 1);
        break

      case 2:
        flag = false;
        if (collegeName.length < 3) {
          document.getElementById('college-name').innerText = "College Name Must be more than 3 characters";
          flag = true;
        } else if (!collegeName.match(letters)) {
          document.getElementById('college-name').innerText = "College Name Must be in Alphabetics";
          flag = true;
        }

        if (adress.length < 3) {
          document.getElementById('college-address').innerText = "Address must be more than 3 characters";
          flag = true;
        }

        if (city.length < 3) {
          document.getElementById('college-city').innerText = "City must be more than 3 characters";
          flag = true;
        } else if (!city.match(letters)) {
          document.getElementById('college-city').innerText = "City must be in Alphabetics";
          flag = true;
        }

        if (state.length < 3) {
          document.getElementById('college-state').innerText = "State must be more than 3 characters";
          flag = true;
        } else if (!state.match(letters)) {
          document.getElementById('college-state').innerText = "State must be in Alphabetics";
          flag = true;
        }

        if (pincode.length === 0) {
          document.getElementById('college-pin').innerText = "pin cannot be empty";
          flag = true;
        } else if (!pincode.match(pin)) {
          document.getElementById('college-pin').innerText = "Enter a valid pin number";
          flag = true;
        }
        if (!flag) setCurrent(current + 1);
        break


      default: return
    }
  }

  const onChangeNumber = (value, setValue, current) => {
    if(value.length <= 10) setValue(current.length <= 10? current: value )
  }

  const getFields = (page) => {
    switch (page) {
      case 0:
        return <form id="page-1">
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
            <div className="error" id="team-name"></div>
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
              title="Email format is not valid"
            />
            <div className="error" id="team-email"></div>
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
            <div className="error" id="cap-name"></div>
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
              onChange={(e) => onChangeNumber(contact, setContact, e.target.value)}
              placeholder="6234567890"
            />
            <div className="error" id="team-contact"></div>
          </div>
          <div className="btns">
            <button className="cntrl" style={{ marginLeft: 'auto' }} onClick={getNextPage} type="submit">Next</button>
          </div>
        </form>;

      case 1:
        return <div className="members">
          <MemberForm setMembers={setMembers} members={members} />
          <div className="members-container">
            {members.map((item, i) => <div key={i} className="member">
              <h4>{item.name}</h4>
              <span class="material-symbols-outlined" onClick={() => removeMember(i)}>
                delete
              </span>
            </div>)}
          </div>
          <div className="btns">
            <button className="cntrl"  onClick={() => setCurrent(current - 1)} type="button">Back</button><button onMouseLeave={()=>{members.length < 3 && document.querySelector('.disable-msg').classList.remove("show")}} onMouseEnter={()=>{members.length < 3 && document.querySelector('.disable-msg').classList.add("show")}} className={`cntrl ${members.length < 3 && 'opacity'}`} onClick={members.length >= 3 ? () => setCurrent(current + 1) : null} type="button">Next</button>
            <div className="disable-msg">
            <p>Add minimum 3 members and maximum 25 members</p>
            </div>
          </div>
        </div>;

      case 2:
        return <form id="page-3">
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
            <div className="error" id="college-name"></div>
          </div>

          <div className="input-div">
            <label htmlFor="college-name">College Adress</label> :
            <textarea
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              rows={5}
              cols={5}
              placeholder="Address"
            />
            <div className="error" id="college-address"></div>
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
            <div className="error" id="college-city"></div>
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
            <div className="error" id="college-state"></div>
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
            <div className="error" id="college-pin"></div>
          </div>
          <div className="btns">
            <button className="cntrl" type="button" onClick={() => setCurrent(current - 1)}>back</button><button className="cntrl" onClick={getNextPage} type="submit">Next</button>
          </div>
        </form>;

      case 3:
        return <div className="members">
            <FacultyForm setFaculty={setFaculty} faculty={faculty} />
          <div className="members-container">
            {faculty.map((item, i) => <div key={i} className="member">
              <h4>{item.name}</h4>
              <span class="material-symbols-outlined" onClick={() => removeFac(i)}>
                delete
              </span>
            </div>)}
          </div>
          <div className="btns">
            <button className="cntrl" onClick={() => setCurrent(current - 1)} type="button">Back</button><button className={`cntrl ${faculty.length < 1 && 'opacity'}`} onMouseLeave={()=>{faculty.length < 1 && document.querySelector('.disable-msg').classList.remove("show")}} onMouseEnter={()=>{faculty.length < 1 && document.querySelector('.disable-msg').classList.add("show")}}  onClick={faculty.length >= 1? () => setCurrent(current + 1) : null} type="button">Next</button>
            <div className="disable-msg">
            <p>Add minimum 1 faculty and maximum 2 faculties</p>
            </div>
          </div>
        </div>;

      case 4: return <div className="register">
        <div className="terms">
          <input type="checkbox" checked={terms} required onChange={() => setTerms(!terms)} name="terms" />
          <label htmlFor="terms">
            I hereby agree to all{" "}
            <span id="terms" onClick={() => setTermsDiv(true)}>
              *Terms and Conditions*
            </span>
          </label>
        </div>
        <div className="btns">
          <button className="cntrl" onClick={() => setCurrent(current - 1)} type="button">back</button>
          <input type="submit" value="Register" />
        </div>
      </div>;

      default:
        break;
    }
  }

  return (
    <div className="register-form">
      {loading && <Spinner loading={loading} />}
      <h3>{event.name}</h3>
      <form onSubmit={onSumbitHandler}>

        <div className="fields">
          {getFields(current)}
        </div>
        {/* <div className="btns">
          <button className="cntrl" type="button">back</button><button className="cntrl" onClick={getNextPage} type="button">Next</button>
        </div> */}
        {/* <div className="input-div">
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

        <div className="input-div">
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
        </div>

        <div className="terms">
          <input type="checkbox" checked={terms} required onChange={()=>setTerms(!terms)} name="terms" />
          <label htmlFor="terms">
            I hereby agree to all{" "}
            <span id="terms" onClick={()=>setTermsDiv(true)}>
              *Terms and Conditions*
            </span>
          </label>
        </div>

        <input type="submit" value="Register" onClick={validate} /> */}
      </form>
      {termsDiv && <div className="wrapper">
        <Terms close={setTermsDiv} />
      </div>}
      {memberForm && (
        <div className="wrapper-reg">
          <div className="blocker" onClick={() => setMemberForm(false)}></div>
          <MemberForm setMembers={setMembers} members={members} setMemberForm={setMemberForm} />
        </div>
      )}
      {facForm && (
        <div className="wrapper-reg">
          <div className="blocker" onClick={() => setFacForm(false)}></div>
          <FacultyForm setFaculty={setFaculty} faculty={faculty} setFacForm={setFacForm} />
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
