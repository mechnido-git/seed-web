import React, { useState } from "react";
import "./fac.css";

function FacultyForm({ faculty, setFaculty, setFacForm }) {
  const [name, setName] = useState("");
  const [dep, setDep] = useState("");
  const [des, setDes] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const onDateChange = (e) => {
    document.getElementById("fac-dob").innerHTML = "";
    const value = e.target.value;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var minY = yyyy - 13
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    today = yyyy + "-" + mm + "-" + dd;
    let temp = value.split("-");
    if (temp[0] < minY? true : temp[0] == minY ? temp[1] < mm? true : temp[1] == mm? temp[2] <= dd ? true : false : false : false ) {
      setDob(e.target.value)
    } else {
      document.getElementById('fac-dob').innerText = "Minimum age is 13"
      setDob("")
    }
  };

  const validate = (e) => {
    const inputs = document.querySelectorAll(".fac-div input");
    inputs.forEach((inp, i) => {
      if (inp.value === "") {
        console.log(inp);
        inp.style.border = "2px solid red";
      }
    });
    const error = document.querySelectorAll(".error");
    error.forEach((item) => (item.innerHTML = ""));
    var letters = /^[A-Za-z]+$/;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    let flag = false;
    if (name.length < 3) {
      document.getElementById("fac-name").innerText =
        "Name Must be more than 3 characters";
      flag = true;
    } else if (!name.match(letters)) {
      document.getElementById("fac-name").innerText =
        "Name Must be in Alphabetics";
      flag = true;
    }

    if (dep.length < 3) {
      document.getElementById("fac-dep").innerText =
        "Department Must be more than 3 characters";
      flag = true;
    } else if (!dep.match(letters)) {
      document.getElementById("fac-dep").innerText =
        "Department Must be in Alphabetics";
      flag = true;
    }

    if (des.length < 3) {
      document.getElementById("fac-dep").innerText =
        "Designation Must be more than 3 characters";
      flag = true;
    } else if (!des.match(letters)) {
      document.getElementById("fac-dep").innerText =
        "Designation Must be in Alphabetics";
      flag = true;
    }

    if (email.length === 0) {
      document.getElementById("fac-email").innerText = "Email cannot be empty";
      flag = true;
    } else if (!email.match(pattern)) {
      document.getElementById("fac-email").innerText =
        "Please include an '@' symbol and a valid domain extension such as .com or .net.";
      flag = true;
    }

    if (dob.length === 0) {
      document.getElementById("fac-dob").innerText = "Select a valid date";
      flag = true;
    }

    if (mobile.length === 0) {
      document.getElementById("fac-mobile").innerText =
        "Mobile cannot be empty";
      flag = true;
    } else if (mobile.length < 10) {
      document.getElementById("fac-mobile").innerText =
        "Mobile must be 10 numbers";
      flag = true;
    } else if (!(!isNaN(mobile) && !isNaN(parseFloat(mobile)))) {
      document.getElementById("fac-mobile").innerText =
        "Mobile must be numeric";
      flag = true;
    }
    if (!flag) {
      let temp = faculty;
      temp.push({
        name,
        dep,
        des,
        dob,
        email,
        mobile,
      });
      setFaculty(temp);
      setName("");
      setDep("");
      setDes("");
      setDob("");
      setEmail("");
      setMobile("");
      inputs.forEach((inp, i) => {
        inp.style.border = "";
      });
    }
  };

  const onChangeNumber = (value, setValue, current) => {
    if(value.length <= 10) setValue(current.length <= 10? current: value )
  }

  return (
    <div className="fac-div">
      <form className="fac">
        <h3>Facualty Advisor</h3>
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
          <div className="error" id="fac-name"></div>
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
          <div className="error" id="fac-dep"></div>
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
            placeholder="Designation"
          />
          <div className="error" id="fac-dep"></div>
        </div>

        <div className="input-div">
          <label htmlFor="college">Date of Birth</label>
          :
          <input type="date" value={dob} onChange={onDateChange} />
          <div className="error" id="fac-dob"></div>
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
          <div className="error" id="fac-email"></div>
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
            onChange={(e) => onChangeNumber(mobile, setMobile, e.target.value)}
            placeholder="6234567890"
          />
          <div className="error" id="fac-mobile"></div>
        </div>
        <input
          className={`cntrl ${faculty.length >= 2 && 'opacity'}`}
          onClick={faculty.length < 2 ? validate : null}
          type="button"
          value="Add"
        />
      </form>
    </div>
  );
}

export default FacultyForm;
