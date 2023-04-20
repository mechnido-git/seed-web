import React, { useState } from "react";
import "./dashboard_temp.css";

function Dashboard_temp() {
  const [teamName, setTeamName] = useState("SAMPLE NAME");
  const [teamMembers, setTeamMembers] = useState(5);
  const [kartType, setKartType] = useState("");
  const [collegeName, setCollegeName] = useState("Sample Name");
  const [collegeAddress, setCollegeAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const facuality_model = {
    img: "",
    collegeId: "",
    govId: "",
    name: "",
    designation: "",
    department: "",
    dob: "",
    email: "",
    mobile: "",
  };

  const member_model = {
    img: "",
    collegeId: "",
    yearStudy: "",
    name: "",
    dob: "",
    email: "",
    mobile: "",
  };

  const [facualty, setFacualty] = useState([
    { ...facuality_model },
    { ...facuality_model },
  ]);

  const [members, setMembers] = useState([
    { ...member_model },
    { ...member_model },
  ]);

  const addMember = () => {
    setMembers([...members, {...member_model}])
  }

  const onSumbitHandler = () => {};

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="team-logo">
        <div className="logo"></div>
        <button>Edit</button>
      </div>
      <div className="form-div">
        <form onSubmit={onSumbitHandler}>
          <div className="basic-info">
            <div className="input-div">
              <label htmlFor="team-name">Team Name</label> :
              <input
                value={teamName}
                type="text"
                name="teamName"
                required
                onChange={(e) => setTeamName(e.target.value.toUpperCase())}
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
                <option value="gokart">Gokart</option>
                <option value="ekart">E-Kart</option>
              </select>
            </div>

            <div className="input-div">
              <label htmlFor="college-name">College Name</label> :
              <input
                value={collegeName}
                type="text"
                name="collegeName"
                required
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>

            <div className="input-div">
              <label htmlFor="college-adress">College Address</label> :
              <input
                value={collegeAddress}
                type="text"
                name="collegeAddress"
                required
                onChange={(e) => setCollegeAddress(e.target.value)}
              />
            </div>

            <div className="input-div">
              <label htmlFor="city">City</label> :
              <input
                value={city}
                type="text"
                name="city"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="input-div">
              <label htmlFor="state">State</label> :
              <input
                value={state}
                type="text"
                name="state"
                required
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="input-div">
              <label htmlFor="pincode">Pincode</label> :
              <input
                value={pincode}
                type="number"
                name="pincode"
                required
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          <hr />


          </div>



          <div className="fac-div">
            {facualty.map((item, index) => {
              return (
                <div className="fac">
                    <h3>Facualty Advisor {index+1}</h3>
                  <div className="input-div">
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
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Name</label>
                    :
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Designation</label>
                    :
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Department</label>
                    :
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Date of Birth</label>
                    :
                    <input type="date" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Email ID</label>
                    :
                    <input type="email" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Mobile</label>
                    :
                    <input type="number" />
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
            <h3 style={{margin: "1rem"}}>Team Details</h3>
          <div className="fac-div">
            {members.map((item, index) => {
              return (
                <div className="fac">
                    <h3>Member {index+1}</h3>
                  <div className="input-div">
                    <label htmlFor="photo">Passport Image</label>:
                    <div className="div"></div>
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">College Id</label>
                    :
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Year of Study</label>
                    :
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">{index == 0 && "Captain "}Name</label>
                    :
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Date of Birth</label>
                    :
                    <input type="date" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Email ID</label>
                    :
                    <input type="email" />
                  </div>
                  <div className="input-div">
                    <label htmlFor="college">Mobile</label>
                    :
                    <input type="number" />
                  </div>
                </div>
              );
            })}
          </div>
            <button type="button" onClick={addMember} className="add-btn">Add more members</button>
          <hr />
        </form>
      </div>
    </div>
  );
}

export default Dashboard_temp;
