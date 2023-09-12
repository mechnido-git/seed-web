import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../store/StoreContext';
import './enroll.css'
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Spinner from '../../components/Spinner';
import cancellogo from "../../images/cancel_icon.png";

function Enroll({ index, setbuy }) {
  const { courseList, courses } = useContext(StoreContext);
  const [data, setData] = useState(courses[index])
  const [range, setRange] = useState(null);
  const [id, setId] = useState(courses[index].id)
  const [uid, setUid] = useState(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)
  const [userName, setUserName] = useState(null)

  const [section, setSection] = useState(0)

  const [month, setMonth] = useState(-1)
  const [batch, setBatch] = useState(-1)
  const [code, setCode] = useState('')

  const change = (e) => {
    console.log(typeof range);
    setRange(parseInt(e.target.value))
  }

  useEffect(() => {
    console.log(courses[index].id);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email)
        setUserName(user.displayName)
      } else {
      }
    });
  }, []);

  const proceed = async (e) => {
    e.preventDefault()
    if (range === null) return

    setLoading(true)
    const url = `${process.env.REACT_APP_SERVER_URL}/order`;
    const data = {
      id: String(id),
      range: range,
      name: String(courses[index].name),
      userId: uid,
    }
    try {

      const res = await axios.post(url, data);
      console.log(res.data.order);
      var options = {
        key: process.env.REACT_APP_RAZOR_ID, // Enter the Key ID generated from the Dashboard
        amount: Number(res.data.order.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        order_id: res.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          try {
            setLoading(true)
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/verify`, {
              response,
              userId: uid,
              range: range,
              courseId: id,
              email: email,
              userName,
              item: String(courses[index].name)
            })
            console.log(res);
            window.location.reload()
          } catch (error) {
            alert(error)
          }
        },
        theme: {
          color: "#3399cc"
        }
      };
      console.log(process.env.REACT_APP_RAZOR_ID);
      var rzp1 = new window.Razorpay(options);
      rzp1.open()

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false)
    }
  }
  const handleclose = () => {
    setbuy(false);
  }
  return (
    <div className='enroll-div'>
      {/* <img className='clbt' src={cancellogo} onClick={handleclose} alt="close button"/> */}
      <div className="btn">
      {section === 1 && <span style={{fontSize: "1.5rem"}} onClick={()=>setSection(0)}> {"<-"} </span> }
      <span className="material-symbols-outlined" style={{marginLeft: "auto"}} onClick={handleclose} alt="close button">close</span>
      </div>
      {loading && <Spinner other={"globel"} loading={loading} />}
      {/* <img className='clbt' src={cancellogo} alt="close button"/> */}
      <h1>{data.name}</h1>
        <form  action="" style={{display: 'flex', flexDirection: 'column'}}>
        <p className='hours'>Duration <span>{data.metrics.hours}</span> Hours</p>
      {section === 0 ? <div className='inp-form'>
          <div className="inp">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} id="" />
          </div>
          <div className="inp">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="" />
          </div>
          <div className="inp">
            <label htmlFor="name">Course Category</label>
            <input type="email" name="email" value={data.category} id="" />
          </div>
          <div className="inp">
            <label htmlFor="name">Select Month</label>
            <select name="month" value={month} onChange={(e)=>setMonth(e.target.value)} id="">
              <option value="none" selected hidden>Select Month</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="inp">
            <label htmlFor="name">Select Batch</label>
            <select name="month" value={batch} onChange={(e)=>setBatch(e.target.value)} id="">
              <option value="none" selected hidden>Select Batch</option>
              <option value="Batch 1 Weekdays">Batch 1 Weekdays</option>
              <option value="Batch 2 Weekends">Batch 2 Weekends</option>
            </select>
          </div>
          <div className="inp">
          <button type='button' onClick={()=>setSection(1)}>PROCEED</button>
          </div>
        </div>:<>
          <div className="inp-form">

          <div className="card" >
            <h5>Including 18% GST </h5>
            {data.fee.map((item, i) => <div className='inp'>
              <label htmlFor="radio">{item.type}{" : "} <span>₹{item.price}</span></label>
              <input type="radio" value={item.id} checked={range === parseInt(item.id)} onChange={change} id="range" />
            </div>)}
          </div>
          <div className="inp">
            <label htmlFor="name">Mode</label>
            <input type="text" name="email" value={"online"} id="" />
          </div>
          <div className="inp">
            <label htmlFor="name">Selected Month</label>
            <input type="text" name="email" value={month} id="" />
          </div>
          <div className="inp">
            <label htmlFor="name">Selected Batch</label>
            <input type="text" name="email" value={batch} id="" />
          </div>
          <div className="inp">
            <label htmlFor="name">Apply with coupon code</label>
            <div className="field">
            <input type="text" name="email" placeholder='Enter Code xxx' value={code} onChange={(e)=>setCode(e.target.value)} id="" />
            <button>Apply</button>
            </div>
          </div>
          </div>
            <button className='buy' onClick={proceed}>Proceed</button>
        </>}


      </form>
    </div>
  )
}

export default Enroll