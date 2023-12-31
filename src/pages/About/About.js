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
import conti1 from "../../images/conti1.jpg";
import conti2 from "../../images/conti2.jpg";
import conti3 from "../../images/conti3.jpg";
import conti4 from "../../images/conti4.jpg";

import l1 from "../../images/launch1.JPG";
import l2 from "../../images/launch2.JPG";
import l3 from "../../images/3.svg";
import l4 from "../../images/4.svg";
import l5 from "../../images/tnkc_launch.png";


import { Splide, SplideSlide } from "@splidejs/react-splide";
function About() {
  const {check, theme   } = useContext(StoreContext);
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
  const[tp1, stp1]= useState('1260');
  const[tp2, stp2]= useState('900');
  const[tp3, stp3]= useState('1260');
  const[tp4, stp4]= useState('1260');
  const[ig , setIg] = useState(0);
  const[s1 , sets1]= useState("290px");
  const[s2 , sets2]= useState("500px");
  const[s3 , sets3]= useState("240px");
  const[s4 , sets4]= useState("80px");
  const[st1 , setst1]= useState("0px");
  const[st2 , setst2]= useState("250px");
  const[st3 , setst3]= useState("160px");
  const[st4 , setst4]= useState("250px");
  const[l, setl] = useState([l1 , l2, l5]);

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

const positions =[
  {right:"77%", top:"50%"},
  {right:"60%", top:"50%"},
  {right:"45%", top:"10%", center:'true'},
  {right:"30%", top:"50%"},
  {right:"15%", top:"50%"},
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

const pos =[
  // {right:"290px", top:"0px"},
  // {right:"500px", top:"250px"},
  // {right:"240px", top:"160px"},
  // {right:"80px", top:"250px"},

  {right:"36%", top:"0px"},
  {right:"63%", top:"250px"},
  {right:"30%", top:"130px"},
  {right:"10%", top:"250px"},
]

useEffect(()=>{
  const interval = setInterval(()=>{
        let a = (ig+1)%4;
        
        setIg(a);

        cp = pos[ig];
        sets1(cp.right);
        setst1(cp.top);

        sets2(pos[(ig+3)%4].right);
        sets3(pos[(ig+2)%4].right);
        sets4(pos[(ig+1)%4].right);

        setst2(pos[(ig+3)%4].top);
        setst3(pos[(ig+2)%4].top);
        setst4(pos[(ig+1)%4].top);
        
         
      }, 2000)
     
      return () => clearInterval(interval);
},[ig])

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
            { window.innerWidth >= 500?
          <section className="sectionimg">
            <div className= "ab1" style={{right:rgt, transition:'0.5s', top: top }} >
            <div className={top=="10%"? "img1" :"img"}><img style={{transition:'0.5s'}} src={about[0].imgs}/></div>
              <div  className="txt"><h3>{about[0].data}</h3></div>
            </div>
            <div className="ab2"  style={{right:rgt1, transition:'0.5s', top: tp1 }}>
            <div className={tp1=="10%"? "img1" :"img"}><img src={about[1].imgs}/></div>
              <div  className="txt"><h3>{about[1].data}</h3></div>
            </div >
            <div className="centralimg"  style={{right:rgt2, transition:'0.5s', top: tp2 }}>
            <div className={tp2=="10%"? "img1" :"img"}><img src={about[2].imgs}/></div>
              <div  className="txt"><h3>{about[2].data}</h3></div>
            </div>
            <div className="ab4"  style={{right:rgt3, transition:'0.5s', top: tp3 }}>
            <div className={tp3=="10%"? "img1" :"img"}><img src={about[3].imgs}/></div>
              <div  className="txt"><h3>{about[3].data}</h3></div>
            </div>
            <div className="ab5"  style={{right:rgt4, transition:'0.5s', top: tp4 }}> 
            <div className={tp4=="10%"? "img1" :"img"}><img src={about[4].imgs}/></div>
              <div className="txt"><h3>{about[4].data}</h3></div>
            </div>
          </section>
          :
          <section>
            <div className="abouts_mobile">
              {/* upper images */}
              <div className="up">
                <div className="blocks">
                  <div className="imgg"><img src={about1}/></div>
                  <div><h5>Experienced Trainers</h5></div>
                </div>

                <div className="blocks">
                  <div className="imgg"><img src={about2}/></div>
                  <div><h5>Established in 2019</h5></div>
                </div>

                <div className="blocks">
                  <div className="imgg"><img src={about3}/></div>
                  <div><h5>High quality tech-training platform</h5></div>
                </div>
              </div>
              


              {/* lower images */}
              <div className="down">


              <div className="blocks">
                  <div className="imgg"><img src={about4}/></div>
                  <div><h5>In demand courses</h5></div>
                </div>

                <div className="blocks">
                  <div className="imgg"><img src={about5}/></div>
                  <div><h5>4 Years in service</h5></div>
                </div>
           

              </div>



            </div>
           
          </section>

            }
          </div>
        <div className="guly">

       
          <div className="slides-gallery">
              <div id="gallery-left">
              <h1> Website Launch</h1>
              <p>Our Honorable Education Minister of Tamil Nadu, Thiru. Anbil Mahesh Poyyamozhi, ceremoniously inaugurated our website</p>
              </div>
              
            <div className="launch">
              <Splide
                tag="section"
                aria-labelledby="My Favorite Images"
                options={{
                  speed: 1000,
                  autoplay: true,
                  interval: 3400,
                 
                  pauseOnHover: false,
                  type: "loop",
                  pauseOnFocus: true,
                  keyboard: true,
                  gap: ".5rem",
                  width: "60%",
                  perPage:
                    window.innerWidth <= 426
                      ? 1
                      : window.innerWidth <= 768
                        ? 1
                        : window.innerWidth <= 1024
                          ? 1
                          : 1,
                  perMove: 1,
                  pagination: true,
                }}
              >
                {/* {gallery[0].images.map((item, i) => {
                  console.log("slide "+i);
                  return <SplideSlide>
                    {/* <ImageLoader src={item} style={{ objectFit: "contain", width: "100%" }} /> 
                   <img src={item} style={{ objectFit: "contain", width: "100%" }} alt="" />
                  </SplideSlide>
                })} */}

                {
                  l.map((item)=>{
                    return <SplideSlide>
                   <img src={item} style={{  height:"250px", objectFit: "contain", width: "100%" }} alt="" />
                  </SplideSlide>
                  })
                }


                
              </Splide>
              </div>
            </div>
         
            </div>
          
          

          <section className="mech">
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

          <section>
          <div className="details">
              <h2 className="contri">
              Our Contribution to the <br></br> Sustainable Development Goals
              </h2>
            </div>

            <div className="card-conti">
              <img className={s1=="30%"?"ctimg":"img1"} src={conti1} style={{right:s1, transition:'0.5s', top: st1 }}alt=""/>
              <img  className={s2=="30%"?"ctimg":"img2"} src={conti2}  style={{right:s2, transition:'0.5s', top: st2 }} alt=""/>
             <img  className={s3=="30%"?"ctimg":"img3"} src={conti3}  style={{right:s3, transition:'0.5s', top: st3 }} alt=""/>
              <img className={s4=="30%"?"ctimg":"img4"} src={conti4}  style={{right:s4, transition:'0.5s', top: st4 }} alt=""/>
            </div>
          </section>

        
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
