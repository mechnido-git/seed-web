import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState , useContext} from "react";
import Spinner from "../../components/Spinner";
import { auth } from "../../firebase/config";
import kart from "../../images/kart_logo.png";
import logo from "../../images/seed_logo/Seed Joined.svg"
import mech from "../../images/mech_logo.png";
import profile from "../../images/profile.png";
import "./about.css";
import HomeNav from "../home/homeNav/HomeNav";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import seedwhite from "../../images/Seed Joined White 2 .png";
import { StoreContext } from "../../store/StoreContext.js";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.png"; 
import about4 from "../../images/about4.png";
import about5 from "../../images/about5.png";
import conti1 from "../../images/contri1.png";
import conti2 from "../../images/contri2.png";
import conti3 from "../../images/contri3.png";
import conti4 from "../../images/contri4.png";


function About() {
  const {check, theme } = useContext(StoreContext);
  const [dp, setDp] = useState(profile);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(null);
  const [signIn, setSignin] = useState(false);
  const [ind, setInd] = useState(0);
  const[rgt, setRgt] = useState('1160');
  const[rgt1, setrgt1]= useState('900');
  const[rgt2, setrgt2]= useState('650');
  const[rgt3, setrgt3]= useState('450');
  const[rgt4, setrgt4]= useState('200');
  const[top, settop]=  useState('1260');
  const[center, setcenter] = useState(false);
  const[tp1, stp1]= useState('1260');
  const[tp2, stp2]= useState('900');
  const[tp3, stp3]= useState('1260');
  const[tp4, stp4]= useState('1260');
  
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        if (user.photoURL) setDp(user.photoURL);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);


 
// useEffect(() => {
  
//   //Implementing the setInterval method
//   const interval = setInterval(()=>{
//     let a = (ind+1)%5;
//     setInd(a);
//     console.log("about changes", ind);
//   }, 3000)

//   //Clearing the interval
//   return () => clearInterval(interval);
// }, [ind]);

const positions =[
  {right:"1160px", top:"1260px"},
  {right:"900px", top:"1260px"},
  {right:"650px", top:"960px", center:'true'},
  {right:"450px", top:"1260px"},
  {right:"200px", top:"1260px"},
]
let cp=0;
useEffect(()=>{
  const interval = setInterval(()=>{
        let a = (ind+1)%5;
        
        setInd(a);
        cp = positions[ind];
        settop(cp.top);
       setRgt(cp.right);

       setrgt1( positions[(ind+4)%5].right );
       stp1(positions[(ind+4)%5].top);

       setrgt2( positions[(ind+3)%5].right );
       stp2(positions[(ind+3)%5].top);

       setrgt3( positions[(ind+2)%5].right );
       stp3(positions[(ind+2)%5].top);

       setrgt4( positions[(ind+1)%5].right );
       stp4(positions[(ind+1)%5].top);
    
      }, 3000)
     
      return () => clearInterval(interval);
},[ind])

