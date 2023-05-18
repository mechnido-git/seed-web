import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../store/StoreContext';
import './enroll.css'
import axios from 'axios';

function Enroll() {
    const { index } = useParams();
    const { courseList } = useContext(StoreContext);
    const [data, setData]= useState(courseList[index])
    const [range, setRange] = useState(null);
    const [id, setId] = useState(courseList[index].id)

    const change = (e) => {
        console.log(e.target.value);
        setRange(parseInt(e.target.value))
    }

    const proceed = async(e) => {
        e.preventDefault()
        if(range === null) return

        const url = 'http://localhost:4242/create-checkout-session';
        const data = {
            index: id,
            range: range,
            name: courseList[index].name
        }
        try {
          const res = await axios.post(url, data);
          const token = res.data;
          console.log(token);
          window.location = token.url;
    
        } catch (error) {
          console.log(error);
    
        } finally{

        }
    }

  return (
    <div className='enroll-div'>
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