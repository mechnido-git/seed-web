import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { auth, db } from '../../../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import './eventConfig.css'
import logo from "../../../images/man.png";
import Spinner from '../../../components/Spinner'

function EventConfig() {

    const {eventId} = useParams()
    const [user, setUser] = useState(null)
    const [eventData, setEventData] = useState(null)

    const [teamName, setTeamName] = useState("SAMPLE NAME");
    const [teamMembers, setTeamMembers] = useState(5);
    const [kartType, setKartType] = useState("");
    const [collegeName, setCollegeName] = useState("Sample Name");
    const [collegeAddress, setCollegeAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user)
            const q = query(collection(db, "enrolled"), where("id", "==", user.uid), where("eventId", "==", eventId))
            getDocs(q).then((snaps)=>{
                snaps.forEach(data=>console.log(data.data()))
                snaps.forEach(data=>setEventData(data.data()))
                setLoading(false)
            }).catch(err=>console.log(err))
        })
    }, [])

  return (
    <div className="event-config">
        {loading && <Spinner loading={loading} />}
        <div className="form-div">
        <span class="material-symbols-outlined" onClick={()=>navigate(-1)}>
arrow_back
</span>
            <div className="team-logo">
            <img src={logo} alt="" />
            <button>Edit</button>
            </div>
        {eventData && <form >
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
              <label htmlFor="team-members">No of Team Members</label> :
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
              <label htmlFor="Kart Type">Kart Type</label> :
              <select
                name="kartType"
                id="kartType"
              >
                {eventData.kartType == 'gokart'? <option>Go-Kart</option>:<option>E-Kart</option>}
              </select>
            </div>

            <div className="input-div">
              <label htmlFor="state">Facualties</label> :
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
              <label htmlFor="college-adress">College Address</label> :
              <textarea readOnly value={eventData.adress} rows={5} cols={5} />
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
            </form>}
            </div>
    </div>
  )
}

export default EventConfig