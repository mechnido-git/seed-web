import React, { useContext, useEffect, useState, useRef } from "react";
import "./eventIndex.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from "../../images/slide3.png";
import poster from "../../images/aa7.jpg";
import kart from "../../images/kart.jpg";
import trophy from "../../images/trophy.png";
import medal from "../../images/medal.png";

import "@splidejs/react-splide/css";
import { useLocation, useOutletContext } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "../../components/Spinner";
import soon from "../../images/soon.jpg";
import { useCountdown } from "../../hooks/useCountDown";
import Footer from "../../components/footer/Footer";

function RegisterInfo({ date, data }) {
  const [eventDate, setEventDate] = useState(new Date(date));

  const [days, hours, minutes, seconds] = useCountdown(eventDate);

  return (
    <SplideSlide>
      <div className="time-container">
        <h4>Registration Ends in</h4>
        <div className="time-div">
          <div className="days-div">
            <h3>Days</h3>
            <p>{days <= 0 ? 0 : days}</p>
          </div>
          <div className="hour-div">
            <h3>Hours</h3>
            <p>{hours <= 0 ? 0 : hours}</p>
          </div>
          <div className="minute-div">
            <h3>Minutes</h3>
            <p>{minutes <= 0 ? 0 : minutes}</p>
          </div>
          <div className="second-div">
            <h3>Seconds</h3>
            <p>{seconds <= 0 ? 0 : seconds}</p>
          </div>
        </div>
      </div>
      <div className="prize-div">
        <h4>Prize Category</h4>
        <div className="prize-list">
          <ul>
            <li>
              Overall winner <img src={medal} />
            </li>
            <li>
              Overall runner up <img src={medal} />
            </li>
            <li>
              Best design quality award <img src={medal} />
            </li>
            <li>
              Best innovation award <img src={medal} />
            </li>
            <li>
              Best strategy award <img src={medal} />
            </li>
            <li>
              Best business plan <img src={medal} />
            </li>
          </ul>
        </div>
      </div>
    </SplideSlide>
  );
}

function EventIndex() {
  const [signIn, setSignIn] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [user, setUser] = useState(false);
  const [uid, setUid] = useState("");
  const imgWidth = window.innerWidth < 1024 ? "100%" : "200px";
  const gap = window.innerWidth < 1024 ? "1rem" : "4rem";
  const { register, setRegister } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState(null);
  const [yes, setYes] = useState(false);

  let eventDate = new Date("5/27/2023");
  let currentDate = new Date();

  const [days, hours, minutes, seconds] = useCountdown(eventDate);
  const eventList = ["Event One", "Event Two", "Event Three"];

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user.displayName);
      if (user) setUid(user.uid);
    });
    const temp = [];
    getDocs(collection(db, "events"))
      .then((snaps) => {
        snaps.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
        setEvents(temp);
      })
      .catch()
      .finally(() => {
        setLoading(false);
        const loc = window.location.href.split("/");
        const last = loc[loc.length - 1];
        if (last[0] === "#") {
          const id = last.slice(1, last.length);
          console.log(id);
          document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        }
      });
  }, []);
  const ref = useRef();
  const ref2 = useRef();

  const getRegister = () => {
    let flag = false;
    console.log(events);
    events[currentEvent].enrolled?.forEach((item) => {
      if (item === uid) flag = true;
    });
    console.log(flag);
    if (flag) return alert("Alredy registered");
    setRegister(true);
  };

  return (
    <>
      <div className="events-index">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <div className="slides">
              {events && (
                <>
                  <div id="current"></div>
                  <Splide
                    ref={ref}
                    onMove={(splide, prev, next) => {
                      setCurrentEvent(splide.index);
                      console.log(prev, splide.index, next);
                      console.log(
                        ref2.current.splide.Components.Move.move(
                          splide.index,
                          splide.index,
                          splide.index + 1
                        )
                      );
                      //ref2.current.splide.Components.Contro.move(splide.index)
                    }}
                    tag="section"
                    aria-labelledby="My Favorite Images"
                    options={{
                      type: "loop",
                      speed: 1000,
                      pauseOnHover: false,
                      pauseOnFocus: true,
                      keyboard: true,
                      gap: "1rem",
                      width: "100%",
                      pagination: window.innerWidth < 770 ? false : true,
                    }}
                  >
                    {events.map((item) => {
                      return (
                        <SplideSlide>
                          <img
                            style={{ objectFit: "contain", width: "100%" }}
                            src={image}
                            alt="Image 1"
                          />
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </>
              )}

              <div className="btns">
                <button
                  onClick={() => (user ? getRegister() : alert("login first"))}
                >
                  Register
                </button>
              </div>
            </div>

            <div className="register-info">
              <Splide
                ref={ref2}
                tag="section"
                aria-labelledby="My Favorite Images"
                options={{
                  speed: 1000,
                  gap: "1rem",
                  arrows: false,
                  pagination: false,
                  width: "100%",
                  type: "loop",
                }}
                onMove={(splide, prev, next) => {
                  setCurrentEvent(splide.index);
                  console.log(prev, splide.index, next);
                  console.log(
                    ref.current.splide.Components.Move.move(
                      splide.index,
                      splide.index,
                      splide.index + 1
                    )
                  );
                  //ref2.current.splide.Components.Contro.move(splide.index)
                }}
              >
                {events.map((item, i) => {
                  const date = ["5/25/2023", "5/26/2023", "5/27/2023"];
                  return <RegisterInfo data={item} key={i} date={date[i]} />;
                })}
              </Splide>
            </div>

            <div className="slides-gallery">
              <div id="gallery"></div>
              <h2>Gallery</h2>

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
                  <img
                    style={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={kart}
                    alt="Image 1"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    style={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={kart}
                    alt="Image 1"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    style={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={kart}
                    alt="Image 1"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    style={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={kart}
                    alt="Image 2"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    style={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={kart}
                    alt="Image 2"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    style={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={kart}
                    alt="Image 2"
                  />
                </SplideSlide>
                <SplideSlide>
                  <img
                    style={{
                      objectFit: "contain",
                      width: "100%",
                    }}
                    src={kart}
                    alt="Image 2"
                  />
                </SplideSlide>
              </Splide>
            </div>
            <div className="slides-sponsors">
              <div id="upcoming"></div>
              <h2>Upcoming Events</h2>

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
                      ? 3
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
                  <img src={soon} style={{ width: "100px" }} />
                </SplideSlide>
                <SplideSlide>
                  <img src={soon} style={{ width: "100px" }} />
                </SplideSlide>
                <SplideSlide>
                  <img src={soon} style={{ width: "100px" }} />
                </SplideSlide>
                <SplideSlide>
                  <img src={soon} style={{ width: "100px" }} />
                </SplideSlide>
                <SplideSlide>
                  <img src={soon} style={{ width: "100px" }} />
                </SplideSlide>
                <SplideSlide>
                  <img src={soon} style={{ width: "100px" }} />
                </SplideSlide>
                <SplideSlide>
                  <img src={soon} style={{ width: "100px" }} />
                </SplideSlide>
              </Splide>
            </div>
            <Footer />
          </>
        )}
      </div>
      {register && (
        <div className="wrapper-reg">
          <div className="blocker" onClick={() => setRegister(false)}></div>
          <RegisterForm event={events[currentEvent]} />
        </div>
      )}
    </>
  );
}

export default EventIndex;
