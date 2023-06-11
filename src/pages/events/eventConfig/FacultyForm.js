import React, { useState } from 'react'
import './fac.css'

function FacultyForm({faculty, setFaculty, setFacForm}) {


  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [des, setDes] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const validate = (e) => {
    const inputs = document.querySelectorAll('.fac-div input')
    inputs.forEach((inp, i) => {
      if (inp.value === '') {
        console.log(inp);
        inp.style.border = '2px solid red'
      }
    });
  }
 
  const addMember = () => {
    let temp = faculty;
    temp.push({
      name,
      dep,
      des,
      dob,
      email,
      mobile
    })
    setFaculty(temp)
    setFacForm(false)
  }


  return (
    <div className="fac-div">
        <form className="fac" onSubmit={addMember}>
            <h3>Facualty Advisor</h3>
          {/* <div className="input-div">
            <label htmlFor="photo">Passport Image</label>:
            <div className="div"></div>
          </div>
          <div className="input-div">
            <label htmlFor="college">College Id</label>
            :
            <input type="text" />
          </div>
          <div className="input-div">
            <label htmlFor="college">Government Id</label>
            :
            <input type="text" />
          </div> */}
          <div className="input-div">
            <label htmlFor="college">Name</label>
            :
            <input
            minLength={3}
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value.toUpperCase())}
            placeholder="Name"
          />
          </div>
          <div className="input-div">
            <label htmlFor="college">Designation</label>
            :
            <input
            minLength={3}
            value={des}
            type="text"
            name="dep"
            required
            onChange={(e) => setDes(e.target.value)}
            placeholder="Department"
          />
          </div>
          <div className="input-div">
            <label htmlFor="college">Department</label>
            :
            <input
            minLength={3}
            value={dep}
            type="text"
            name="dep"
            required
            onChange={(e) => setDep(e.target.value)}
            placeholder="Department"
          />
          </div>
          <div className="input-div">
            <label htmlFor="college">Date of Birth</label>
            :
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="input-div">
            <label htmlFor="college">Email ID</label>
            :
            <input
            value={email}
            type="email"
            name="teamEmail"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          </div>
          <div className="input-div">
            <label htmlFor="college">Mobile</label>
            :
            <input
            value={mobile}
            type="tel"
            min={10}
            name="contact"
            required
            onChange={(e) => setMobile(e.target.value)}
            pattern="[6789][0-9]{9}" title="Please enter valid phone number"
            placeholder="6234567890"
          />
          </div>
          <input onClick={validate} type="submit" value="Add" />
        </form>
  </div>
  )
}

export default FacultyForm