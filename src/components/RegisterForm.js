import React, { useEffect, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "./Spinner";
import Terms from "../pages/events/terms/Terms";
import logo from "../images/man.png";
import MemberForm from "../pages/events/eventConfig/MemberForm";
import FacultyForm from "../pages/events/eventConfig/FacultyForm";
import axios from "axios";
import cancellogo from "../images/cancel_icon.png";
import { displayError, onChangeInput, validateEmail, validateName, validatePassword, validatePhone } from "../pages/signin/SignIn";
const { initializeApp } = require("firebase/app");
// const { firebaseConfig } = require("../firebase/config");
// const {
//   doc,
//   updateDoc,
//   getFirestore,
//   collection,
//   addDoc,
//   getDoc,
//   arrayUnion,
//   serverTimestamp,
// } = require("firebase/firestore");

// initializeApp(firebaseConfig);

function RegisterForm({ event, setRegister }) {
  const [teamName, setTeamName] = useState("");
  const [teamEmail, setTeamEmail] = useState("");
  const [teamMembers, setTeamMembers] = useState(3);
  const [capName, setCapName] = useState("");
  const [kartType, setKartType] = useState("gokart");
  const [contact, setContact] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [fac, setFac] = useState('one');
  const [terms, setTerms] = useState(false);
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(false)
  const [termsDiv, setTermsDiv] = useState(false);
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [pay , setpay] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  console.log(event);

  const [members, setMembers] = useState([])
  const [faculty, setFaculty] = useState([])
  const [current, setCurrent] = useState(-1)

  const navigate = useNavigate()

const tempdata=(e)=>{
  e.preventDefault();


  
}

useEffect(()=>{
  onAuthStateChanged(auth, async(user)=>{
    try {
      if(user){
        setUid(user.uid)
        setEmail(user.email)
        setUsername(user.displayName)
        const data = await getDoc(doc(db, 'events', event.id))
        if(data){
          const enrolled = data.data().enrolled
          if (enrolled && enrolled.includes(user.uid)) {

            alert('You are alredy enrolled')
            window.location.reload()
            return
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  })
}, [])

 
  const onSumbitHandler = async (e) => {
    e.preventDefault();
    if(pay === null) return alert("Select payment")

    setLoading(true)
          try {
                const eventData = {
                  userId: uid,
                  eventId: event.id,
                  email: email,
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
                }

             //sending the request to the backend
                const url = `${process.env.REACT_APP_SERVER_URL}/register`;
                const info = {
                  name: event.name,
                  ...eventData,
                  username: username,
                  fullPay: pay? false: true,
                  phase: pay? 1: null,
                }
      
            const res = await axios.post(url, info);
            window.location.href = res.data.url
          } catch (error) {
            console.log(error);

          } finally {

            setLoading(false)
          }

  };

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
    error.forEach(item => item.style.display = "none")
    error.forEach(item => item.innerHTML = "")
    var letters = /^[a-zA-Z ]*$/
    var pin = /[1-9][0-9]{5}/
    let flag = false;
    switch (current) {
      case 0:
        let validator = [
          {
            input: document.getElementById('team-name'),
            error: document.getElementById('team-name-error'),
            result: validateName(teamName)
          },
          {
            input: document.getElementById('team-email'),
            error: document.getElementById('team-email-error'),
            result: validateEmail(teamEmail)
          },
          {
            input: document.getElementById('cap-name'),
            error: document.getElementById('cap-name-error'),
            result: validateName(capName)
          },
          {
            input: document.getElementById('team-contact'),
            error: document.getElementById('team-contact-error'),
            result: validatePhone(contact)
          }
        ]

        validator.forEach(item=>{
          if(item.result.error){
            displayError(item.input, item.error, item.result.msg)
            flag = true
          }
        })

        if (!flag) setCurrent(current + 1);
        break

      case 2:
        flag = false;
        if (collegeName.length < 3) {
          document.getElementById('college-name').style.display = 'block'
          document.getElementById('college-name').innerText = "College Name Must be more than 3 characters";
          flag = true;
        } else if (!collegeName.match(letters)) {
          document.getElementById('college-name').style.display = 'block'
          document.getElementById('college-name').innerText = "College Name Must be in Alphabetics";
          flag = true;
        }

        if (adress.length < 3) {
          document.getElementById('college-address').style.display = 'block'
          document.getElementById('college-address').innerText = "Address must be more than 3 characters";
          flag = true;
        }

        if (city.length < 3) {
          document.getElementById('college-city').style.display = 'block'
          document.getElementById('college-city').innerText = "City must be more than 3 characters";
          flag = true;
        } else if (!city.match(letters)) {
          document.getElementById('college-city').style.display = 'block'
          document.getElementById('college-city').innerText = "City must be in Alphabetics";
          flag = true;
        }

        if (state.length < 3) {
          document.getElementById('college-state').style.display = 'block'
          document.getElementById('college-state').innerText = "State must be more than 3 characters";
          flag = true;
        } else if (!state.match(letters)) {
          document.getElementById('college-state').style.display = 'block'
          document.getElementById('college-state').innerText = "State must be in Alphabetics";
          flag = true;
        }

        if (pincode.length === 0) {
          document.getElementById('college-pin').style.display = 'block'
          document.getElementById('college-pin').innerText = "pin cannot be empty";
          flag = true;
        } else if (!pincode.match(pin)) {
          document.getElementById('college-pin').style.display = 'block'
          document.getElementById('college-pin').innerText = "Enter a valid pin number";
          flag = true;
        }
        if (!flag) setCurrent(current + 1);
        break


      default: return
    }
  }

  const onChangeNumber = (value, setValue, current) => {
    if (value.length <= 10) setValue(current.length <= 10 ? current : value)
  }

  function checkTerms(e){
    if(!terms) return alert("Accept Terms and Conditions")
    setCurrent(current + 1)
  }

  const getFields = (page) => {
    switch (page) {
      case 0:
        return <form id="page-1">

          <div className="input-div">
            <label htmlFor="team-name">Team Name</label>
            <p className="col">:</p>
            <input
              minLength={3}
              value={teamName}
              type="text"
              name="team-name"
              data-type="name"
              required
              onChange={(e) => onChangeInput(e, setTeamName, "team-name-error")}
              
              placeholder="Name"
            />
            <span style={{ display: 'none' }} className="error" id="team-name-error"></span>
          </div>

          <div className="input-div">
            <label htmlFor="team-email">Team Email Id</label>
            <p className="col">:</p>
            <input
              value={teamEmail}
              type="email"
              name="team-email"
              required
              onChange={(e) => onChangeInput(e, setTeamEmail, "team-email-error")}
              data-type='email'
              placeholder="example@gmail.com"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Email format is not valid"
            />
            <div style={{ display: 'none' }} className="error" id="team-email-error"></div>
          </div>

          <div className="input-div">
            <label htmlFor="team-captain">Captain Name</label>
            <p className="col">:</p>
            <input
              minLength={3}
              value={capName}
              type="text"
              name="cap-name"
              required
              onChange={(e) => onChangeInput(e, setCapName, "cap-name-error")}
              data-type="name"
              placeholder="Name"
            />
            <div style={{ display: 'none' }} className="error" id="cap-name-error"></div>
          </div>

          <div className="input-div">
            <label htmlFor="Kart Type">Kart Type</label>
            <p className="col">:</p>
            <select
              name="kartType"
              id="kartType"
              value={kartType}
              onChange={(e) => setKartType(e.target.value)}
            >
              {event.types.map(item=><option value={item}>{item}</option>)}
            </select>
          </div>

          <div className="input-div">
            <label htmlFor="team-contact">Contact Number</label>
            <p className="col">:</p>
            <input
              value={contact}
              id="team-contact"
              type="tel"
              min={10}
              name="contact"
              required
              data-type='phone'
              onChange={(e) => onChangeInput(e, setContact, "team-contact-error")}
              placeholder="6234567890"
            />
            <div style={{ display: 'none' }} className="error" id="team-contact-error"></div>
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
            <button className="cntrl" onClick={() => setCurrent(current - 1)} type="button">Back</button><button onMouseLeave={() => { members.length < 3 && document.querySelector('.disable-msg').classList.remove("show") }} onMouseEnter={() => { members.length < 3 && document.querySelector('.disable-msg').classList.add("show") }} className={`cntrl ${members.length < 3 && 'opacity'}`} onClick={members.length >= 3 ? () => setCurrent(current + 1) : null} type="button">Next</button>
            <div className="disable-msg">
              <p>Add minimum 3 members and maximum 25 members</p>
            </div>
          </div>
        </div>;

      case 2:
        return <form id="page-3">
          <div className="input-div">
            <label htmlFor="college-name">College Name</label>
            <p className="col">:</p>
            <input
              minLength={3}
              value={collegeName}
              type="text"
              name="adress"
              required
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="College"
            />
            <div style={{ display: 'none' }} className="error" id="college-name"></div>
          </div>

          <div className="input-div">
            <label htmlFor="college-name">College Adress</label>
            <p className="col">:</p>
            <textarea
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              rows={5}
              cols={5}
              placeholder="Address"
            />
            <div style={{ display: 'none' }} className="error" id="college-address"></div>
          </div>

          <div className="input-div">
            <label htmlFor="college-name">City</label>
            <p className="col">:</p>
            <input
              minLength={3}
              value={city}
              type="text"
              name="city"
              required
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
            <div style={{ display: 'none' }} className="error" id="college-city"></div>
          </div>

          <div className="input-div">
            <label htmlFor="college-name">State</label>
            <p className="col">:</p>
            <input
              minLength={3}
              value={state}
              type="text"
              name="state"
              required
              onChange={(e) => setState(e.target.value)}
              placeholder="Tamil Nadu"
            />
            <div style={{ display: 'none' }} className="error" id="college-state"></div>
          </div>
          <div className="input-div no-arrow">
            <label htmlFor="college-name">Pincode</label>
            <p className="col">:</p>
            <input
              min={6}
              value={pincode}
              type="number"
              name="pincode"
              required
              onChange={(e) => setPincode(e.target.value)}
              placeholder="652512"
              pattern="[1-9][0-9]{5}" title="Please enter a valid zip code, example: 652512"
            />
            <div style={{ display: 'none' }} className="error" id="college-pin"></div>
          </div>
          <div className="btns">
            <button className="cntrl" type="button" onClick={() => setCurrent(current - 1)}>Back</button><button className="cntrl" onClick={getNextPage} type="submit">Next</button>
          </div>
        </form>;

      case 2:
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
            <button className="cntrl" onClick={() => setCurrent(current - 1)} type="button">Back</button><button className={`cntrl ${faculty.length < 1 && 'opacity'}`} onMouseLeave={() => { faculty.length < 1 && document.querySelector('.disable-msg').classList.remove("show") }} onMouseEnter={() => { faculty.length < 1 && document.querySelector('.disable-msg').classList.add("show") }} onClick={faculty.length >= 1 ? () => setCurrent(current + 1) : null} type="button">Next</button>
            <div className="disable-msg">
              <p>Add minimum 1 faculty and maximum 2 faculties</p>
            </div>
          </div>
        </div>;

      case 3: return <div className="register">
        <div className="terms">
          <div className="check">
            <input type="checkbox" checked={terms} required onChange={() => setTerms(!terms)} name="terms" />
            <label htmlFor="terms">
              I hereby agree to all{" "}
              <span id="terms-btn" onClick={() => window.open("/#/terms", "_blank")}>
                *Terms and Conditions*
              </span>
            </label>
          </div>

           {/* <div className="fee">
            <h4>Regisration fee : {event.regFeeTxt}</h4>
          </div>  */}

        </div>

        <div className="btns">
          <button className="cntrl" onClick={() => setCurrent(current - 1)} type="button">Back</button>
          <button className="cntrl" onClick={checkTerms} type="button">Proceed to payment</button>
          
        </div>

      </div>;

      case 4:
        return < div className="pay1">

          <h1>Name of the event</h1>
          <div className="p1">

            <div className="left">

            <div>
              <label>Amount</label><br/>
              <input type="Text" value= "24,999 INR"/>
            </div>

            <div>
              <label>Name</label><br/>
              <input type="Text" value={username}/>
            </div>

            </div>  

            <div className="right">

            <div>
              <label>Email</label><br/>
              <input type="Text" value={email}/>
            </div>

            <div>
              <label>Phone Number</label><br/>
              <input type="Text" value= ""/>
            </div>

            </div>
          </div>
          <div className="p2">
          <div className="left">
            <label>Select Payment</label>
          <form>
          <div>
              <span> Full amount </span>
            <input type="radio" value = "" name="amount" ckecked={pay} onChange={()=>{setpay(false)}}/>
              </div>

              <div>
              <span> By due </span>
            <input type="radio" value = "" name="amount" checked={pay}onChange={()=>{setpay(true)}}/>
              </div>
           
          </form>
            
          </div>
          <div className="right" style={{visibility: pay?"":"hidden"}}>
          <div>
              <label>Amount </label><br/>
              <input type="Text" value={event.phase1fee}/>
            </div>

            <div>
              <label>Next payment before: {event.dueDate}</label><br/>
              <input type="Text" value={event.phase2fee}/>
            </div>
          </div>
          </div>
          <div>
          <button type="submit">Complete Checkout</button>
          {/* <input type="submit"  value="Register" /> */}
          </div>
         
        </div>

      default:
        break;
    }
  }

  return (
    <div className="register-form">
      {/* <img className='clbt' src={cancellogo} onClick={() => { setRegister(false) }} alt="close button" /> */}
      <span class="material-symbols-outlined" onClick={() => { setRegister(false) }} >close</span>
      {loading && <Spinner loading={loading} />}
      {/* <h3>{event.title}</h3> */}
      <img src={event.poster} alt="tnkc image" />
      <form onSubmit={onSumbitHandler}>

        <div className="fields">
          {current < 0? <div className="details">
          <h4>Regisration fee : ₹{event.regFeeTxt}(Including 18% GST)</h4>
          <button onClick={()=>setCurrent(0)}>Proceed</button>
          </div>: getFields(current)}
        </div>
      </form>
      {termsDiv && <div className="wrapper">
        <Terms close={setTermsDiv} />
      </div>}
    </div>
  );
}

export default RegisterForm;
