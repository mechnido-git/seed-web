import React, { useEffect, useRef, useState } from "react";
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
import sponsor from "../../images/sponsor.jpg";
import HomeNav from "./homeNav/HomeNav";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { doc, getDoc, setDoc } from "firebase/firestore";

function Home() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [dp, setDp] = useState(profile);

  const [redirect, setRedirect] = useState(null);
  const [redirectLoad, setRedirectLoad] = useState(false)

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
          <h2>
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
            <img src={intro} alt="" />
          </div>
          <div className="slides-achievements">
            <div id="achievements"></div>
            <h2>Achievements</h2>

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
                <img src={trophy} style={{ width: "100px" }} />
                Achievement #1
              </SplideSlide>
              <SplideSlide>
                <img src={trophy} style={{ width: "100px" }} />
                Achievement #2
              </SplideSlide>
              <SplideSlide>
                <img src={trophy} style={{ width: "100px" }} />
                Achievement #3
              </SplideSlide>
              <SplideSlide>
                <img src={trophy} style={{ width: "100px" }} />
                Achievement #4
              </SplideSlide>
              <SplideSlide>
                <img src={trophy} style={{ width: "100px" }} />
                Achievement #5
              </SplideSlide>
              <SplideSlide>
                <img src={trophy} style={{ width: "100px" }} />
                Achievement #6
              </SplideSlide>
              <SplideSlide>
                <img src={trophy} style={{ width: "100px" }} />
                Achievement #7
              </SplideSlide>
            </Splide>
          </div>
          <div className="slides-testimonials">
            <div id="testimonials"></div>
            <h2>Testimonials</h2>
            <p style={{ marginLeft: "5px" }}>What people say</p>
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
          <div className="slides-sponsors">
            <div id="sponsors"></div>
            <h2>Sponsors</h2>

            <Splide
              tag="section"
              aria-labelledby="My Favorite Images"
              options={{
                speed: 800,
                autoplay: true,
                interval: 2500,
                pauseOnHover: false,
                type: "loop",
                pauseOnFocus: true,
                keyboard: true,
                gap: ".5rem",
                width: "100%",
                perPage:
                  window.innerWidth <= 426
                    ? 2.5
                    : window.innerWidth <= 768
                      ? 3.5
                      : window.innerWidth <= 1024
                        ? 4
                        : 5,
                perMove: 1,
                pagination: false,
              }}
            >
              <SplideSlide>
                <img src={sponsor} style={{ width: "100px" }} />
              </SplideSlide>
              <SplideSlide>
                <img src={sponsor} style={{ width: "100px" }} />
              </SplideSlide>
              <SplideSlide>
                <img src={sponsor} style={{ width: "100px" }} />
              </SplideSlide>
              <SplideSlide>
                <img src={sponsor} style={{ width: "100px" }} />
              </SplideSlide>
              <SplideSlide>
                <img src={sponsor} style={{ width: "100px" }} />
              </SplideSlide>
              <SplideSlide>
                <img src={sponsor} style={{ width: "100px" }} />
              </SplideSlide>
              <SplideSlide>
                <img src={sponsor} style={{ width: "100px" }} />
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
                  <span className="material-symbols-outlined">location_on</span>
                  <div className="details">
                    <p>
                      5/4b Lakshmi Vinayagar Kovil Land, 8th Street, Ganapathy
                      Coimbatore, Tamil Nadu 641006{" "}
                    </p>
                  </div>
                </div>
                <div className="section">
                  <span className="material-symbols-outlined">call</span>
                  <div className="details">
                    <p>
                      +91-9047363963 <br /> +91-8220662798
                    </p>
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
                        href="mailto:info@mechnido.com"
                      >
                        info@mechnido.com
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
                      <img style={{ width: "2.5rem" }} src={fb} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/mechnido/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1"
                      target="_blank"
                    >
                      {" "}
                      <img style={{ width: "2.5rem" }} src={insta} alt="" />
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
