import React, { useEffect, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "./Spinner";
import Terms from "../pages/events/terms/Terms";
import logo from "../images/man.png";
import MemberForm from "../pages/events/eventConfig/MemberForm";
import FacultyForm from "../pages/events/eventConfig/FacultyForm";
import axios from "axios";
import cancellogo from "../images/cancel_icon.png";
import { displayError, validateDep, validateEmail, validateName, validatePassword, validatePhone } from "../pages/signin/SignIn";
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
  const [terms, setTerms] = useState(false);
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true)
  const [termsDiv, setTermsDiv] = useState(false);
  const [pay, setpay] = useState(null)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const [formData, setFormData] = useState({ kartType: event.types[0] })

  console.log(event);

  const [members, setMembers] = useState([])
  const [faculty, setFaculty] = useState([])
  const [current, setCurrent] = useState(-1)

  const [code, setCode] = useState('')
  const [codeYes, setCodeYes] = useState(false)
  const [total, setTotal] = useState('')

  const navigate = useNavigate()

  const coupan = async () => {
    if (codeYes) {
      setTotal(event.registerFee)
      setCodeYes(false)
      setCode("")
      document.getElementById('code-msg').innerText = ""
      document.getElementById('code-error').innerText = ""
      return
    }
    let success = document.getElementById('code-msg')
    let error = document.getElementById('code-error')
    success.innerText = ""
    error.innerText = ""

    if (pay === null) return alert("Select amount first")
    if (code.length <= 0) return error.innerText = "No coupen code"
    success.innerText = "Applying code..."
    const q = query(collection(db, "coupens"), where("code", "==", code.toLowerCase()));
    try {
      const querySnapshot = await getDocs(q);
      let flag = false
      let discount;
      querySnapshot.forEach((doc) => {
        flag = true
        discount = doc.data().discount
      });
      if (!flag) {
        success.innerText = ""
        return error.innerText = "invalid coupen code"
      }
      console.log((discount / 100) * total)
      setTotal(total - Math.round((discount / 100) * total))
      success.innerText = "Coupen Applied"
      setCodeYes(true)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          setUid(user.uid)
          setEmail(user.email)
          setUsername(user.displayName)
          console.log(user.uid);
          const data = await getDoc(doc(db, 'events', event.id))
          if (data) {
            const enrolled = data.data().enrolled
            if (enrolled && enrolled.includes(user.uid)) {
              alert('You are alredy enrolled')
              window.location.reload()
              return
            }
          }
          const docRef = doc(db, "enrolled_temp", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            var { members, faculty, ...info } = docSnap.data()
            setMembers(members ? members : [])
            setFaculty(faculty ? faculty : [])
            setFormData({ ...info })
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    })
  }, [])


  const onSumbitHandler = async (e) => {
    e.preventDefault();
    if (pay === null) return alert("Select payment")

    setLoading(true)
    try {
      const eventData = {
        userId: uid,
        eventId: event.id,
        email: email,
        members,
        faculty,
        ...formData
      }

      //sending the request to the backend
      const url = `${process.env.REACT_APP_SERVER_URL}/register`;
      const info = {
        name: event.name,
        ...eventData,
        username: username,
        fullPay: pay ? false : true,
        phase: pay ? 1 : null,
        coupen: codeYes,
        code: code
      }

      const res = await axios.post(url, info);
      window.location.href = res.data.url
    } catch (error) {
      console.log(error);

    } finally {

      setLoading(false)
    }

  };

  function onChangeInput(e, errorId) {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    const error = document.getElementById(errorId)
    e.target.classList.remove("inp-error")
    error.innerHTML = ""
    error.style.display = "none"
    const type = e.target.dataset.type
    if (type === "email") {
      const emailResult = validateEmail(e.target.value)
      if (emailResult.error) displayError(e.target, error, emailResult.msg)
    } else if (type === "password") {
      const passResult = validatePassword(e.target.value)
      if (passResult.error) displayError(e.target, error, passResult.msg)
    } else if (type === "name") {
      setFormData(prev => ({ ...prev, [e.target.id]: e.target.value.toUpperCase() }))
      const nameResult = validateName(e.target.value)
      if (nameResult.error) displayError(e.target, error, nameResult.msg)
    } else if (type === "phone") {
      const phoneResult = validatePhone(e.target.value)
      if (phoneResult.error) displayError(e.target, error, phoneResult.msg)
    } else if (type === 'dep') {
      const depResult = validateDep(e.target.value)
      if (depResult.error) displayError(e.target, error, depResult.msg)
    }
  }



  const removeMember = (index) => {
    let temp = members;
    temp.splice(index, 1)
    setMembers([...temp])
  }

  const removeFac = (index) => {
    let temp = faculty;
    temp.splice(index, 1)
    setFaculty([...temp])
  }

  const getNextPage = async (e) => {
    setLoading(true)
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
            result: validateName(formData.teamName)
          },
          {
            input: document.getElementById('team-email'),
            error: document.getElementById('team-email-error'),
            result: validateEmail(formData.teamEmail)
          },
          {
            input: document.getElementById('cap-name'),
            error: document.getElementById('cap-name-error'),
            result: validateName(formData.capName)
          },
          {
            input: document.getElementById('team-contact'),
            error: document.getElementById('team-contact-error'),
            result: validatePhone(formData.contact)
          }
        ]

        validator.forEach(item => {
          if (item.result.error) {
            displayError(item.input, item.error, item.result.msg)
            flag = true
          }
        })

        if (!flag) setCurrent(current + 1);
        break

      case 2:
        flag = false;
        if (formData.collegeName.length < 3) {
          document.getElementById('college-name').style.display = 'block'
          document.getElementById('college-name').innerText = "College Name Must be more than 3 characters";
          flag = true;
        } else if (!formData.collegeName.match(letters)) {
          document.getElementById('college-name').style.display = 'block'
          document.getElementById('college-name').innerText = "College Name Must be in Alphabetics";
          flag = true;
        }

        if (formData.adress.length < 3) {
          document.getElementById('college-address').style.display = 'block'
          document.getElementById('college-address').innerText = "Address must be more than 3 characters";
          flag = true;
        }

        if (formData.city.length < 3) {
          document.getElementById('college-city').style.display = 'block'
          document.getElementById('college-city').innerText = "City must be more than 3 characters";
          flag = true;
        } else if (!formData.city.match(letters)) {
          document.getElementById('college-city').style.display = 'block'
          document.getElementById('college-city').innerText = "City must be in Alphabetics";
          flag = true;
        }

        if (formData.state.length < 3) {
          document.getElementById('college-state').style.display = 'block'
          document.getElementById('college-state').innerText = "State must be more than 3 characters";
          flag = true;
        } else if (!formData.state.match(letters)) {
          document.getElementById('college-state').style.display = 'block'
          document.getElementById('college-state').innerText = "State must be in Alphabetics";
          flag = true;
        }

        if (formData.pincode.length === 0) {
          document.getElementById('college-pin').style.display = 'block'
          document.getElementById('college-pin').innerText = "pin cannot be empty";
          flag = true;
        } else if (!formData.pincode.match(pin)) {
          document.getElementById('college-pin').style.display = 'block'
          document.getElementById('college-pin').innerText = "Enter a valid pin number";
          flag = true;
        }
        if (!flag) setCurrent(current + 1);
        break


      default: return
    }
    try {
      const cityRef = doc(db, 'enrolled_temp', uid);
      await setDoc(cityRef, { ...formData }, { merge: true });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const changeMember = async (pos) => {
    setLoading(true)
    try {
      const cityRef = doc(db, 'enrolled_temp', uid);
      await setDoc(cityRef, { members }, { merge: true });
      if (pos === "+") return setCurrent(current + 1)
      setCurrent(current - 1)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const changeFac = async (pos) => {
    setLoading(true)
    try {
      const cityRef = doc(db, 'enrolled_temp', uid);
      await setDoc(cityRef, { faculty }, { merge: true });
      if (pos === "+") return setCurrent(current + 1)
      setCurrent(current - 1)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  function checkTerms(e) {
    if (!terms) return alert("Accept Terms and Conditions")
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
              id="teamName"
              value={formData.teamName}
              type="text"
              name="team-name"
              data-type="name"
              required
              onChange={(e) => onChangeInput(e, "team-name-error")}

              placeholder="Name"
            />
            <span style={{ display: 'none' }} className="error" id="team-name-error"></span>
          </div>

          <div className="input-div">
            <label htmlFor="team-email">Team Email Id</label>
            <p className="col">:</p>
            <input
              value={formData.teamEmail}
              id="teamEmail"
              type="email"
              name="team-email"
              required
              onChange={(e) => onChangeInput(e, "team-email-error")}
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
              value={formData.capName}
              id="capName"
              type="text"
              name="cap-name"
              required
              onChange={(e) => onChangeInput(e, "cap-name-error")}
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
              value={formData.kartType}
              onChange={(e) => setFormData(prev => ({ ...prev, kartType: e.target.value }))}
            >
              {event.types.map(item => <option value={item}>{item}</option>)}
            </select>
          </div>

          <div className="input-div">
            <label htmlFor="team-contact">Contact Number</label>
            <p className="col">:</p>
            <input
              value={formData.contact}
              id="contact"
              type="tel"
              min={10}
              name="contact"
              required
              data-type='phone'
              onChange={(e) => onChangeInput(e, "team-contact-error")}
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
            <button className="cntrl" onClick={() => changeMember("-")} type="button">Back</button><button onMouseLeave={() => { members.length < 3 && document.querySelector('.disable-msg').classList.remove("show") }} onMouseEnter={() => { members.length < 3 && document.querySelector('.disable-msg').classList.add("show") }} className={`cntrl ${members.length < 3 && 'opacity'}`} onClick={members.length >= 3 ? () => changeMember("+") : null} type="button">Next</button>
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
              value={formData.collegeName}
              type="text"
              name="adress"
              id="collegeName"
              required
              onChange={(e) => setFormData(prev => ({ ...prev, collegeName: e.target.value }))}
              placeholder="College"
            />
            <div style={{ display: 'none' }} className="error" id="college-name"></div>
          </div>

          <div className="input-div">
            <label htmlFor="college-name">College Adress</label>
            <p className="col">:</p>
            <textarea
              value={formData.adress}
              id="adress"
              onChange={(e) => setFormData(prev => ({ ...prev, adress: e.target.value }))}
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
              value={formData.city}
              id="city"
              type="text"
              name="city"
              required
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              placeholder="City"
            />
            <div style={{ display: 'none' }} className="error" id="college-city"></div>
          </div>

          <div className="input-div">
            <label htmlFor="college-name">State</label>
            <p className="col">:</p>
            <input
              minLength={3}
              value={formData.state}
              id="state"
              type="text"
              name="state"
              required
              onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
              placeholder="Tamil Nadu"
            />
            <div style={{ display: 'none' }} className="error" id="college-state"></div>
          </div>
          <div className="input-div no-arrow">
            <label htmlFor="college-name">Pincode</label>
            <p className="col">:</p>
            <input
              min={6}
              value={formData.pincode}
              id="pincode"
              type="number"
              name="pincode"
              required
              onChange={(e) => setFormData(prev => ({ ...prev, pincode: e.target.value }))}
              placeholder="652512"
              pattern="[1-9][0-9]{5}" title="Please enter a valid zip code, example: 652512"
            />
            <div style={{ display: 'none' }} className="error" id="college-pin"></div>
          </div>
          <div className="btns">
            <button className="cntrl" type="button" onClick={() => setCurrent(current - 1)}>Back</button><button className="cntrl" onClick={getNextPage} type="submit">Next</button>
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
            <button className="cntrl" onClick={() => changeFac("-")} type="button">Back</button><button className={`cntrl ${faculty.length < 1 && 'opacity'}`} onMouseLeave={() => { faculty.length < 1 && document.querySelector('.disable-msg').classList.remove("show") }} onMouseEnter={() => { faculty.length < 1 && document.querySelector('.disable-msg').classList.add("show") }} onClick={faculty.length >= 1 ? () => changeFac("+") : null} type="button">Next</button>
            <div className="disable-msg">
              <p>Add minimum 1 faculty and maximum 2 faculties</p>
            </div>
          </div>
        </div>;

      case 4: return <div className="register">
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

      case 5:
        return < div className="pay1">

          <h1>{event.name}</h1>
          <div className="p1">

            <div className="left">

              <div>
                <label>Amount</label><br />
                <input disabled type="Text" value={event.regFeeTxt} />
              </div>

              <div>
                <label>Name</label><br />
                <input disabled type="Text" value={username} />
              </div>

            </div>

            <div className="right">

              <div>
                <label>Email</label><br />
                <input disabled type="Text" value={email} />
              </div>

              <div>
                <label>Phone Number</label><br />
                <input disabled type="Text" value="" />
              </div>

            </div>
          </div>
          <div className="p2">
            <div className="left">
              <label>Select Payment</label>
              <form>
                <div>
                  <span> Full amount </span>
                  <input type="radio" value="" name="amount" ckecked={pay} onChange={() => { setpay(false); setTotal(event.registerFee) }} />
                </div>

                <div>
                  <span> By due </span>
                  <input type="radio" value="" name="amount" checked={pay} onChange={() => { setpay(true) }} />
                </div>

              </form>

            </div>
            {(pay && (pay !== null)) && <div className="right" >
              <div>
                <label>Amount </label><br />
                <input type="Text" disabled value={event.phase1fee} />
              </div>

              <div>
                <label>Next payment before: {event.dueDate}</label><br />
                <input type="Text" disabled value={event.phase2fee} />
              </div>
            </div>}
            {(!pay && (pay !== null)) && <> <div className="inpt coup">
              <label htmlFor="name">Apply with coupon code</label>
              <div className="fields">
                <input type="text" id="code" name="code" placeholder='Enter Code xxx' value={code} onChange={(e) => setCode(e.target.value)} />
                <button type='button' onClick={coupan} >{codeYes ? "remove" : "Apply"}</button>
              </div>
              <p id='code-msg'></p>
              <p id='code-error' style={{ color: 'red' }}></p>
              <div className='totalamount' style={{ marginTop: '20px', gap: '.5rem', alignItems: 'center', display: 'flex', justifyContent: 'start' }}>
                <label>Total:</label>
                <input className="ta" disabled type="text" name="email" value={"₹" + total ? total : 0} id="" />
              </div>
            </div>
            </>}
          </div>
          <div>
            <button className="checkout" type="submit">Complete Checkout</button>
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
      {loading ? <Spinner other={"inner-spinner"} loading={loading} /> : <>
        {/* <h3>{event.title}</h3> */}
        <img src={event.poster} alt="tnkc image" />
        <form onSubmit={onSumbitHandler}>

          <div className="fields">
            {current < 0 ? <div className="details">
              <h4>Regisration fee : ₹{event.regFeeTxt}(Including 18% GST)</h4>
              <button onClick={() => setCurrent(0)}>Proceed</button>
            </div> : getFields(current)}
          </div>
        </form>
        {termsDiv && <div className="wrapper">
          <Terms close={setTermsDiv} />
        </div>}
      </>}

    </div>
  );
}

export default RegisterForm;
