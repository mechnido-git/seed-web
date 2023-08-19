import React, { useEffect, useRef, useState ,useContext} from "react";
import "./home.css";
import trophy from "../../images/trophy.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getRedirectResult, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import { HashLink } from "react-router-hash-link";
import { FiPlus } from "react-icons/fi";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import profile from "../../images/profile.png";
import intro from "../../images/intro.jpg";

import HomeNav from "./homeNav/HomeNav";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { doc, getDoc, setDoc } from "firebase/firestore";

import fbwhite from "../../images/facebookwhite.png";
import instawhite from "../../images/instawhite.png";
import { StoreContext } from "../../store/StoreContext";
import why1 from "../../images/whyus1.png";
import why2 from "../../images/whyus2.png";
import why3 from "../../images/whyus3.png";
import why4 from "../../images/whyus4.png";
import why5 from "../../images/whyus5.png";
import why6 from "../../images/whyus6.png";
import msme from "../../images/msme.png";
import aicte from "../../images/aicte.png";
import iso from "../../images/iso.png";
import collab1 from "../../images/collab1.png";
import collab2 from "../../images/collab2.png";
import collab3 from "../../images/collab3.png";
import collab4 from "../../images/collab4.png";
import collab5 from "../../images/collab5.png";
import collab6 from "../../images/collab6.png";
import collab7 from "../../images/collab7.png";
import collab8 from "../../images/collab8.png";
import linkwhite from "../../images/linkedin-white.png";
import linkgreen from "../../images/linkedin-green.png";
import tg from "../../images/tweet-green.png";
import tw  from "../../images/tweet-white.png";
import thw from "../../images/thread-w.png";
import thg from "../../images/threads-green.png";
import hp2 from "../../images/home page 2.png";

function Home() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Category");
  const [msg, setMsg] = useState("");
  const [dp, setDp] = useState(profile);

  const [redirect, setRedirect] = useState(null);
  const [redirectLoad, setRedirectLoad] = useState(false)

  
const {theme,setCheck,setTheme, check}= useContext(StoreContext);
 
