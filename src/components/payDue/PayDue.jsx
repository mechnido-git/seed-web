import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import "./pay.css"
import { auth, db } from '../../firebase/config';
import { useCountdown } from '../../hooks/useCountDown';
import Spinner from '../Spinner';
import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function PayDue({ setDue, event }) {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            setUser(user)
        })
    }, [])

    const [days, hours, minutes, seconds] = useCountdown(event.dueDate);

    const handleProceed = async () => {
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
                email: user.email,
                coupen: codeYes,
                code: code
            }
            const res = await axios.post(url, info);
            window.location.href = res.data.url
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const [code, setCode] = useState('')
    const [codeYes, setCodeYes] = useState(false)
    const [total, setTotal] = useState(event.phase2num)


    const coupan = async () => {
        if (codeYes) {
            setTotal(event.registerFee)
            setCodeYes(false)
            setCode("")
            document.getElementById('code-msg').innerText = ""
            document.getElementById('code-error').innerText = ""
            return
        }
        let success = document.getElementById('code-msg')
        let error = document.getElementById('code-error')
        success.innerText = ""
        error.innerText = ""

        if (code.length <= 0) return error.innerText = "No coupen code"
        success.innerText = "Applying code..."
        const q = query(collection(db, "coupens"), where("code", "==", code.toLowerCase()));
        try {
            const querySnapshot = await getDocs(q);
            let flag = false
            let discount;
            querySnapshot.forEach((doc) => {
                flag = true
                discount = doc.data().discount
            });
            if (!flag) {
                success.innerText = ""
                return error.innerText = "invalid coupen code"
            }
            console.log((discount / 100) * total)
            setTotal(total - Math.round((discount / 100) * total))
            success.innerText = "Coupen Applied"
            setCodeYes(true)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="pay-due" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {loading ? <Spinner loading={loading} /> : (
                <>
                    <span class="material-symbols-outlined" onClick={() => { setDue(false) }} >close</span>
                    <div className="body-due">
                        <h2>Pay Due</h2>
                        <p className='amount'>Due Amount: {event.phase2fee}</p>
                        <p>Due Date: {event.dueDate}</p>
                        <p>time remaining : {seconds <= 0 ? 0 : seconds}:{minutes <= 0 ? 0 : minutes}:{hours <= 0 ? 0 : hours}:{days <= 0 ? 0 : hours}</p>
                        <button onClick={handleProceed}>Proceed</button>
                    </div>
                    <div className="inpt coup" style={{
                        display: 'flex', flexDirection: "column",
                        gap: '.5rem',
                        justifyContent: 'space-around'
                    }}>
                        <label htmlFor="name">Apply with coupon code</label>
                        <div className="fields">
                            <input type="text" id="code" name="code" placeholder='Enter Code xxx' value={code} onChange={(e) => setCode(e.target.value)} />
                            <button type='button' onClick={coupan} >{codeYes ? "remove" : "Apply"}</button>
                        </div>
                        <p id='code-msg'></p>
                        <p id='code-error' style={{ color: 'red' }}></p>
                        <div className='totalamount' style={{ marginTop: '20px', gap: '.5rem', alignItems: 'center', display: 'flex', justifyContent: 'right' }}>
                            <label>Total:</label>
                            <input className="ta" type="text" name="email" value={"₹" + total ? total : 0} id="" />
                        </div>
                    </div>

                </>
            )}
        </div>
    )
}
