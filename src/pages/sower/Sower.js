import React, { useEffect, useState, useContext } from 'react';
import './sower.css'
import HomeNav from '../home/homeNav/HomeNav'
import { auth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
import profile from "../../images/profile.png";
import Spinner from '../../components/Spinner';
import hero from "../../images/sower_hero.png"
import logo from "../../images/seed_logo/Seed.svg"
import descImg from "../../images/description_sower.png"
import d1 from "../../images/details_1.png"
import d2 from "../../images/details_2.png"
import d3 from "../../images/details_3.png"
import d4 from "../../images/details_4.png"
import s1 from "../../images/step_1.png"
import s2 from "../../images/step_2.png"
import s3 from "../../images/step_3.png"
import s4 from "../../images/step_4.png"
import s5 from "../../images/step_5.png"
import Footer from '../../components/footer/Footer';
import ApplyNow from './ApplyNow';
import { StoreContext } from '../../store/StoreContext';



const detailList = [
  {
    title:"Payouts Well",
    desc: "Payment for every sessions. Top experts earn up to ₹50k a month.",
    img: d1,
  },
  {
    title:"Flexibility & Independence",
    desc: "Enjoy the freedom and flexibility of being a Mechnido's SEED trainer.",
    img: d2,
  },
  {
    title:"Awesome Community",
    desc: "Join a vibrant community of like-minded trainers, educators, and experts.",
    img: d3,
  },
  {
    title:"Share Your Expertise",
    desc: "Contribute your knowledge and experience to shape the next generation of professionals.",
    img: d4,
  },
]


function Sower() {

  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(profile);
  const [apply, setApply] = useState(false);
  const [userId, setUserId] = useState(null)
  const {check} = useContext(StoreContext);

  
const stepList = [
  {
    title: "Apply as Sower",
    desc: "Apply by filling in a  Registration form.",
    color: check ? "#f0eee4" :"#f7fdf3",
    
    img: s1,
  },
  {
    title: "Online Screening​",
    desc: "Our experts will screen the best profiles.",
    color: check ? "#ecf3f9" : "#ecf8e5",
    
    img: s2,
  },
  {
    title: "Teaching Demo",
    desc: "Pick a topic of your choice and give a teaching demo to our experts.",
    color: check ? "#f0eee4" : "#dcf4ce",
   
    img: s3,
  },
  {
    title: "On-Boarding & Training",
    desc: "Once selected, documentation and profile creation will be done, followed by training and induction webinar.",
    color: check ? "#ecf3f9" :"#f7fdf3",
    
    img: s4,
  },
  {
    title: "Start Sowering",
    desc: "Congratulations! You are an Sower!",
     color: check ? "#f0eee4":"#ecf8e5",
    
    img: s5,
  },
] 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        setUserId(user.uid)
        if (user.photoURL) setDp(user.photoURL);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  useEffect(()=>{

    if(apply){
      document.body.classList.add("disable-scroll");
    }else{
      document.body.classList.remove("disable-scroll");
    }
  }, [apply])

  const applyNow = () =>{
    if(userId){
      
      setApply(true)
    }else{
      alert("Log in first")
    }
  }

  return (
    <>
    {loading && <Spinner other="globel" loading={loading} />}
      <HomeNav initial={2} bodyId={'sower'} dp={dp} setLoading={setLoading} setSignIn={setSignIn} signIn={signIn} userName={userName} />
      <div className="sower" id='sower'>
        <div className="hero">
          <div className="left">
           {/* <img src={logo} alt="" />  */}
          <div className="title">
            <h1>Become a Sower</h1>
            <button className='sower-btn' onClick={applyNow}>Apply Now</button>
          </div>
          </div>
          <div className="right">
            <img src={hero} alt="" />
          </div>
        </div>
        <div className="description">
          <div className="left">
            <img src={descImg} alt="" />
          </div>
          <div className="right">
          <h2>Become a Sower</h2>
            <ul>
              <li>Are you passionate about sharing your knowledge and making a positive impact on others? </li>
              <li>Are you an expert in your field, eager to inspire and empower learners? </li>
              <li>Look no further - join the MECHNIDO'S SEED Trainer Program and embark on a fulfilling journey of becoming a trainer.</li>
            </ul>
            <button className='sower-btn'onClick={applyNow}>Apply Now</button>
          </div>
        </div>
        <div className="details">
          <h2>Why Teach with SEED?</h2>
          <div className="lists">
            {detailList.map(item => <div className='card'>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>)}
          </div>
        </div>

        <div className="steps">
          <h2>Become a sower in 5 easy steps</h2>
          <div className="lists">
            {stepList.map(item => <div style={{backgroundColor: `${item.color}`}} className='card'>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>)}
          </div>
          <button className='sower-btn' onClick={applyNow}>Apply Now</button>
        </div>
      <Footer />
      </div>
      {apply && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setApply(false)}></div>
          <ApplyNow name={userName} uid={userId} setLoading={setLoading}  />
        </div>
      )}
    </>
  )
}

export default Sower