// const [fbsrc, setFbsrc] = useState(fb);
// const [insrc, setInsrc] = useState(insta);
//  useEffect(()=>{
//    console.log(" check value is ",check);
//  },[theme]);

  const checkUser = async(user) => {
    
     const docRef = doc(db, "users", user.uid);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
       } else {
         // docSnap.data() will be undefined in this case
         await setDoc(doc(db, "users", user.uid), {
           name: user.displayName,
           email: user.email,
           cover: true
         });
       }
       const redirect = localStorage.getItem('redirect')
       localStorage.removeItem('redirect')
       if(redirect) navigate(redirect)
      } catch (error) {
        alert(error)
      }
  }

  useEffect(() => {
    const loc = window.location.href.split("/")
    const last = loc[loc.length -1]
    onAuthStateChanged(auth, (user) => {
      getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    setRedirectLoad(true)
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    checkUser(user)
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
      if (user) {
        setUserName(user.displayName);
        setName(user.displayName);
        setEmail(user.email);
        if (user.photoURL) setDp(user.photoURL);
        setLoading(false);
        if(last[0] === "#"){
          const id = last.slice(1, last.length)
          console.log(id);
          document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        }
      } else {
        setLoading(false);
      }
    });
  }, []);

  // const [active1, setActive1] = useState(false);
  // const [active2, setActive2] = useState(false);
  // const [active3, setActive3] = useState(false);

  // const contentRef1 = useRef(null);
  // const contentRef2 = useRef(null);
  // const contentRef3 = useRef(null);

  // useEffect(() => {
  //   if(contentRef1.current){
  //     contentRef1.current.style.maxHeight = active1
  //     ? `${contentRef1.current.scrollHeight}px`
  //     : "0px";
  //   }
  // }, [contentRef1, active1]);

  // const toggleAccordion1 = () => {
  //   setActive1(!active1);
  // };
  // useEffect(() => {
  //   if(contentRef2.current){
  //     contentRef2.current.style.maxHeight = active2
  //     ? `${contentRef2.current.scrollHeight}px`
  //     : "0px";
  //   }
  // }, [contentRef2, active2]);

  // const toggleAccordion2 = () => {
  //   setActive2(!active2);
  // };
  // useEffect(() => {
  //   if(contentRef3.current){
  //     contentRef3.current.style.maxHeight = active3
  //     ? `${contentRef3.current.scrollHeight}px`
  //     : "0px";
  //   }
  // }, [contentRef3, active3]);

  // const toggleAccordion3 = () => {
  //   setActive3(!active3);
  // };

  const getInTouchSubmit = event =>{
    document.getElementById("subject").value= "";
    alert("Details submited");
    event.preventDefault();
   
  }

  const goToLink = (link) => {
      if (userName) {
        navigate("/menu/dashboard");
      } else {
        setRedirect("/menu/dashboard");
        setSignIn(true);
      }
  };
   if(loading || redirectLoad) 
  return <Spinner other="globel" loading={true} />
 

  return (
    <>
      <HomeNav
        bodyId={'home'}
        dp={dp}
        redirect={redirect}
        setLoading={setLoading}
        userName={userName}
        setSignIn={setSignIn}
        setRedirect={setRedirect}
        signIn={signIn}
        joined={true}
        initial={0}
      />
      
      <div className="home" id="home">
        <div className="hero">
          <h2 >
            Revolutionizing Possibilities: A Showcase of Engineering
            Excellence!
          </h2>
          <div className="btns">
            <button onClick={()=>navigate("/menu/dashboard")}>Get started</button>
          </div>
        </div>
        <div className="main">
          <div className="title">
            <h2>"Engineering the Future: Innovate, Create, and Elevate!"</h2>
            <img src={hp2} alt="" />
          </div>

{/* --------------------------------------------why us ? section--------------------------------------------------------------- */}
<div className="whyus">
            <h2>Why choose us?</h2>
            
             
            <Splide
              tag="section"
              aria-labelledby="My Favorite Images"
              options={{
                speed: 1000,
                pauseOnHover: false,
                type: "loop",
                pauseOnFocus: true,
                keyboard: true,
                gap: ".5rem",
                width: "100%",
                perPage:
                  window.innerWidth <= 426
                    ? 1
                    : window.innerWidth <= 768
                      ? 1.5
                      : window.innerWidth <= 1024
                        ? 2
                        : 3,
                perMove: 1,
                pagination: false,
              }}
            >

              <SplideSlide>
              <div className="why">
                <div className="imgg"> <img src = {why1}/></div>
                <div className="pp"><h4>Empowering  Students</h4></div>
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="why">
              <div className="imgg"> <img src = {why2}/></div>
                <div className="pp"><h4>Today's Need</h4></div>
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="why">
              <div className="imgg"> <img src = {why3}/></div>
                <div className="pp"><h4>Expert-led</h4></div>
              </div>
              
              </SplideSlide>
              <SplideSlide>
              <div className="why">
              <div className="imgg"> <img src = {why4}/></div>
                <div className="pp"><h4>Live Interactions</h4></div>
              </div>
           
              </SplideSlide>
              <SplideSlide>
              <div className="why">
              <div className="imgg"> <img src = {why5}/></div>
                <div className="pp"><h4>Practical Learning</h4></div>
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="why">
              <div className="imgg"> <img src = {why4}/></div>
                <div className="pp"><h4>Awesome Community</h4></div>
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="why">
              <div className="imgg"> <img src = {why6}/></div>
                <div className="pp"><h4>Dynamic Classes</h4></div>
              </div>
              </SplideSlide>
            </Splide>
          </div> 
{/* --------------------------------------------------------------accreditation section------------------------------------------------------- */}

          <div className="accred">
            <h2>Accreditations</h2>
            <div className="accredimgs">
              <img src = {iso} alt=" ISO logo"/>
              <img src= {msme} alt="MSME logo" />
              <img src= {aicte} alt="AICTE logo" />
            </div>

          </div>

          <div className="collab">
            <h2>Collaborations</h2>
            
            
            {/* <div className="collabimgs">
              <div>
              <img src= {collab1} />
              </div>
              
              <div>
              <img src= {collab2} />
              </div>
              <div>
              <img src= {collab3} />
              </div>
              <div>
              <img src= {collab4} />
              </div> */}

              <Splide
              tag="section"
              aria-labelledby="My Favorite Images"
              options={{
                speed: 1000,
                autoplay: true,
                interval: 4000,
                arrows: false,
                pauseOnHover: false,
                type: "loop",
                pauseOnFocus: true,
                keyboard: true,
                gap: ".5rem",
                width: "100%",
                perPage:
                  window.innerWidth <= 426
                    ? 1.2
                    : window.innerWidth <= 768
                      ? 1.5
                      : window.innerWidth <= 1024
                        ? 2
                        : 4,
                perMove: 1,
                pagination: false,
              }}
            >
              <SplideSlide>
              <div className="col">
              <img src= {collab1} />
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="col">
              <img src= {collab2} />
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="col">
              <img src= {collab3} />
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="col">
              <img src= {collab4} />
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="col">
              <img src= {collab5} />
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="col">
              <img src= {collab6} />
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="col">
              <img src= {collab7} />
              </div>
              </SplideSlide>
              <SplideSlide>
              <div className="col">
              <img src= {collab8} />
              </div>
              </SplideSlide>
            </Splide>


             

          </div>

          <div className="slides-testimonials">
            <div id="testimonials"></div>
            <h2>Testimonials</h2>
            <p style={{ marginLeft: "5px" }}>What people say?</p>
            <Splide
              tag="section"
              aria-labelledby="My Favorite Images"
              options={{
                speed: 1000,
                autoplay: true,
                interval: 3400,
                arrows: false,
                pauseOnHover: false,
                type: "loop",
                pauseOnFocus: true,
                keyboard: true,
                gap: ".5rem",
                width: "100%",
                perPage:
                  window.innerWidth <= 426
                    ? 1.2
                    : window.innerWidth <= 768
                      ? 1.5
                      : window.innerWidth <= 1024
                        ? 2
                        : 3,
                perMove: 1,
                pagination: false,
              }}
            >
              <SplideSlide>
                <h3>Greate Events & expierienced Judges</h3>
                <p>
                  I have been to many automotive events in India but what
                  attaracted me most about NEKC is the Experienced Judging
                  Panels. The Judges were very knowledgeable and completely
                  unbaised.
                </p>
                <p>Rahul Kumar</p>
              </SplideSlide>
              <SplideSlide>
                <h3>Greate Events & expierienced Judges</h3>
                <p>
                  I have been to many automotive events in India but what
                  attaracted me most about NEKC is the Experienced Judging
                  Panels. The Judges were very knowledgeable and completely
                  unbaised.
                </p>
                <p>Rahul Kumar</p>
              </SplideSlide>
              <SplideSlide>
                <h3>Greate Events & expierienced Judges</h3>
                <p>
                  I have been to many automotive events in India but what
                  attaracted me most about NEKC is the Experienced Judging
                  Panels. The Judges were very knowledgeable and completely
                  unbaised.
                </p>
                <p>Rahul Kumar</p>
              </SplideSlide>
              <SplideSlide>
                <h3>Greate Events & expierienced Judges</h3>
                <p>
                  I have been to many automotive events in India but what
                  attaracted me most about NEKC is the Experienced Judging
                  Panels. The Judges were very knowledgeable and completely
                  unbaised.
                </p>
                <p>Rahul Kumar</p>
              </SplideSlide>
              <SplideSlide>
                <h3>Greate Events & expierienced Judges</h3>
                <p>
                  I have been to many automotive events in India but what
                  attaracted me most about NEKC is the Experienced Judging
                  Panels. The Judges were very knowledgeable and completely
                  unbaised.
                </p>
                <p>Rahul Kumar</p>
              </SplideSlide>
              <SplideSlide>
                <h3>Greate Events & expierienced Judges</h3>
                <p>
                  I have been to many automotive events in India but what
                  attaracted me most about NEKC is the Experienced Judging
                  Panels. The Judges were very knowledgeable and completely
                  unbaised.
                </p>
                <p>Rahul Kumar</p>
              </SplideSlide>
              <SplideSlide>
                <h3>Greate Events & expierienced Judges</h3>
                <p>
                  I have been to many automotive events in India but what
                  attaracted me most about NEKC is the Experienced Judging
                  Panels. The Judges were very knowledgeable and completely
                  unbaised.
                </p>
                <p>Rahul Kumar</p>
              </SplideSlide>
            </Splide>
          </div>

          <div className="get-in-touch">
            <div id="get-in-touch"></div>
            <h2>Get in Touch</h2>
            <div className="content">
              <div className="container-div contact-us">
                <form action="" onSubmit={getInTouchSubmit}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />


                  <label >Category</label>
                  <select value={category} onChange={(e)=>setCategory(e.target.value)} >
                    <option value="none" selected hidden>Select an Option</option>
                    <option style={{fontSize: "17px"}} value="Group joining">Group joining</option>
                    <option style={{fontSize: "17px"}} value="Courses related">Courses related</option>
                    <option style={{fontSize: "17px"}} value="Events related">Events related</option>
                    <option style={{fontSize: "17px"}} value="University/College collaboration ">University/College collaboration </option>
                    <option style={{fontSize: "17px"}} value="Technical issues ">Technical issues </option>
                    <option style={{fontSize: "17px"}} value="Payment issues">Payment issues</option>
                    <option style={{fontSize: "17px"}} value="Event Sponsors">Event Sponsors</option>
                    <option style={{fontSize: "17px"}} value="Others">Others</option>

                  </select>

                 
                  <label htmlFor="subject">Subject</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something"
                    style={{ height: "200px" }}
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>

                  <input type="submit" value="Submit" />
                </form>
              </div>
              
              <div className="cards">
                <div className="section">
                  <a href="https://www.google.com/search?client=tablet-android-samsung-ss&sxsrf=AB5stBjynXM65Dq5sU2UvOOKChyWUkVHdQ:1691480997949&q=MECHNIDO+-+R%26D&ludocid=5846389838005926368&ibp=gwp;0,7&lsig=AB86z5WDXq3Yu-LuNuV-RN5ncQKQ&kgs=a48d0248b5423189&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/6" target="_blank">
                  <span className="material-symbols-outlined">location_on</span>
                  <div className="details">
                <p>
                294, 1st Floor, Trichy Rd, Vivekanandha Nagar, Singanallur, Tamil Nadu 641005.{" "}
                </p>
                  </div>
                </a>
                </div>
                <div className="section">
                  <span className="material-symbols-outlined">call</span>
                  <div className="details">
                    {/* <p>
                      +91-9047363963 <br /> +91-8220662798
                    </p> */}
                  </div>
                </div>
                <div className="section">
                  <span className="material-symbols-outlined">mail</span>
                  <div className="details">
                    <p style={{ width: "100%", height: "100%" }}>
                      <a
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        href="mailto:support@mseed.in"
                      >
                       support@mseed.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="section">
                  <span className="material-symbols-outlined">group</span>
                  <div className="details">
                    <a
                      href="https://www.facebook.com/IDEATECHEVENTS"
                      target="_blank"
                    >
                      {" "}
                      <img  style={{width: "35px",height:'35px' }} src={check ? fbwhite : fb} alt="" />
                    </a>
                   
                    <a
                      href="https://www.instagram.com/mechnido/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width: "2.0rem" }} src={check ? instawhite : insta} alt="facebook link " />
                      
                      
                    </a>

                    <a
                      href="https://twitter.com/Seed_Mechnido?t=3f1PMqcAsZpphg9EG-baFA&s=09"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width: "2.0rem" }} src={check ? tw : tg} alt="facebook link " />
                      
                      
                    </a>
                    <a
                      href="https://www.linkedin.com/showcase/ideaedu/"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width: "2.0rem" }} src={check ? linkwhite: linkgreen} alt="facebook link " />
                      
                      
                    </a>
                    <a
                      href="https://www.threads.net/@ideatechevents"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width:"30px", height:"30px"  }} src={check ? thw: thg} alt="facebook link " />
                      
                      
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <Footer />
      </div>
    </>
  );
}

export default Home;
