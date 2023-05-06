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
import profile from "../../images/profile.png"
import Drop from "./Drop";
import ProfileDrop from "./ProfileDrop";
import intro from "../../images/intro.jpg"

function Home() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [dp, setDp] = useState(profile)

  const [index, setIndex] = useState(null);
  const [redirect, setRedirect] = useState(null);

  const [showDrop, setShowDrop] = useState(false)
  const [profileDrop, setProfileShowDrop] = useState(false)


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

  const goToLink = (link) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/menu/path");
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

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
        setLoading(false);
      });
  };

  const toggle = () => {
    const nav = document.getElementById("nav");
    const links = document.querySelectorAll(".links");
    if (nav.className === "nav") {
      nav.className += " toggle";
      document.getElementById("home").addEventListener("click", toggle);
      links.forEach((link) => link.addEventListener("click", toggle));
    } else {
      nav.className = "nav";
      document.getElementById("home").removeEventListener("click", toggle);
      links.forEach((link) => link.removeEventListener("click", toggle));
    }
  };

  const toggleOffer = (e) => {
     if(e) e.stopPropagation()
    const nav = document.getElementById("nav");
    nav.classList.toggle("offer");
    setShowDrop(!showDrop)
    if(profileDrop) viewProfile()
    console.log(e);
  };



  const viewProfile = (e) => {
    if(e) e.stopPropagation()
    document.getElementById('account').classList.toggle('clicked')
    setProfileShowDrop(!profileDrop)
    if(showDrop) toggleOffer()
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      <div className="nav" id="nav">
        <HashLink to="/home/#home" smooth>
          <img src={logo} alt="" />
        </HashLink>
        <div className="options">
          <div className="links">
            <ul>
              <li className="link">
                <Link to="#" id="offer" onClick={toggleOffer}>
                  Offerings
                </Link>
              </li>
              <li className="link">
                <Link to="/about" target="_blank">
                  About
                </Link>
              </li>
              <li className="link">
                <Link to="/faq" target="_blank">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="account" id="account">
          {userName ? (
            <>
              <img src={dp} alt="" onClick={viewProfile} />
              <ProfileDrop userName={userName} show={profileDrop} onClickOutside={viewProfile} signOut={logout} />
            </>
          ) : (
            <>
              <button onClick={() => popup(false)}>Sign In</button>
              <button onClick={() => popup(true)}>Sign Up</button>
            </>
          )}
        </div>
        <span onClick={toggle} class="material-symbols-outlined">
          menu
        </span>
            <Drop show={showDrop} onClickOutside={toggleOffer} />
      </div>
      <div className="home" id="home">
        <div className="hero">
          <div className="btns">
            <button onClick={() => goToLink("/menu/courses")}>
              Get started
            </button>
          </div>
            <h2>"Revolutionizing Possibilities: A Showcase of Engineering Excellence!"</h2>
        </div>
        <div className="main">
          <div className="title">
            <img src={intro} alt="" />
            <h2>"Engineering the Future: Innovate, Create, and Elevate!"</h2>
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
