import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import "./pay.css"
import { auth } from '../../firebase/config';
import { useCountdown } from '../../hooks/useCountDown';
import Spinner from '../Spinner';
import axios from "axios";

export default function PayDue({setDue, event}) {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, async(user)=>{
            setUser(user)
        })
    }, [])

    const [days, hours, minutes, seconds] = useCountdown(event.dueDate);

    const handleProceed = async() => {
        setLoading(true)
        try {
            const url = `${process.env.REACT_APP_SERVER_URL}/register`;
            const info = {
                userId: user.uid,
                eventId: event.id,
                name: event.name,
                username: user.displayName,
                fullPay: false,
                phase: 2,
                email: user.email
            }
            const res = await axios.post(url, info);
            window.location.href = res.data.url
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false)
        }
    }

  return (
    <div className="pay-due">
        {loading ? <Spinner loading={loading} />:(
<>
        <span class="material-symbols-outlined" onClick={() => { setDue(false) }} >close</span>
        <div className="body-due">
            <h2>Pay Due</h2>
            <p className='amount'>Due Amount: {event.phase2fee}</p>
            <p>Due Date: {event.dueDate}</p>
            <p>time remaining : {seconds <= 0? 0: seconds}:{minutes <= 0? 0: minutes }:{hours <= 0? 0: hours}:{days <= 0? 0: hours}</p>
            <button onClick={handleProceed}>Proceed</button>
        </div>
        </>
        )}
    </div>
  )
}
