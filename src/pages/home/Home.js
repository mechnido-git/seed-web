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
import fb from '../../images/icons8-facebook-48.png'
import insta from '../../images/icons8-instagram-48.png'

function Home() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
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
    navigate(link);
  };

  const popup = () => {
    document.body.classList.add("disable-scroll");
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
                <HashLink to="/home/#about" smooth>
                  About
                </HashLink>
              </li>
              <li className="link">
                <HashLink to="/home/#achievements" smooth>
                  Achievements
                </HashLink>
              </li>
              <li className="link">
                <HashLink to="/home/#testimonials" smooth>
                  Testimonials
                </HashLink>
              </li>
              <li className="link">
                <HashLink to="/home/#faq" smooth>
                  FAQ
                </HashLink>
              </li>
              <li className="link">
                <HashLink to="/home/#get-in-touch" smooth>
                  Get in touch
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="account">
            {userName ? (
              <>
                <h4>{userName}</h4>
                <button onClick={logout}>Sign out</button>
              </>
            ) : (
              <button onClick={popup}>Sign in</button>
            )}
          </div>
        </div>
        <span onClick={toggle} class="material-symbols-outlined">
          menu
        </span>
      </div>
      <div className="home" id="home">
        <div className="hero">
          <div className="btns">
            <button onClick={() => goToLink("/menu/courses")}>Courses</button>
            <button onClick={() => goToLink("/menu/events")}>Events</button>
          </div>
        </div>
        <div className="main">
          <div className="about">
            <div id="about"></div>
            <div className="left">
              <h2>
                About INNOVATIVE DESIGN AND ENGINEERING ANALYSIS (I.D.E.A)
              </h2>
              <p>
                Innovative design and engineering analysis is a group of events
                presented by M/S MECHNIDO, comprising of various national level
                events which acts as a platform for engineers to apply and
                enhance their engineering skills in real world applications. It
                promotes the idea of developing innovative, robust structures
                designed with sound engineering practices.{" "}
              </p>
              <p>
                All the events included under brand name I.D.E.A. are exclusive
                events and cannot be associated with other events conducted by
                M/S MECHNIDO.{" "}
              </p>
              <h2>Mission</h2>
              <p>
                Our mission is to play key role in forging ideas of young
                technocrats, to create a platform for prospective engineers to
                perform and excel their technical skills, to strive hard to
                ensure that each student in our family evolves to their best
                potential.
              </p>
              <h2>Vision</h2>
              <p>
                Our primary vision is to motivate budding engineers to develop
                creative ideas, implement them effectively and mould them to
                face the obstacles. We visualize in creating a platform which
                forms a strong technical base for them.{" "}
              </p>
            </div>
            <div className="right">
              <img src={logo} />
            </div>
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
                    placeholder="Your name.."
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />

                  <label htmlFor="subject">Subject</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: "200px" }}
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
                  <h3>Address</h3>
                </div>
                <div className="section">
                  <span class="material-symbols-outlined">call</span>
                  <div className="details">
                    <p>
                      +91-9047363963 <br /> +91-8220662798
                    </p>
                  </div>
                  <h3>Phone</h3>
                </div>
                <div className="section">
                  <span class="material-symbols-outlined">mail</span>
                  <div className="details">
                    {" "}
                    <p>info@mechnido.com</p>
                  </div>
                  <h3>Email</h3>
                </div>
                <div className="section">
                  <span class="material-symbols-outlined">group</span>
                  <div className="details">
                   <a href="https://www.facebook.com/IDEATECHEVENTS" target="_blank"> <img src={fb} alt="" /></a>
                   <a href="https://www.instagram.com/mechnido/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1" target="_blank"> <img src={insta} alt="" /></a>
                  </div>
                  <h3>Socials</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={close}></div>
          <SignIn />
        </div>
      )}
    </>
  );
}

export default Home;
