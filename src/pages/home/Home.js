import React, { useEffect, useRef, useState, useContext } from "react";
import "./home.css";
import trophy from "../../images/trophy.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; 
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import profile from "../../images/profile.png";
import HomeNav from "./homeNav/HomeNav";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { doc, getDoc, setDoc } from "firebase/firestore";
import sower from "../../images/gsower.png"
import { StoreContext } from "../../store/StoreContext";
import msme from "../../images/msme.png";
import aicte from "../../images/aicte (1).png";
import iso from "../../images/iso.png";
import collab1 from "../../images/collab1.png";
import collab2 from "../../images/collab2.png";
import collab3 from "../../images/collab3.png";
import collab4 from "../../images/collab4.png";
import collab5 from "../../images/collab5.png";
import collab6 from "../../images/collab6.png";
import collab7 from "../../images/collab7.png";
import collab8 from "../../images/collab8.png";
import hp2 from "../../images/homepage 2.png";
import ApplyNow from "../sower/ApplyNow";
// import hp1 from "../../images/homepage 1.png";
// import p1 from "../../images/p1.jpg";
// import p3 from "../../images/p3.jpg";
import d1 from "../../images/dp/dp1.png";
import d2 from "../../images/dp/dp2.png";
import d3 from "../../images/dp/dp3.png";
import d4 from "../../images/dp/dp4.png";
import d5 from "../../images/dp/dp5.png";
import d6 from "../../images/dp/dp6.png";
import d7 from "../../images/dp/dp7.png";
import d8 from "../../images/dp/dp8.png";
import d9 from "../../images/dp/dp9.png";
import d10 from "../../images/dp/dp11.png";
import d11 from "../../images/dp/dp12.png";
import d12 from "../../images/dp/dp13.png";
import grp from "../../images/group.svg";
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
  const [userId, setUserId] = useState(null)
  const [redirect, setRedirect] = useState(null);
  const [redirectLoad, setRedirectLoad] = useState(false);
  const [apply, setApply] = useState(false);
  const { theme, setCheck, setTheme, check } = useContext(StoreContext);

  // const [fbsrc, setFbsrc] = useState(fb);
  // const [insrc, setInsrc] = useState(insta);
  //  useEffect(()=>{
  //    console.log(" check value is ",check);
  //  },[theme]);

  const checkUser = async (user) => {
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
          cover: true,
        });
      }
      const redirect = localStorage.getItem("redirect");
      localStorage.removeItem("redirect");
      if (redirect) navigate(redirect);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const loc = window.location.href.split("/");
    const last = loc[loc.length - 1];
    onAuthStateChanged(auth, (user) => {
      getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          setRedirectLoad(true);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          checkUser(user);
        })
        .catch((error) => {
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
        setUserId(user.uid)
        if (user.photoURL) setDp(user.photoURL);
        setLoading(false);
        if (last[0] === "#") {
          const id = last.slice(1, last.length);
          // console.log(id);
          document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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

  const applyNow = () =>{
    if(userId){
      
      setApply(true)
    }else{
      alert("Log in first")
    }
  }
  const test=[
    {
      head: "Engaging and Informative Sessions!",
      text:"Kudos to the instructors of the Design Thinking course! Thereal-life case studies discussed during the live sessions have truly expanded my understanding of the subject. This platform's approach to incorporating interactive sessions has given me a chance to apply the principles in real-time scenarios, enhancing my problem-solving skills",
      name:"PRAVEEN D"
    },
    {
      head: "Interactive Learning at Its Best!",
      text:" I'm loving the live interaction sessions on this platform. It's like being in a real classroom, but even better! The sowers engage with us, answer our questions, and make learning so much more exciting.",
      name:"ABIRAMI R"
    },
    {
      head: "Personalized Learning Recommendations",
      text:"Seed's personalized course recommendations based on my interests and learning history have helped me discover new subjects I'm passionate about.",
      name:"VADIVEL S"
    },
    {
      head: "Mastering Concepts Made Easy",
      text:" The live sessions for Supply Chain Management were an eye-opener. Real-time case studies and discussions on supply chain challenges enriched our understanding. The platform's live interaction feature made complex concepts feel accessible",
      name:"RAJKUMAR P"
    },
    {
      head: "Learning with a Community Feel",
      text:"Kudos to the instructors of the Design Thinking course! Thereal-life case studies discussed during the live sessions have truly expanded my understanding of the subject. This platform's approach to incorporating interactive sessions has given me a chance to apply the principles in real-time scenarios, enhancing my problem-solving skills",
      name:"PRAVEEN D"
    },
    {
      head: "Responsive Customer Support",
      text:" Whenever I've had questions or faced technical issues, Seed's customer support team has been incredibly responsive and helpful.",
      name:"SARAN M"
    },
    {
      head: "User-Friendly Learning Platform",
      text:" I'm not the most tech-savvy person, but using this platform was a breeze. The interface is intuitive, and everything is well-organized. From finding courses to tracking my progress, the platform makes learning straightforward.",
      name:"MANICKAM J"
    },
    {
      head: "A Hub for Lifelong Learners.",
      text:" The content was comprehensive, excellent, very thorough, and  suitable for people of all skill levels because we had the chance to implement what we learned immediately. such a great session, really comprehensive.",
      name:"JEYANTH P"
    },
    {
      head: "Engaging and Informative Sessions!",
      text:" I'm amazed by how connected I feel to my classmates through these live sessions. We collaborate, discuss, and learn together just like we used to in the physical classroom. The platform has truly created a virtual learning community.",
      name:"ELANGO"
    },
    {
      head: "Engaging and Informative Sessions!",
      text:" I'm amazed by how connected I feel to my classmates through these live sessions. We collaborate, discuss, and learn together just like we used to in the physical classroom. The platform has truly created a virtual learning community.",
      name:"JEYANTH P"
    },
    {
      head: "Engaging and Informative Sessions!",
      text:" I'm amazed by how connected I feel to my classmates through these live sessions. We collaborate, discuss, and learn together just like we used to in the physical classroom. The platform has truly created a virtual learning community.",
      name:"JEYANTH P"
    },
  ]

  const getInTouchSubmit = (event) => {
    document.getElementById("subject").value = "";
    alert("Details submited");
    event.preventDefault();
  };
  const goToLink = (link) => {
    if (userName) {
      navigate("/menu/dashboard");
    } else {
      setRedirect("/menu/dashboard");
      setSignIn(true);
    }
  };
  if (loading || redirectLoad) return <Spinner other="globel" loading={true} />;

  return (
    <>
      <HomeNav
        bodyId={"home"}
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
            Revolutionizing Possibilities: A Showcase of Engineering Excellence!
          </h2>
          <div className="btns">
            <button onClick={() => navigate("/menu/dashboard")}>
              Get Started
            </button>
          </div>
        </div>
        <div className="main">
          <div className="accredation">
            <div>
              <h1>Accreditations</h1>
            </div>
            <div className="img">
              <div>
              <img src={iso} alt="ISO"/>
              <p>Approved by ISO</p>
              </div>
             <div>
              <img src={msme} alt="MSME"/>
             <p>Approved by MSME</p>
             </div>
             <div> <img src={aicte} alt="AICTE" />
             <p>Internship Partner</p></div>
              
              
             
            </div>
          </div>

          {/* ------------------------------------------------section 2 ----------------------------------------------------- */}

          <div className="title">
            <div className="titleleft">
            <h1>Engineering the Future: Innovate, Create, and Elevate!</h1>
            <div>
              "The best way to predict the Future is to create it ". With Technology we an achieve the unimaginable.   
            </div>
            </div>


            <div className="titleright">
            <img src={hp2} alt=""/>
            </div> 
          </div>
          {/* --------------------------------------------------------------whyus------------------------------------------------------- */}

          <div className="whyus">
              <div className="whyusleft">
                <img src={grp} alt="why us "/>
              </div>
              <div className="whyusright">
                <h1>Why Choose Us?</h1>
                <div> The possibilities of the sky and the realm of knowledge are limitless,</div>
                 <div> Embark on a journey of self transformation and unleash your creative potential.
                </div>
                  <div className="whyusbtns">
                  <div onClick={() => navigate("/menu/courses")}>EXPLORE COURSES</div>
                  <div onClick={() => navigate("/menu/events")}>EXPLORE EVENTS</div>
                  </div>
              </div>
          </div>
          {/* ----------------------------------------------------------- testimonials---------------------------------------------------------------- */}
            <div className="testimonialsection"> 
              <h1>Testimonials</h1>
              <div className="say">What people say?</div>
            <div className="testimonial_content">

              <div className="testimage">
              <img className="currentimg" src={d1}/>
              <div>
                <img src={d1}/>
                <img src={d2}/>
                <img src={d3}/>
                <img src={d4}/>
              </div>
              </div>
              <div className="left-arrow">
              </div>

           
            <div className="testsection">
            <Splide
                tag="section"
                aria-labelledby="My Images"
               
                options={{
                  speed: 1500,
                  arrows:false,
                  autoplay: true,
                  interval: 3400,
                  pauseOnHover: true,
                  type: "loop",                
                  keyboard: true,
                  gap: "1rem",
                  pagination:false
                }}
              >
                {test.map((item, i)=>{
                  return<SplideSlide key={i}>
                    <div className="test_content">
                    <h2>{item.head}</h2>
                    <p className="text">{item.text}</p>
                    <p className="name">{item.name}</p>
                    </div>
                  </SplideSlide>
                })}


              </Splide>
            </div>
            </div>

            </div>
          {/* -----------------------------------------------------------WHO ARE WE?------------------------------------------------------------------------- */}
              
              <div className="whoarewe">
              <h1>Who are we?</h1>
                <div className="who">
                  <div className="whoLeft">
                    <h2>About SEED - AN EDTECH ORGANISATION</h2>
                    <div>
                    Mechnido's Seed Learning Hub is a dynamic and innovative platform that
                     serves as an integral part of MECHNIDO, dedicated to providing a comprehensive 
                     learning solution for individuals across diverse segments .Our platform offers a wide <span onClick={()=>navigate('/about/#about')}>Know More &gt;</span>
                    </div>

                  </div>
                  <div className="whoRight">
                  <h2> About Organizing Team - MECHNIDO</h2>
                    <div>
                    M/S MECHNIDO was Established in 2018 in Coimbatore, Tamil Nadu, M/S Mechnido is a
                     promising enterprise in the electric vehicle (EV) industry.
               With a strong commitment to driving innovation and contributing to a sustainable future, <span onClick={()=>navigate('/about/#about')}>Know More &gt;</span>
                    </div>
                  </div>

              </div>

              </div>
               



          {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* -----------------------------------------Collaborations------------------------------------------------------------------------------------------------ */}
          <div className="collab">
            <h1>Collaborations</h1>
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
                  <img src={collab1} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="col">
                  <img src={collab2} alt=""  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="col">
                  <img src={collab3} alt=""  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="col">
                  <img src={collab4} alt=""  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="col">
                  <img src={collab5} alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="col">
                  <img src={collab6} alt=""  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="col">
                  <img src={collab7} alt=""  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="col">
                  <img src={collab8} alt=""  />
                </div>
              </SplideSlide>
            </Splide>
          </div>


          {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* <div className="slides-testimonials">
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
                <img src={p1} alt="" />
                <h3>Engaging and Informative Sessions!</h3>
                <p>
                  Kudos to the instructors of the Design Thinking course! The
                  real-life case studies discussed during the live sessions have
                  truly expanded my understanding of the subject. This
                  platform's approach to incorporating interactive sessions has
                  given me a chance to apply the principles in real-time
                  scenarios, enhancing my problem-solving skills
                </p>
                <p>PRAVEEN D</p>
              </SplideSlide>
              <SplideSlide>
                <img src={d1} alt="" />
                <h3>Interactive Learning at Its Best!</h3>
                <p>
                  I'm loving the live interaction sessions on this platform.
                  It's like being in a real classroom, but even better! The
                  sowers engage with us, answer our questions, and make learning
                  so much more exciting.
                </p>
                <p>ABIRAMI R</p>
              </SplideSlide>
              <SplideSlide>
                <img src={d2} alt="" />
                <h3>Personalized Learning Recommendations</h3>
                <p>
                  Seed's personalized course recommendations based on my
                  interests and learning history have helped me discover new
                  subjects I'm passionate about.
                </p>
                <p>VADIVEL S</p>
              </SplideSlide>
              <SplideSlide>
                <img src={d3} alt="" />
                <h3>Mastering Concepts Made Easy</h3>
                <p>
                  The live sessions for Supply Chain Management were an
                  eye-opener. Real-time case studies and discussions on supply
                  chain challenges enriched our understanding. The platform's
                  live interaction feature made complex concepts feel accessible
                </p>
                <p>RAJKUMAR P</p>
              </SplideSlide>
              <SplideSlide>
                <img src={p3} alt="" />
                <h3>Learning with a Community Feel</h3>
                <p>
                  I'm amazed by how connected I feel to my classmates through
                  these live sessions. We collaborate, discuss, and learn
                  together just like we used to in the physical classroom. The
                  platform has truly created a virtual learning community."
                </p>
                <p>JEYANTH P</p>
              </SplideSlide>





              
              <SplideSlide>
                <img src={d4} alt="" />
                <h3>Responsive Customer Support</h3>
                <p>
                  Whenever I've had questions or faced technical issues, Seed's
                  customer support team has been incredibly responsive and
                  helpful.
                </p>
                <p>SARAN M</p>
              </SplideSlide>
              <SplideSlide>
                <img src={d5} alt="" />
                <h3>User-Friendly Learning Platform</h3>
                <p>
                  I'm not the most tech-savvy person, but using this platform
                  was a breeze. The interface is intuitive, and everything is
                  well-organized. From finding courses to tracking my progress,
                  the platform makes learning straightforward.
                </p>
                <p>MANICKAM J</p>
              </SplideSlide>

              <SplideSlide>
                <img src={d6} alt="" />
                <h3>A Hub for Lifelong Learners.</h3>
                <p>
                  "The content was comprehensive, excellent, very thorough, and
                  suitable for people of all skill levels because we had the
                  chance to implement what we learned immediately. such a great
                  session, really comprehensive."
                </p>
                <p>ELANGO</p>
              </SplideSlide>




              <SplideSlide>
                <img src={d7} alt="" />
                <h3>Clear and Concise Explanations</h3>
                <p>
                  The explanations provided on courses are clear and to the
                  point. I appreciate how easily I can grasp complex concepts
                  through the well-structured content.
                </p>
                <p>DIWAHAR M</p>
              </SplideSlide>
              <SplideSlide>
                <img src={d8} alt="" />
                <h3>Interactive Learning at Its Best!</h3>
                <p>
                  I'm loving the live interaction sessions on this platform.
                  It's like being in a real classroom, but even better! The
                  sowers engage with us, answer our questions, and make learning
                  so much more exciting.
                </p>
                <p>MOHAMMED SHERIFF</p>
              </SplideSlide>
              <SplideSlide>
                <img src={d9} alt="" />
                <h3>Progress Tracking and Motivation</h3>
                <p>
                  Seeing my progress tracked in real-time is incredibly
                  motivating. The platform's dashboard shows me how far I've
                  come, the topics I've mastered, and the ones I still need to
                  work on. This visual representation of my journey keeps me
                  motivated and determined to keep pushing forward.
                </p>
                <p>DIVAKAR </p>
              </SplideSlide>
              <SplideSlide>
                <img src={d10} alt="" />
                <h3>Supportive Community of Learners</h3>
                <p>
                  The community forum is a hidden gem. Connecting with fellow
                  learners worldwide has broadened my perspective. We exchange
                  ideas, help each other with challenging concepts, and even
                  collaborate on projects. It's a supportive ecosystem
                </p>
                <p>BARATHI S A</p>
              </SplideSlide>
              <SplideSlide>
                <img src={d11} alt="" />
                <h3>Empowering and Convenient</h3>
                <p>
                  I'm amazed by the convenience Seed Learning Platform offers.
                  As a student, having access to top-notch educational resources
                  at my fingertips has been a game-changer.
                </p>
                <p>JOSHITH J S</p>
              </SplideSlide>

              <SplideSlide>
                <img src={d12} alt="" />
                <h3>Affordable and Worth It!</h3>
                <p>
                  As a student on a budget, Seed E Learning Platform's
                  affordable pricing was a breath of fresh air. The quality of
                  the courses far exceeded my expectations given the cost. It's
                  a fantastic option for anyone looking to learn without
                  breaking the bank.
                </p>
                <p>ARUL VEL MURUGAN</p>
              </SplideSlide>
            </Splide>
          </div> */}


            {/* -----------------------------------------------------------------------------------Sower --------------------------------------------------------------------------------------------- */}

              <div className="sowersection">
                <div className="sowerleft">
                <h1>Become a sower</h1>
                <div>Enlighten the world with the radiance of your wisdom.</div>
                 <div> Are you an expert in your field, eager to inspire and empower learners?
                </div>
                <div className="btnsec">
                <button onClick={applyNow}>APPLY NOW</button>
                  <div onClick={()=> navigate('/sower/#sower')}>KNOW MORE &gt;</div>
                </div> 
                 
                </div>
                <div className="sowerright">
                  <img src={sower} alt=""/>
                </div>
              </div>


          {/* ------------------------------------------------------------------------------------------Get In touch section--------------------------------------------------------------------------------------------- */}

          <div className="get-in-touch">
            <div id="get-in-touch"></div>
           
            <div className="content">
            <h2>Get in Touch</h2>
              <div className="container-div contact-us">
                <form className="footer_form" action="" onSubmit={getInTouchSubmit}>
                  <div>

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

                  <label>Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="none" selected hidden>
                      Choose a category
                    </option>
                    <option style={{ fontSize: "17px" }} value="Group joining">
                      Group joining
                    </option>
                    <option
                      style={{ fontSize: "17px" }}
                      value="Courses related"
                    >
                      Courses related
                    </option>
                    <option style={{ fontSize: "17px" }} value="Events related">
                      Events related
                    </option>
                    <option
                      style={{ fontSize: "17px" }}
                      value="University/College collaboration "
                    >
                      University/College collaboration{" "}
                    </option>
                    <option
                      style={{ fontSize: "17px" }}
                      value="Technical issues "
                    >
                      Technical issues{" "}
                    </option>
                    <option style={{ fontSize: "17px" }} value="Payment issues">
                      Payment issues
                    </option>
                    <option style={{ fontSize: "17px" }} value="Event Sponsors">
                      Event Sponsors
                    </option>
                    <option style={{ fontSize: "17px" }} value="Others">
                      Others
                    </option>
                  </select>

                  </div>
                 

                  {/* <div className="cards">
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
               </div>  */}

                  <div>
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------Footer Section-------------------------------------------------------------------------------------------------------------------------- */}
        <Footer />
        {apply && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setApply(false)}></div>
          <ApplyNow name={userName} uid={userId} setLoading={setLoading}  />
        </div>
      )}
      </div>
    </>
  );
}

export default Home;
