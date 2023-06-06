import { onAuthStateChanged } from "firebase/auth";
import "./dashboard.css";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import logo from "../../images/man.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import slide from "../../images/slide.jpg";
import { trending } from "../courses/CoursesHome";
import Path from "../path/Path";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(logo);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [uid, setUid] = useState();
  const [email, setEmail] = useState("");
  const [events, setEvents] = useState([]);
  const [cover, setCover] = useState(localStorage.getItem('cover'))
  const navigate = useNavigate();
  console.log(cover);

  const CardBuilder = ({ arr, limit }) => (
    <>
      {arr.map((item, index) => {
        if (limit != null && index >= limit) return;
        return (
          <div className="card" key={index}>
            <img src={item.thumbnail} alt="" />
            <div className="body">
              <h4>{item.name}</h4>
              <button>View Details</button>
            </div>
          </div>
        );
      })}
    </>
  );
  const CardBuilderEvent = ({ arr, limit }) => (
    <>
      {arr.map((item, index) => {
        if (limit != null && index >= limit) return;
        return (
          <div className="card" key={index}>
            <img src={slide} alt="" />
            <div className="body">
              <h4>{item.name}</h4>
              <button onClick={()=>getEventDetails(index)}>View Details</button>
            </div>
          </div>
        );
      })}
    </>
  );

  const getEventDetails = (index) => {
    navigate(`/menu/events/${events[index].id}`)
  };

  const doFetch = async (user) => {
    const q = query(
      collection(db, "events"),
      where("enrolled", "array-contains", user.uid)
    );
    const q2 = query(
      collection(db, "courses"),
      where("enrolled_arr", "array-contains", user.uid)
    );
    try {
      const snaps = await getDocs(q);
      const lists = snaps.docs.map((list) => {
        return {
          ...list.data(),
          id: list.id,
        };
      });

      const snaps2 = await getDocs(q2)
      const lists2 = snaps2.docs.map((list)=>{
        return {
          ...list.data(),
          id: list.id
        }
      })
      console.log(lists2);
      console.log(lists)
      console.log(lists.length === 0 && lists2.length === 0);

      if(lists.length === 0 && lists2.length === 0){
        localStorage.setItem('cover', true)
        setCover(true)
      }else{
        localStorage.setItem('cover', false)
        setCover(false)
      }

      setEvents(lists);
      console.log(lists);
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

  const skipCover = () =>{
    localStorage.setItem('cover', true)
    setCover(true)
  }

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
                    >2/4</div>
                    <p></p>
                  </div>
                  <div className="event-prog">
                    <h3>Courses</h3>
                    <div
                      class="course-progress-bar"
                      role="progressbar"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >3/10</div>
                    <p></p>
                  </div>
                  <div className="upcoming">
                    <h3>Upcoming Event</h3>
                    <img src={slide} alt="" />
                    <h4>Event Name</h4>
                    <p>Date</p>
                  </div>
                </div>
                <div className="my-courses">
                  <div className="section">
                    <h2>My Courses</h2>
                    <div className="card-container-div">
                      <CardBuilder arr={trending} limit={4} />
                    </div>
                  </div>
                </div>
                <div className="my-courses">
                  <div className="section">
                    <h2>My Events</h2>
                    <div className="card-container-div">
                      {events && <CardBuilderEvent arr={events} limit={4} />}
                    </div>
                  </div>
                </div>
              </div>
             { (cover === null || cover ) &&  <div className="cover">
                <Path setCover={setCover} skip={skipCover} />
              </div>}
            </>
          ) : (
            <div className="not-logged">
              <span class="material-symbols-outlined">report</span>
              <h3>Sign in for Dashboard</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