const about=[
 {
  imgs:about1,
  data:"Experienced Trainers"
 },
 {
  imgs: about2,
  data :"Established in 2019"
 },
 {
  imgs: about3,
  data :"High quality tech-training platform"
 } ,
 {
  imgs: about4,
  data :"In demand courses"
 } ,
 {
  imgs: about5,
  data :"4 Years in service"
 }
]


  return (
    <>
    {loading && <Spinner other="globel" loading={loading} />}
      <HomeNav initial={1} bodyId={'about'} dp={dp} setSignIn={setSignin} signIn={signIn}  redirect={redirect} setRedirect={setRedirect} userName={userName} setLoading={setLoading} links={[<Link to="/">Home</Link>, <Link to="/sower">Become a Sower</Link>]} />
      <div className="about-container">
        {loading && <Spinner loading={loading} />}

        <div className="about" id="about">

          <section>
            <div>
            <h1>
                About SEED- AN EDTECH ORGANISATION
              </h1>

              <p>
              Mechnido's Seed Learning Hub is a dynamic and innovative platform that serves as an integral part of MECHNIDO, dedicated to providing a comprehensive learning solution for individuals across diverse segments.
               Our platform offers a wide range of courses and events to help learners enhance their knowledge and skills, empowering them to thrive in an ever-evolving world. 
              Our courses and events are designed by industry experts and educators who are passionate about their fields.{" "}
              </p>
            </div>
            <div className="logo">
            <img src={check ? seedwhite : logo} alt="seed logo " />
            </div>
          </section>

        


          <section className="vismis">
           <div className="vis">
           <h1>Vision</h1>
              <p>
              We envision a world where learning is a lifelong pursuit, and everyone has the opportunity to unlock their full potential. 
              Our goal is to create a dynamic and inclusive learning community where individuals can explore, connect, and grow, making learning a fulfilling and enjoyable experience.{" "}
              </p>
           </div>
           <div className="mis">
           <h1>Mission</h1>
              <p>
              Our mission is to empower individuals to learn and grow by providing a comprehensive and accessible learning solution. We strive to offer a wide range of courses and events that enhance knowledge and skills, enabling individuals to thrive in a changing world
              </p>
           </div>
          </section>
          <div className="abouts">
          <section className="sectionimg">
            <div className= "ab1" style={{right:rgt, transition:'0.5s', top: top }} >
            <div className={top=="960px"? "img1" :"img"}><img style={{transition:'0.5s'}} src={about[0].imgs}/></div>
              <div  className="txt"><h3>{about[0].data}</h3></div>
            </div>
            <div className="ab2"  style={{right:rgt1, transition:'0.5s', top: tp1 }}>
            <div className={tp1=="960px"? "img1" :"img"}><img src={about[1].imgs}/></div>
              <div  className="txt"><h3>{about[1].data}</h3></div>
            </div >
            <div className="centralimg"  style={{right:rgt2, transition:'0.5s', top: tp2 }}>
            <div className={tp2=="960px"? "img1" :"img"}><img src={about[2].imgs}/></div>
              <div  className="txt"><h3>{about[2].data}</h3></div>
            </div>
            <div className="ab4"  style={{right:rgt3, transition:'0.5s', top: tp3 }}>
            <div className={tp3=="960px"? "img1" :"img"}><img src={about[3].imgs}/></div>
              <div  className="txt"><h3>{about[3].data}</h3></div>
            </div>
            <div className="ab5"  style={{right:rgt4, transition:'0.5s', top: tp4 }}> 
            <div className={tp4=="960px"? "img1" :"img"}><img src={about[4].imgs}/></div>
              <div className="txt"><h3>{about[4].data}</h3></div>
            </div>
          </section>
          </div>
        
         
         
        
          
          

          <section>
            <div className="details">
              <h1>
                About Organizing Team -{" "}
                <span style={{ color: "red" }}>MECHNIDO</span>
              </h1>
              <p>
              M/S MECHNIDO was Established in 2018 in Coimbatore, Tamil Nadu, M/S Mechnido is a promising enterprise in the electric vehicle (EV) industry.
               With a strong commitment to driving innovation and contributing to a sustainable future, Mechnido is dedicated to manufacturing high-quality electric vehicles that
                offer exceptional performance and efficiency. Our team of skilled engineers, designers, and visionaries works diligently to develop cutting-edge EVs that prioritize reliability
                 and customer satisfaction.

              </p>
            </div>
            <div className="logomech">
              <img src={mech} alt="" />
            </div>
          </section>


          {


          }


          <section>

          <div className="details">
              <h2 className="contri">
              Our Contribution to the <br></br> Sustainable Development Goals
              </h2>
            </div>
            <div className="card-conti">
              <img className="img1" src={conti1} alt=""/>
              <img  className="img2" src={conti2} alt=""/>
             <img  className="img3" src={conti3} alt=""/>
              <img className="img4" src={conti4} alt=""/>
            </div>
           
          </section>

        
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
