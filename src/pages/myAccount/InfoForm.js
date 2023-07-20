import React, { useContext, useEffect, useState } from "react";
import "./info.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import "../events/eventConfig/fac.css";
import UserProfile from "../myAccount/UserProfile";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { StoreContext } from "../../store/StoreContext";

function InfoForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [dep, setDep] = useState("");
  const [year, setYear] = useState("1");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(true);

  const { setSection } = useContext(StoreContext);
  setSection(null)
  const doFetch = async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setName(docSnap.data().name)
        setGender(docSnap.data().gender)
        setCollege(docSnap.data().college)
        setDep(docSnap.data().dep)
        setYear(docSnap.data().year)
        setDob(docSnap.data().dob)
        setEmail(docSnap.data().email)
        setMobile(docSnap.data().mobile)
        setLoading(false);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        setEmail(user.email);
        setPage(false);
        doFetch(user.uid)
      } else {
        setLoading(false);
      }
    });
  }, []);

  const onDateChange = (e) => {
    document.getElementById("member-dob").innerHTML = "";
    const value = e.target.value;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    today = yyyy + "-" + mm + "-" + dd;
    let temp = value.split("-");
    if (temp[0] >= yyyy && temp[1] >= mm && temp[2] > dd) {
      document.getElementById("member-dob").innerText =
        "dob cannot be future date";
      setDob("");
    } else {
      setDob(e.target.value);
    }
  };

  const validate = (e) => {
    e.preventDefault();
    setLoading(true)
    const inputs = document.querySelectorAll(".fac-div input");
    inputs.forEach((inp, i) => {
      if (inp.value === "") {
        console.log(inp);
        inp.style.border = "2px solid red";
      }
    });

    const error = document.querySelectorAll(".error");
    error.forEach((item) => (item.style.display = "none"));
    error.forEach((item) => (item.innerHTML = ""));
    // var letters = /^[A-Za-z]+$/;
    var letters = /^[a-z ,.'-]+$/i;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    let flag = false;
    if (name.length < 3) {
      document.getElementById("member-name").style.display = "block";
      document.getElementById("member-name").innerText =
        "Name Must be more than 3 characters";
      flag = true;
    } else if (!name.match(letters)) {
      document.getElementById("member-name").style.display = "block";
      document.getElementById("member-name").innerText =
        "Name Must be in Alphabetics";
      flag = true;
    }

    if (dep.length < 3) {
      document.getElementById("member-dep").style.display = "block";
      document.getElementById("member-dep").innerText =
        "Department Must be more than 3 characters";
      flag = true;
    } else if (!dep.match(letters)) {
      document.getElementById("member-dep").style.display = "block";
      document.getElementById("member-dep").innerText =
        "Department Must be in Alphabetics";
      flag = true;
    }

    if (college.length < 3) {
      document.getElementById("member-college").style.display = "block";
      document.getElementById("member-college").innerText =
        "College Must be more than 3 characters";
      flag = true;
    } else if (!college.match(letters)) {
      document.getElementById("member-college").style.display = "block";
      document.getElementById("member-college").innerText =
        "College Must be in Alphabetics";
      flag = true;
    }

    if (email.length === 0) {
      document.getElementById("member-email").style.display = "block";
      document.getElementById("member-email").innerText =
        "Email cannot be empty";
      flag = true;
    } else if (!email.match(pattern)) {
      document.getElementById("member-email").style.display = "block";
      document.getElementById("member-email").innerText =
        "Please include an '@' symbol and a valid domain extension such as .com or .net.";
      flag = true;
    }

    if (dob.length === 0) {
      document.getElementById("member-dob").style.display = "block";
      document.getElementById("member-dob").innerText = "select a valid date";
      flag = true;
    }

    if (mobile.length === 0) {
      document.getElementById("member-mobile").style.display = "block";
      document.getElementById("member-mobile").innerText =
        "Mobile cannot be empty";
      flag = true;
    } else if (mobile.length < 10) {
      document.getElementById("member-mobile").style.display = "block";
      document.getElementById("member-mobile").innerText =
        "Mobile must be 10 numbers";
      flag = true;
    } else if (!(!isNaN(mobile) && !isNaN(parseFloat(mobile)))) {
      document.getElementById("member-mobile").style.display = "block";
      document.getElementById("member-mobile").innerText =
        "Mobile must be numeric";
      flag = true;
    }

    if (!flag) {
      let temp = {
        name,
        dep,
        year,
        dob,
        email,
        mobile,
        college,
        gender,
      }

      onAuthStateChanged(auth, (user) => {
        doUpdate(user.uid, temp);
      });

      // setName("")
      // setDep("")
      // setYear("")
      // setDob("")
      // setEmail("")
      // setMobile("")
      // inputs.forEach((inp, i) => {
      //   inp.style.border = ''
      // });
    }else{
      setLoading(false)
    }
  };

  const doUpdate = async (uid, data) => {
    const washingtonRef = doc(db, "users", uid);

    try {
      await updateDoc(washingtonRef, {
        ...data,
      });
      setPage(false);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  return (
    <div className="user-info">
      {loading ? (
        <Spinner loading={loading} />
      ) : page ? (
        <>
          <h2>My Account</h2>
          <form className="fac">
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
              <div
                style={{ display: "none" }}
                className="error"
                id="member-name"
              ></div>
            </div>
            <div className="input-div">
              <label htmlFor="gender">Gender</label>
              <p className="col">:</p>
              <div className="inp" onChange={(e) => setGender(e.target.value)}>
                <input
                  required
                  value="male"
                  checked={gender === "male" ? true : false}
                  type="radio"
                  name="gender"
                />{" "}
                Male
                <input
                  required
                  value="female"
                  checked={gender === "female" ? true : false}
                  type="radio"
                  name="gender"
                />{" "}
                Female
              </div>
            </div>
            <div className="input-div">
              <label htmlFor="college">Date of Birth</label>
              <p className="col">:</p>
              <input type="date" value={dob} onChange={onDateChange} />
              <div
                style={{ display: "none" }}
                className="error"
                id="member-dob"
              ></div>
            </div>

            <div className="input-div">
              <label htmlFor="college">College name</label>
              <p className="col">:</p>
              <input
                value={college}
                placeholder="College"
                onChange={(e) => setCollege(e.target.value)}
                required
                minLength={3}
                type="text"
                name="college"
                id=""
              />
              <div
                style={{ display: "none" }}
                className="error"
                id="member-college"
              ></div>
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
              <div
                style={{ display: "none" }}
                className="error"
                id="member-dep"
              ></div>
            </div>

            <div className="input-div">
              <label htmlFor="year">Year of Study</label>{" "}
              <p className="col">:</p>
              <select
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
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
              <div
                style={{ display: "none" }}
                className="error"
                id="member-email"
              ></div>
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
                onChange={(e) => setMobile(e.target.value)}
                placeholder="6234567890"
              />
              <div
                style={{ display: "none" }}
                className="error"
                id="member-mobile"
              ></div>
            </div>
            <div className="sbtn">
            <input
              className={`cntrl`}
              onClick={validate}
              type="button"
              value="Submit"
            />
            <input
              className={`cntrl`}
              onClick={()=>{setPage(false)}}
              type="button"
              value="Cancel"
            />
            </div>
            
          </form>
        </>
      ) : (
        <UserProfile
          setPage={setPage}
          name={name}
          gender={gender}
          college={college}
          dep={dep}
          year={year}
          dob={dob}
          email={email}
          mobile={mobile}
        />
      )}
    </div>
  );
}

export default InfoForm;
