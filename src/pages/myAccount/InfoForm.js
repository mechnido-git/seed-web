import React, { useEffect, useState } from 'react'
import './info.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Spinner from '../../components/Spinner';

function InfoForm() {

    const [fname, setFname] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');
    const [address, setAddress] = useState('');

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setFname(user.displayName);
            setEmail(user.email);
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
      }, []);

    const validate = (e) =>{
        const inputs = document.querySelectorAll('input')
        inputs.forEach((inp ,i) => {
          if(inp.value === '' && i != 0 ){
            console.log(inp);
            inp.style.border = '2px solid red'
          }
        });
      }


      const submitHandler = (e) => {
        e.preventDefault()
        console.log(fname, gender, dob, number, email, college, department, year, address);
      }

    return (
        <div className='user-info'>
            <h2>My Account</h2>
            {loading? <Spinner loading={loading} /> : <>
            <form onSubmit={submitHandler}>
                <div className="input-div">
                    <label htmlFor="fname">Full Name</label>:
                    <input value={fname} onChange={(e)=>setFname(e.target.value)} minLength={3} required  type="text" id='name' />
                </div>
                <div className="input-div">
                    <label htmlFor="gender">Gander</label> :
                    <div className="inp" onChange={(e)=>setGender(e.target.value)}>
                    <input required value='male' checked={gender === 'male'? true: false} type="radio" name='gender' /> Male
                    <input required value='female' checked={gender === 'female'? true: false}  type="radio" name='gender' /> Female
                    </div>
                </div>
                <div className="input-div">
                    <label htmlFor="dob">Birth date</label> :
                    <input required value={dob} onChange={(e)=>setDob(e.target.value)}  type="date" name="dob" id="" />
                </div>
                <div className="input-div">
                    <label htmlFor="mobile">Mobile number</label> :
                    <input min={10} value={number} onChange={(e)=>setNumber(e.target.value)} pattern="[6789][0-9]{9}" title="Please enter valid phone number" required  type="tel" name='mobile' />
                </div>
                <div className="input-div">
                    <label htmlFor="email">Email</label> :
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required  type="email" name='email' />
                </div>
                <div className="input-div">
                    <label htmlFor="college">College name</label> :
                    <input value={college} onChange={(e)=>setCollege(e.target.value)} required minLength={3} type="text" name="college" id="" />
                </div>
                <div className="input-div">
                    <label htmlFor="dpt">Department</label> :
                    <input value={department} onChange={(e)=>setDepartment(e.target.value)} required minLength={3} type="text" name='dpt' />
                </div>
                <div className="input-div">
                    <label htmlFor="year">Year</label> :
                    <input value={year} onChange={(e)=>setYear(e.target.value)} required  type="number" />
                </div>
                <div className="input-div">
                    <label htmlFor="college-adress">College Address</label>
                    :
                    <textarea
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        rows={5}
                        cols={5}
                        required
                    />
                </div>
                <input type="submit" onClick={validate} value="submit" />
            </form>
            </>}

        </div>
    )
}

export default InfoForm