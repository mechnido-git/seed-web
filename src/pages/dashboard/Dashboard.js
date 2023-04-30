import { onAuthStateChanged } from "firebase/auth";
import "./dashboard.css";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import logo from "../../images/man.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import slide from "../../images/slide.jpg"

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(logo);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [uid, setUid] = useState();
  const [email, setEmail] = useState("");
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const doFetch = async (user) => {
    const q = query(
      collection(db, "events"),
      where("enrolled", "array-contains", user.uid)
    );
    try {
      const snaps = await getDocs(q);
      const lists = snaps.docs.map((list) => {
        return {
          ...list.data(),
          id: list.id,
        };
      });
      setEvents(lists);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  let dynamicStyles = null;
  function addAnimation(body) {
    if (!dynamicStyles) {
      dynamicStyles = document.createElement("style");
      dynamicStyles.type = "text/css";
      document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setUid(user.uid);
        setUsername(user.displayName);
        setEmail(user.email);
        if (user.photoURL) setDp(user.photoURL);
        doFetch(user);
      } else {
        navigate("/menu/events");
        setLoading(false);
      }
    });
    addAnimation(`
    @keyframes progress {
    to { --event-progress-value: 50;
        --course-progress-value: 30;    
    }
   }
    `);
  }, []);
  return (
    <div className="dashboard">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          {loggedIn ? (
            <>
              <h2>Dashboard</h2>
              <div className="main">
                <div className="details">
                  <div className="profile">
                    <img src={dp} alt="" />
                    <p>
                      {username} <br />
                      {email}{" "}
                    </p>
                  </div>
                  <div className="event-prog">
                    <h3>Events</h3>
                    <div
                      class="event-progress-bar"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <p>2/4</p>
                  </div>
                  <div className="event-prog">
                    <h3>Courses</h3>
                    <div
                      class="course-progress-bar"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <p>3/10</p>
                  </div>
                  <div className="upcoming">
                    <h3>Upcoming Event</h3>
                    <img src={slide} alt="" />
                    <h4>Event Name</h4>
                    <p>Date</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
