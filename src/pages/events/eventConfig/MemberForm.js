import React, { useState } from 'react'
import './fac.css'

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
    var letters = /^[A-Za-z]+$/;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    let flag = false;
    if (name.length < 3) {
      document.getElementById('member-name').style.display = 'block'
      document.getElementById('member-name').innerText = "Name Must be more than 3 characters";
      flag = true;
    } else if (!name.match(letters)) {
      document.getElementById('member-name').style.display = 'block'
      document.getElementById('member-name').innerText = "Name Must be in Alphabetics";
      flag = true;
    }

    if (dep.length < 3) {
      document.getElementById('member-dep').style.display = 'block'
      document.getElementById('member-dep').innerText = "Department Must be more than 3 characters";
      flag = true;
    } else if (!dep.match(letters)) {
      document.getElementById('member-dep').style.display = 'block'
      document.getElementById('member-dep').innerText = "Department Must be in Alphabetics";
      flag = true;
    }

    if (email.length === 0) {
      document.getElementById('member-email').style.display = 'block'
      document.getElementById('member-email').innerText = "Email cannot be empty";
      flag = true;
    } else if (!email.match(pattern)) {
      document.getElementById('member-email').style.display = 'block'
      document.getElementById('member-email').innerText = "Please include an '@' symbol and a valid domain extension such as .com or .net.";
      flag = true;
    }

    if (dob.length === 0) {
      document.getElementById('member-dob').style.display = 'block'
      document.getElementById('member-dob').innerText = "Select a valid date";
      flag = true;
    }

    if (mobile.length === 0) {
      document.getElementById('member-mobile').style.display = 'block'
      document.getElementById('member-mobile').innerText = "Mobile cannot be empty";
      flag = true;
    } else if (mobile.length < 10) {
      document.getElementById('member-mobile').style.display = 'block'
      document.getElementById('member-mobile').innerText = "Mobile must be 10 numbers";
      flag = true;
    } else if (!(!isNaN(mobile) && !isNaN(parseFloat(mobile)))) {
      document.getElementById('member-mobile').style.display = 'block'
      document.getElementById('member-mobile').innerText = "Mobile must be numeric";
      flag = true;
    }

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
      setMembers(temp)
      setName("")
      setDep("")
      setYear("")
      setDob("")
      setEmail("")
      setMobile("")
      inputs.forEach((inp, i) => {
        inp.style.border = ''
      });
    }
  }

  return (
    <div className="fac-div">
      <form className="fac" >
        <h3>Team Member</h3>
        {/* <div className="input-div">
            <label htmlFor="photo">Passport Image</label>:
            <div className="div"></div>
          </div>
          <div className="input-div">
            <label htmlFor="college">College Id</label>
            :
            <input type="text" />
          </div> */}

        <div className="input-div">
          <label htmlFor="college">Name</label>
          <p className="col">:</p>
          <input
            minLength={3}
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value.toUpperCase())}
            placeholder="Name"
          />
          <div style={{display: 'none'}} className="error" id='member-name'></div>
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <div style={{display: 'none'}} className="error" id="member-email"></div>
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
            onChange={(e) => onChangeNumber(mobile, setMobile, e.target.value)}
            placeholder="6234567890"
          />
          <div style={{display: 'none'}} className="error" id="member-mobile"></div>
        </div>
        <input className={`cntrl ${members.length >= 25 && 'opacity'}`} onClick={members.length < 25 ? validate : null} type="button" value="Add" />
      </form>
    </div>
  )
}

export default MemberForm