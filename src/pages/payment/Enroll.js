import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
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

  const [xverify, setxverify]= useState('');
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


    // const url = `${process.env.REACT_APP_SERVER_URL}/order`;
    // const data = {
    //   id: String(id),
    //   range: range,
    //   name: String(courses[index].name),
    //   userId: uid,
    // }
    try {

      // const res = await axios.post(url, data);
      // console.log(res.data.order);
      // var options = {
      //   key: process.env.REACT_APP_RAZOR_ID, // Enter the Key ID generated from the Dashboard
      //   amount: Number(res.data.order.amount), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      //   currency: "INR",
      //   order_id: res.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      //   handler: async function (response) {
      //     try {
      //       setLoading(true)
      //       const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/verify`, {
      //         response,
      //         userId: uid,
      //         range: range,
      //         courseId: id,
      //         email: email,
      //         userName,
      //         item: String(courses[index].name)
      //       })
      //       console.log(res);
      //       window.location.reload()
      //     } catch (error) {
      //       alert(error)
      //     }
      //   },
      //   theme: {
      //     color: "#3399cc"
      //   }
      // };
      // // console.log(process.env.REACT_APP_RAZOR_ID);
      // var rzp1 = new window.Razorpay(options);
      // rzp1.open()



      
/* Function to generate combination of password */
function generatePass() {
  let pass = '';
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return pass;
}
      

let mti = generatePass();
let uidd = generatePass();

console.log(mti);
console.log(uidd);

const data = 
{
  "merchantId": "M1J6KDOBZOWG",
  "merchantTransactionId":mti,
  "merchantUserId": uid ,
  "amount": 100,
  "redirectUrl": "http://localhost:3000/#/menu/dashboard",
  "redirectMode": "REDIRECT",
  "callbackUrl": "http://localhost:4242/verify",
  "mobileNumber": "9876893678",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}

var buff = JSON.stringify(data);
const payload = base64json.stringify(data);
let check = payload+"/pg/v1/pay"+"8efa9411-a19f-4874-9245-479b00da244d";

const encoder = new TextEncoder();
const dt = encoder.encode(check);
window.crypto.subtle.digest('SHA-256', dt)
.then(hashBuffer => {
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16)).join('');
  console.log(hashHex);
  let a = hashHex+"###1";
  setxverify(a);
  console.log(a);
})
.catch(error => console.error(error));

console.log("this is xverify ," , xverify); 
const pay = {
  "request": payload ,
  "xverify":xverify
}
axios.post("http://localhost:4242/payments", pay)
.then(res => console.log(res))
 .catch(err => console.log(err))





// calculated the  xverify till here

// sending the req to the phonepay using axios
// const url = "https://api.phonepe.com/apis/hermes/pg/v1/pay"

// 'Access-Control-Allow-Credentials':true,
// "Access-Control-Allow-Origin": "*",
//.padStart(2, '0')
//  const config = {
//   headers:{
//     "Content-Type" : "application/json",
//     "X-VERIFY": xverify,    
//   }
// };




// ======================================================final trial =======================================================================================



// var buff = JSON.stringify(data);
// const payload = base64json.stringify(data);

// console.log(typeof(payload));
// let check = payload+"/pg/v1/pay"+"8efa9411-a19f-4874-9245-479b00da244d";




// =========================================================================================================================================================

// ===========================================postman code===============================================

// const axios = require('axios');
// let data = JSON.stringify({
//   "request": "ewogICJtZXJjaGFudElkIjogIk0xSjZLRE9CWk9XRyIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA0IiwKICAibWVyY2hhbnRVc2VySWQiOiAiTVVJRDEyMyIsCiAgImFtb3VudCI6IDEwMDAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwOi8vbG9jYWxob3N0OjMwMDAvIy90ZXN0Y2FsbCIsCiAgInJlZGlyZWN0TW9kZSI6ICJSRURJUkVDVCIsCiAgImNhbGxiYWNrVXJsIjogImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8jL3Rlc3RjYWxsIiwKICAibW9iaWxlTnVtYmVyIjogIjk5OTk5OTk5OTkiLAogICJwYXltZW50SW5zdHJ1bWVudCI6IHsKICAgICJ0eXBlIjogIlBBWV9QQUdFIgogIH0KfQ=="
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://api.phonepe.com/apis/hermes/pg/v1/pay',
//   headers: { 
//     'X-VERIFY': '3d91b63f2c1b36e7282aaec4c397addc92ba98f25b4a6e1959dc6cd9bff8539c###1', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

// =========================================================================================================

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