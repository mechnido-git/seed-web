import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { StoreContext } from '../../store/StoreContext';
import './enroll.css'
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Spinner from '../../components/Spinner';
import cancellogo from "../../images/cancel_icon.png";
const base64json = require('base64json');



function Enroll({ index, setbuy }) {
  const { courseList, courses } = useContext(StoreContext);
  const [data, setData] = useState(courses[index])
  const [range, setRange] = useState(null);
  const [id, setId] = useState(courses[index].id)
  const [uid, setUid] = useState(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)
  const [userName, setUserName] = useState(null)
 const[total, setTotal] = useState(data.fee.price);
  const [section, setSection] = useState(0)

  const [month, setMonth] = useState(-1)
  const [batch, setBatch] = useState(-1)
  const [code, setCode] = useState('')

  const navigate = useNavigate()
  const change = (e) => {
    // console.log(typeof range);
    setRange(parseInt(e.target.value));
  setTotal(data.fee[0].price)
  }

  useEffect(() => {
    // console.log(courses[index].id);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setEmail(user.email)
        setUserName(user.displayName)
      } else {
      }
    });
  }, []);

  const getNextSection = () => {
    if(month === -1){
      alert("Select a month")
      return
    }

    if(batch === -1){
      alert("Select a batch")
      return
    }
    setSection(1)
  }

  const proceed = async (e) => {
    e.preventDefault()
    if (range === null) {
      alert("Select amount")
      return
    }

    setLoading(true)

    const url = `${process.env.REACT_APP_SERVER_URL}/order`;
    const data = {
      id: String(id),
      range: range,
      name: String(courses[index].name),
      userId: uid,
      email: email,
      username: userName
    }
    try {
      const res = await axios.post(url, data);
      window.location.href = res.data.url
     
    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false)
    }
  }
  const handleclose = () => {
    setbuy(false);
  }
  const coupan=()=>{
    // setTotal(data.fee[0].price)
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
            <label htmlFor="name">Course Category</label>
            <input type="email" name="email" value={data.category} id="" />
          </div>
          <div className="inp">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="em" />
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
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
            </select>
          </div>
          <div className="inp">
          <button type='button' onClick={getNextSection}>PROCEED</button>
          </div>
        </div>:<>
          <div className="inp-form">
            <div>
            <div className="card" >
            <h5>Including 18% GST </h5>
            {data.fee.map((item, i) => <div className='inp'>
              <label htmlFor="radio">{item.type}{" : "} <span>₹{item.price}</span></label>
              <input type="radio" value={item.id} checked={range === parseInt(item.id)} onChange={change} id="range" />
              {/* checked={range === parseInt(item.id)} */}
             
            </div>
             
            )}
          </div>
         
          <div className="inpt coup">
            <label htmlFor="name">Apply with coupon code</label>
            <div className="field">
            <input type="text" name="email" placeholder='Enter Code xxx' value={code} onChange={(e)=>setCode(e.target.value)} id="" />
            <button type='button' onClick={coupan} >Apply</button>
            </div>
          </div>

          <div className='totalamount'>
            <label>  Total Amount</label>
            <input className="ta" type="text" name="email" value={"₹"+total?total:0} id="" />
          </div>

            </div>
          
         
          <div className='left'>
          <div className="inpt lft">
            <label htmlFor="name">Mode</label>
            <input type="text" name="email" value="Online" id="" />
          </div>
          <div className="inpt lft">
            <label htmlFor="name">Selected Month</label>
            <input type="text" name="email" value={month} id="" />
          </div>
          <div className="inpt lft">
            <label htmlFor="name">Selected Batch</label>
            <input type="text" name="email" value={batch} id="" />
          </div>

          </div>
         
         
          </div>
            <button className='buy' onClick={proceed}>Complete Checkout</button>
        </>}


      </form>
    </div>
  )
}

export default Enroll