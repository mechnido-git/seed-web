import React, { useState } from 'react'
import './fac.css'
import { onChangeInput } from '../../signin/SignIn';

function MemberForm({ members, setMembers }) {

  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [year, setYear] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const onDateChange = (e) => {
    document.getElementById('member-dob').innerHTML = ""
    const value = e.target.value;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var minY = yyyy - 13;
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    today = yyyy + '-' + mm + '-' + dd;
    let temp = value.split('-')
    if (temp[0] < minY? true : temp[0] == minY ? temp[1] < mm? true : temp[1] == mm? temp[2] <= dd ? true : false : false : false ) {
      setDob(e.target.value)
    } else {
      document.getElementById('member-dob').innerText = "Minimum age is 13"
      setDob("")
    }
  }

  const onChangeNumber = (value, setValue, current) => {
    if(value.length <= 10) setValue(current.length <= 10? current: value )
  }

  const validate = (e) => {
    e.preventDefault()
    console.log("click");
    const inputs = document.querySelectorAll('.fac-div input')
    inputs.forEach((inp, i) => {
      if (inp.value === '') {
        console.log(inp);
        inp.style.border = '2px solid red'
      }
    });

    const error = document.querySelectorAll('.error')
    error.forEach(item=>item.style.display = "none")
    error.forEach(item => item.innerHTML = "")
    var letters = /^[A-Za-z ]+$/;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    let flag = false;
    if (name.length < 3) {
      document.getElementById('member-name-error').style.display = 'block'
      document.getElementById('member-name-error').innerText = "Name Must be more than 3 characters";
      flag = true;
    } else if (!name.match(letters)) {
      document.getElementById('member-name-error').style.display = 'block'
      document.getElementById('member-name-error').innerText = "Name Must be in Alphabetics";
      flag = true;
    }

    if (dep.length < 3) {
      document.getElementById('member-dep-error').style.display = 'block'
      document.getElementById('member-dep-error').innerText = "Department Must be more than 3 characters";
      flag = true;
    } else if (!dep.match(letters)) {
      document.getElementById('member-dep-error').style.display = 'block'
      document.getElementById('member-dep-error').innerText = "Department Must be in Alphabetics";
      flag = true;
    }

    if (email.length === 0) {
      document.getElementById('member-email-error').style.display = 'block'
      document.getElementById('member-email-error').innerText = "Email cannot be empty";
      flag = true;
    } else if (!email.match(pattern)) {
      document.getElementById('member-email-error').style.display = 'block'
      document.getElementById('member-email-error').innerText = "Please include an '@' symbol and a valid domain extension such as .com or .net.";
      flag = true;
    }

    if (dob.length === 0) {
      document.getElementById('member-dob').style.display = 'block'
      document.getElementById('member-dob').innerText = "Select a valid date";
      flag = true;
    }

    if (mobile.length === 0) {
      document.getElementById('member-mobile-error').style.display = 'block'
      document.getElementById('member-mobile-error').innerText = "Mobile cannot be empty";
      flag = true;
    } else if (mobile.length < 10) {
      document.getElementById('member-mobile-error').style.display = 'block'
      document.getElementById('member-mobile-error').innerText = "Mobile must be 10 numbers";
      flag = true;
    } else if (!(!isNaN(mobile) && !isNaN(parseFloat(mobile)))) {
      document.getElementById('member-mobile-error').style.display = 'block'
      document.getElementById('member-mobile-error').innerText = "Mobile must be numeric";
      flag = true;
    }
    console.log(flag);

    if (!flag) {
      let temp = members;
      temp.push({
        name,
        dep,
        year,
        dob,
        email,
        mobile
      })
      console.log(temp);
      setMembers([...temp])
      setName("")
      setDep("")
      setYear("")
      setDob("")
      setEmail("")
      setMobile("")
      inputs.forEach((inp, i) => {
        inp.style.border = ''
      });
    }else{
      console.log("no added");
      console.log(flag);
    }
  }

  return (
    <div className="fac-div">
      <form className="fac" >
        <h3>Team Member</h3>
        <div className="input-div">
          <label htmlFor="college">Name</label>
          <p className="col">:</p>
          <input
            minLength={3}
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => onChangeInput(e, setName, "member-name-error")}
            data-type='name'
            placeholder="Name"
          />
          <div style={{display: 'none'}} className="error" id='member-name-error'></div>
        </div>
        <div className="input-div">
          <label htmlFor="college">Department</label>
          <p className="col">:</p>
          <input
            minLength={3}
            value={dep}
            type="text"
            name="dep"
            required
            onChange={(e) => setDep(e.target.value)}
            placeholder="Department"
          />
          <div style={{display: 'none'}} className="error" id='member-dep'></div>
        </div>

        <div className="input-div">
          <label htmlFor="year">Year of Study</label> 
          <p className="col">:</p>
          <select
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="2">4</option>
          </select>
        </div>

        <div className="input-div">
          <label htmlFor="college">Date of Birth</label>
          <p className="col">:</p>
          <input type="date" value={dob} onChange={onDateChange} />
          <div style={{display: 'none'}} className="error" id='member-dob'></div>
        </div>
        <div className="input-div">
          <label htmlFor="college">Email ID</label>
          <p className="col">:</p>
          <input
            value={email}
            type="email"
            name="teamEmail"
            required
            onChange={(e) => onChangeInput(e, setEmail, "member-email-error")}
            data-type='email'
            placeholder="example@gmail.com"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <div style={{display: 'none'}} className="error" id="member-email-error"></div>
        </div>
        <div className="input-div">
          <label htmlFor="college">Mobile</label>
          <p className="col">:</p>
          <input
            value={mobile}
            type="tel"
            min={10}
            name="contact"
            required
            onChange={(e) => onChangeInput(e, setMobile, "member-mobile-error")}
            
            placeholder="6234567890"
          />
          <div style={{display: 'none'}} className="error" id="member-mobile-error"></div>
        </div>
        <input className={`cntrl ${members.length >= 25 && 'opacity'}`} onClick={members.length < 25 ? validate : null} type="button" value="Add" />
      </form>
    </div>
  )
}

export default MemberForm