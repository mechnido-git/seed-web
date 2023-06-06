import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../images/logo_round.png";
import "./home.css";
import trophy from "../../images/trophy.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import SignIn from "../signin/SignIn";
import { StoreContext } from "../../store/StoreContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import { HashLink } from "react-router-hash-link";
import { FiPlus } from "react-icons/fi";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import Drop from "./Drop";
import ProfileDrop from "./ProfileDrop";
import intro from "../../images/intro.jpg";
import sponsor from "../../images/sponsor.jpg";

function Home() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [dp, setDp] = useState(profile);

  const [index, setIndex] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const [showDrop, setShowDrop] = useState(false);
  const [profileDrop, setProfileShowDrop] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        setName(user.displayName);
        setEmail(user.email);
        if (user.photoURL) setDp(user.photoURL);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };
  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };
  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  const goToLink = (link) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/menu/home");
      } else {
        setRedirect(true);
        setSignIn(true);
      }
    });
  };

  const popup = (i) => {
    document.body.classList.add("disable-scroll");
    setIndex(i);
    setSignIn(true);
  };
  const close = () => {
    document.body.classList.remove("disable-scroll");
    setSignIn(false);
  };

  const toggle = () => {
    const nav = document.getElementById("nav");
    if (nav.className === "nav") {
      nav.className += " toggle";
      document.getElementById("home").addEventListener("click", toggle);
    } else {
      nav.className = "nav";
      document.getElementById("home").removeEventListener("click", toggle);
    }
  };

  const toggleOffer = (e) => {
    if (e) e.stopPropagation();
    const nav = document.getElementById("nav");
    nav.classList.toggle("offer");
    setShowDrop(!showDrop);
    if (profileDrop) viewProfile();
  };

  const viewProfile = (e) => {
    if (e) e.stopPropagation();
    document.getElementById("account").classList.toggle("clicked");
    setProfileShowDrop(!profileDrop);
    if (showDrop) toggleOffer();
  };

  return (
    <>
      {loading && <Spinner other="globel" loading={loading} />}
      <div className="nav" id="nav">
        <div className="left">
          <HashLink to="#home" smooth>
            <img src={logo} alt="" />
          </HashLink>
        </div>
        <div className="options">
            <div className="links">
              <ul>
                <li className="link">
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li className="link">
                  <Link to="#" id="offer" onClick={toggleOffer}>
                    Offerings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        <div className="right">
          <div className="account" id="account">
            {userName ? (
              <>
                <img src={dp} referrerPolicy="no-referrer" alt="" onClick={viewProfile} />
                <ProfileDrop
                  userName={userName}
                  show={profileDrop}
                  onClickOutside={viewProfile}
                  setLoading={setLoading}
                />
              </>
            ) : (
              <>
                <button onClick={() => popup(false)}>Sign In</button>
                <button onClick={() => popup(true)}>Sign Up</button>
              </>
            )}
          </div>
          <span onClick={toggle} id="menu" class="material-symbols-outlined">
            menu
          </span>
        </div>
          {showDrop && <Drop show={showDrop} onClickOutside={toggleOffer} />}
      </div>
      <div className="home" id="home">
        <div className="hero">
          <h2>
            "Revolutionizing Possibilities: A Showcase of Engineering
            Excellence!"
          </h2>
          <div className="btns">
            <button onClick={goToLink}>Get started</button>
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
          <div className="faq">
            <div id="faq"></div>
            <h2>FAQ</h2>
            <div>
              <button
                className={`question-section ${active1}`}
                onClick={toggleAccordion1}
              >
                <div>
                  <div className="question-align">
                    <h4 className="question-style">
                      Why do you like web developemnt
                    </h4>
                    <FiPlus
                      className={
                        active1 ? `question-icon rotate` : `question-icon`
                      }
                    />
                  </div>
                  <div
                    ref={contentRef1}
                    className={active1 ? `answer answer-divider` : `answer`}
                  >
                    <p>Because I love coding</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                className={`question-section ${active2}`}
                onClick={toggleAccordion2}
              >
                <div>
                  <div className="question-align">
                    <h4 className="question-style">
                      Why do you like web developemnt
                    </h4>
                    <FiPlus
                      className={
                        active2 ? `question-icon rotate` : `question-icon`
                      }
                    />
                  </div>
                  <div
                    ref={contentRef2}
                    className={active2 ? `answer answer-divider` : `answer`}
                  >
                    <p>Because I love coding</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                className={`question-section ${active3}`}
                onClick={toggleAccordion3}
              >
                <div>
                  <div className="question-align">
                    <h4 className="question-style">
                      Why do you like web developemnt
                    </h4>
                    <FiPlus
                      className={
                        active3 ? `question-icon rotate` : `question-icon`
                      }
                    />
                  </div>
                  <div
                    ref={contentRef3}
                    className={active3 ? `answer answer-divider` : `answer`}
                  >
                    <p>Because I love coding</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="get-in-touch">
            <div id="get-in-touch"></div>
            <h2>Get in Touch</h2>
            <div className="content">
              <div class="container-div contact-us">
                <form action="">
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
                  <span class="material-symbols-outlined">location_on</span>
                  <div className="details">
                    <p>
                      5/4b Lakshmi Vinayagar Kovil Land, 8th Street, Ganapathy
                      Coimbatore, Tamil Nadu 641006{" "}
                    </p>
                  </div>
                </div>
                <div className="section">
                  <span class="material-symbols-outlined">call</span>
                  <div className="details">
                    <p>
                      +91-9047363963 <br /> +91-8220662798
                    </p>
                  </div>
                </div>
                <div className="section">
                  <span class="material-symbols-outlined">mail</span>
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
                  <span class="material-symbols-outlined">group</span>
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
        <div className="footer">
          <div className="links">
            <div className="section">
              <h3>Cources</h3>
              <ul>
                <li>
                  <a href="#">Trending Now</a>
                </li>
                <li>
                  <a href="#">Team Picks</a>
                </li>
              </ul>
            </div>

            <div className="section">
              <h3>Events</h3>
              <ul>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Upcoming Events</a>
                </li>
                <li>
                  <a href="#">Sponsors</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>©Mechnido Pvt. Ltd. All Rights Reserved</p>
      </div>
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={close}></div>
          <SignIn index={index} redirect={redirect} />
        </div>
      )}
    </>
  );
}

export default Home;
