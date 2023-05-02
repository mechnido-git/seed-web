import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./eventConfig.css";
import logo from "../../../images/man.png";
import Spinner from "../../../components/Spinner";
import { HashLink } from "react-router-hash-link";
import FacultyForm from "./FacultyForm";
import MemberForm from "./MemberForm";

function EventConfig() {
  const { eventId } = useParams();
  const [user, setUser] = useState(null);
  const [eventData, setEventData] = useState(null);

  const [teamName, setTeamName] = useState("SAMPLE NAME");
  const [teamMembers, setTeamMembers] = useState(5);
  const [kartType, setKartType] = useState("");
  const [collegeName, setCollegeName] = useState("Sample Name");
  const [collegeAddress, setCollegeAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(true);
  const [facultyPopup, setFacultyPopup] = useState(false);
  const [memberPopup, setMemberPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const eventBody = document.getElementById("event-config");
    eventBody.onscroll = scrollFunction;
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      const q = query(
        collection(db, "enrolled"),
        where("id", "==", user.uid),
        where("eventId", "==", eventId)
      );
      getDocs(q)
        .then((snaps) => {
          snaps.forEach((data) => console.log(data.data()));
          snaps.forEach((data) => setEventData(data.data()));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    });
  }, []);

  function scrollFunction() {
    let mybutton = document.getElementById("goTop");
    const eventBody = document.getElementById("event-config");
    if (eventBody.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    const eventBody = document.getElementById("event-config");
    eventBody.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div className="event-config" id="event-config">
        <div id="top"></div>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <HashLink id="goTop" onClick={topFunction} smooth>
              <span class="material-symbols-outlined">arrow_upward</span>
            </HashLink>
            <div className="nav">
              <ul>
                <li>
                  <HashLink to={`/menu/events/${eventId}/#basic`} smooth>
                    Basic Info
                  </HashLink>
                </li>
                <li>
                  <HashLink to={`/menu/events/${eventId}/#faculty`} smooth>
                    Faculty
                  </HashLink>
                </li>
                <li>
                  <HashLink to={`/menu/events/${eventId}/#members`} smooth>
                    Members
                  </HashLink>
                </li>
                <li>
                  <HashLink to={`/menu/events/${eventId}/#downloads`} smooth>
                    Downloads
                  </HashLink>
                </li>
                <li>
                  <HashLink to={`/menu/events/${eventId}/#uploads`} smooth>
                    Uploads
                  </HashLink>
                </li>
                <li>
                  <HashLink to={`/menu/events/${eventId}/#payment`} smooth>
                    Payments
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className="form-div">
              <div id="basic"></div>
              <span
                class="material-symbols-outlined"
                onClick={() => navigate("/menu/dashboard")}
              >
                arrow_back
              </span>
              <div className="team-logo">
                <img src={logo} alt="" />
                <button>Edit</button>
              </div>
              {eventData && (
                <>
                  <form>
                    <div className="basic-info">
                      <div className="input-div">
                        <label htmlFor="team-name">Team Name</label> :
                        <input
                          value={eventData.teamName}
                          type="text"
                          name="teamName"
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="team-members">No of Team Members</label>{" "}
                        :
                        <input
                          readOnly
                          value={eventData.teamMembers}
                          type="number"
                          min={3}
                          max={25}
                          name="teamMembers"
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="Kart-Type">Kart Type</label> :
                        <input
                          readOnly
                          value={
                            eventData.kartType == "gokart"
                              ? "Go-Kart"
                              : "E-Kart"
                          }
                          type="text"
                          name="Kart-Type"
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="state">Facualty Advisors</label> :
                        <input
                          readOnly
                          value={eventData.fac}
                          type="text"
                          name="state"
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="college-name">College Name</label> :
                        <input
                          readOnly
                          value={eventData.collegeName}
                          type="text"
                          name="collegeName"
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="college-adress">College Address</label>{" "}
                        :
                        <textarea
                          readOnly
                          value={eventData.adress}
                          rows={5}
                          cols={5}
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="city">City</label> :
                        <input
                          readOnly
                          value={eventData.city}
                          type="text"
                          name="city"
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="state">State</label> :
                        <input
                          readOnly
                          value={eventData.state}
                          type="text"
                          name="state"
                        />
                      </div>

                      <div className="input-div">
                        <label htmlFor="pincode">Pincode</label> :
                        <input
                          readOnly
                          value={eventData.pincode}
                          type="number"
                          name="pincode"
                        />
                      </div>
                    </div>
                    <div className="btns">
                      <button
                        type="button"
                        onClick={() => setFacultyPopup(true)}
                      >
                        Add Faculty
                      </button>
                      <button
                        type="button"
                        onClick={() => setMemberPopup(true)}
                      >
                        Add Member
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
            <div className="faculty-div">
              <div id="faculty"></div>
              <h2>Faculties</h2>
              <div className="faculty-container">
                <div className="faculty">
                  <h3>Facualty Advisor 1</h3>
                  <div className="image" style={{ display: "flex" }}>
                    <img src={logo} alt="" />
                  </div>
                  <div className="data">
                    <div>College Id</div>:<div>ID</div>
                  </div>
                  <div className="data">
                    <div>Government Id</div>:<div>ID</div>
                  </div>
                  <div className="data">
                    <div>Name</div>:<div>Name</div>
                  </div>
                  <div className="data">
                    <div>Designation</div>:<div>N/A</div>
                  </div>
                  <div className="data">
                    <div>Department</div>:<div>N/A</div>
                  </div>

                  <div className="data">
                    <div>Date of Birth</div>:<div>N/A</div>
                  </div>

                  <div className="data">
                    <div>Email</div>:<div>N/A</div>
                  </div>
                  <div className="data">
                    <div>Mobile</div>:<div>N/A</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faculty-div">
              <div id="members"></div>
              <h2>Team Members</h2>
              <div className="faculty-container">
                <div className="faculty">
                  <h3>Member 1</h3>
                  <div className="image" style={{ display: "flex" }}>
                    <img src={logo} alt="" />
                  </div>
                  <div className="data">
                    <div>College Id</div>:<div>ID</div>
                  </div>
                  <div className="data">
                    <div>Year of Study</div>:<div>N/A</div>
                  </div>
                  <div className="data">
                    <div>Captain Name</div>:<div>Name</div>
                  </div>
                  <div className="data">
                    <div>Department</div>:<div>N/A</div>
                  </div>

                  <div className="data">
                    <div>Date of Birth</div>:<div>N/A</div>
                  </div>

                  <div className="data">
                    <div>Email</div>:<div>N/A</div>
                  </div>
                  <div className="data">
                    <div>Mobile</div>:<div>N/A</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="downloads-div" id="downloads">
              <h2>Downloads</h2>
              <div className="download-container">
                <p>Nothing to download</p>
              </div>
            </div>
            <div className="uploads-div" id="uploads">
              <h2>Uploads</h2>
              <div className="upload-container">
                <p>Upload here</p>
              </div>
            </div>
            <div className="payment-div" id="payment">
              <h2>Payments</h2>
              <p>Payment Details</p>
            </div>
          </>
        )}
      </div>
      {facultyPopup && (
        <div className="wrapper-reg">
          <div className="blocker" onClick={() => setFacultyPopup(false)}></div>
          <FacultyForm />
        </div>
      )}
      {memberPopup && (
        <div className="wrapper-reg">
          <div className="blocker" onClick={() => setMemberPopup(false)}></div>
          <MemberForm />
        </div>
      )}
    </>
  );
}

export default EventConfig;
