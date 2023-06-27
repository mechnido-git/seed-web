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
    const [email, setEmail] = useState(null)
    const [userName, setUserName] = useState(null)

     //const base = "https://wandering-ruby-fish.cyclic.app"
     const base = 'http://localhost:4242'

    const change = (e) => {
        console.log(typeof range);
        setRange(parseInt(e.target.value))
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUid(user.uid);
          setEmail(user.email)
          setUserName(user.displayName)
        } else {
        }
      });
    }, []);

    const proceed = async(e) => {
        e.preventDefault()
        if(range === null) return

        setLoading(true)
        const url = `${base}/order`;
        const data = {
            id: String(id),
            range: range,
            name: String(courseList[index].name),
            userId: uid,
        }
        try {
          const res = await axios.post(url, data);
          console.log(res.data.order);
          var options = {
            key: process.env.RAZOR_ID, // Enter the Key ID generated from the Dashboard
            amount: Number(res.data.order.amount ), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            order_id: res.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response){
                try {
                  setLoading(true)
                  const res = await axios.post(`${base}/verify`, {
                    response,
                    userId: uid,
                    range: range,
                    courseId: id,
                    email: email,
                    userName,
                    item  : String(courseList[index].name)
                  })
                  window.location.reload()
                } catch (error) {
                  alert(error)
                }
            },
            theme: {
                color: "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open()
    
        } catch (error) {
          console.log(error+ "hihi");
    
        } finally{
          setLoading(false)
        }
    }

  return (
    <div className='enroll-div'>
      {loading && <Spinner other={"globel"} loading={loading} />}
        <h1>{data.name}</h1>
        <h4>Select pay range</h4>
        <div className="card" >
            <form onChange={change}>
                {data.fee.map((item, i)=><div className='inp'>
                    <label htmlFor="radio">{item.type}{" : "} <span>₹{item.price}</span></label>
                    <input  type="radio" value={item.id} checked={range === parseInt(item.id)} onChange={change} id="range" />
                </div>)}
                <button onClick={proceed}>Proceed</button>
            </form>
        </div>
    </div>
  )
}

export default Enroll