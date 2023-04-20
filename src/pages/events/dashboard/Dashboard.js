import { onAuthStateChanged } from "firebase/auth";
import "./dashboard.css";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase/config";
import Spinner from "../../../components/Spinner";
import logo from "../../../images/man.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(logo);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('')
  const [uid, setUid] = useState()
  const [email, setEmail] = useState('')
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  const doFetch = async(user) => {
    const q = query(collection(db, 'events'), where("enrolled", "array-contains", user.uid))
    try {
        const snaps = await getDocs(q);
        const lists = snaps.docs.map(list=>{
            return {
                ...list.data(),
                id: list.id
            }
        })
        setEvents(lists)
        setLoading(false);
    } catch (error) {
        console.log(error);
    }
    

}

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        setUid(user.uid)
        setUsername(user.displayName)
        setEmail(user.email)
        if (user.photoURL) setDp(user.photoURL);
            doFetch(user)
      } else {
        navigate('/menu/events')
        setLoading(false);
      }
    });
  }, []);
  return (
    <div className="dashboard">
      {loading && <Spinner loading={loading} />}
      {loggedIn ? (
        <>
          <h2>Dashboard</h2>
          <div className="main">
            <div className="profile">
              <img src={dp} alt="" />
              <div className="info">
                <ul>
                    <li><div>Name</div></li><li>:</li><li>{username}</li>
                    <li><div>Email</div></li><li>:</li><li>{email}</li>
                </ul>
              </div>
            </div>
            <h2>Your Events</h2>
            <div className="events">
                {events.length != 0? events.map((event, index)=>{
                    return  <Link to={`/menu/event-config/${event.id}`}>
                      <div className="event-card">
                        <h4>{event.name}</h4>
                    </div>
                    </Link>
                }): <h4>You didn't enrolled for any events</h4>}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
