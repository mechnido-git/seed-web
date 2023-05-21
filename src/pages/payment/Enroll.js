import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../store/StoreContext';
import './enroll.css'
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Spinner from '../../components/Spinner';

function Enroll({index}) {
    const { courseList, courses } = useContext(StoreContext);
    const [data, setData]= useState(courses[index])
    const [range, setRange] = useState(null);
    const [id, setId] = useState(courses[index].id)
    const [uid, setUid] = useState(null)
    const [loading, setLoading] = useState(false)

    const change = (e) => {
        console.log(e.target.value);
        setRange(e.target.value)
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid);
        } else {
        }
      });
    }, []);

    const proceed = async(e) => {
        e.preventDefault()
        if(range === null) return

        setLoading(true)
        const url = 'https://grumpy-puce-frog.cyclic.app/create-checkout-session';
        const data = {
            id: id,
            range: range,
            name: courseList[index].name,
            userId: uid,
        }
        try {
          const res = await axios.post(url, data);
          const token = res.data;
          console.log(token.url);
          window.location = token.url;
    
        } catch (error) {
          console.log(error);
    
        } finally{
          setLoading(false)
        }
    }

  return (
    <div className='enroll-div'>
      {loading && <Spinner other={"globel"} loading={loading} />}
        <h1>{data.name}</h1>
        <h4>select pay range</h4>
        <div className="card" >
            <form onChange={change}>
                {data.fee.map((item, i)=><div className='inp'>
                    <label htmlFor="radio">{item.type}{" : "} <span>₹{item.price}</span></label>
                    <input  type="radio" value={item.id} checked={range === item.id} onChange={change} id="range" />
                </div>)}
                <button onClick={proceed}>Proceed</button>
            </form>
        </div>
    </div>
  )
}

export default Enroll