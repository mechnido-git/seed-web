import React, { useContext, useEffect, useState, useRef } from "react";
import "./eventIndex.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from "../../images/slide3.png";
import kart from "../../images/kart.jpg";
import medal from "../../images/medal.png";
import sponsor from "../../images/sponsor.jpg";
import "@splidejs/react-splide/css";
import { useNavigate, useOutletContext } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "../../components/Spinner";
import soon from "../../images/soon.jpg";
import { useCountdown } from "../../hooks/useCountDown";
import Footer from "../../components/footer/Footer";
import ImageLoader from "../../components/imageLoader/ImageLoader";
import { StoreContext } from "../../store/StoreContext";

function RegisterInfo({ date, data }) {
  const [eventDate, setEventDate] = useState(new Date(date));

  const [days, hours, minutes, seconds] = useCountdown(eventDate);

  return (
    <SplideSlide>
      <div className="prize-div">
        <h3>Overall Cash Prize: INR{" "}{data.overAllCash}</h3>
        <h3>Registration Fee: INR{" "}{data.regFeeTxt} (Including 18% GST)</h3>

      </div>
      <div className="sample">
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

      </div>
    </SplideSlide>
  );
}

function EventIndex() {
  const [currentEvent, setCurrentEvent] = useState(0);

  const [uid, setUid] = useState("");
  const { register, setRegister } = useOutletContext();
  const [loading, setLoading] = useState(true);

  const { setSection, userId, events, upcomingEvents, gallery, setUserName, userName, setUserEmail, userEmail } = useContext(StoreContext);
  // console.log(list);
  setSection(2);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserName(user.displayName);
      if (user) setUid(user.uid);
      if (user) setUserEmail(user.email);
      console.log(gallery);
      setLoading(false)
    });

  }, []);
  const ref = useRef();
  const ref2 = useRef();

  const getRegister = () => {
    let flag = false;
    // console.log(temp);
    // console.log(uid);
    events[currentEvent].enrolled_arr?.forEach((item) => {
      if (item === uid) flag = true;
    });
    // console.log(flag);
    if (flag) return alert("Alredy registered");
    setRegister(true);
  };

  useEffect(() => {
    if (!loading) {
      const loc = window.location.href.split("/");
      const last = loc[loc.length - 1];
      if (last[0] === "#") {
        const id = last.slice(1, last.length);
        console.log(id);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading]);

  const viewDetails = () => {
    navigate(`/menu/events/details/${currentEvent}`);
  };

  const checkEnroll = (item) => {
    let flag = false;
    item.enrolled?.forEach((item) => {
      console.log(item);
      if (item.userId === userId) flag = true;
    });
    return flag;
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
                      speed: 1500,
                      autoplay: true,
                      interval: 3400,
                      pauseOnHover: true,
                      type: "loop",

                      pauseOnFocus: true,
                      keyboard: true,
                      gap: "1rem",
                      width: "100%",
                      pagination: true,
                      arrows: window.innerWidth < 770 ? false : true,
                    }}
                  >
                    {events.map((item, i) => {
                      let enrolled = checkEnroll(item);
                      console.log(item);
                      return (
                        <SplideSlide key={i}>
                          <ImageLoader
                            src={item.poster}
                            style={{ objectFit: "contain", width: "100%" }}
                          />
                          <div className="btns">
                            <button
                              className={enrolled ? "disabledbtn" : ""}
                              disabled={enrolled}
                              onClick={getRegister}
                            >
                              {enrolled ? "Enrolled " : "Enroll"}
                            </button>
                            <button onClick={viewDetails}>Know More</button>
                          </div>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </>
              )}
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
                  fixedWidth: "100%"
                }}
                style={{ width: "100%" }}
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
                  return (
                    <RegisterInfo
                      data={item}
                      key={i}
                      date={item.register_end}
                    />
                  );
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
                {gallery[0].images.map((item, i) => {
                  console.log("slide "+i);
                  return <SplideSlide>
                    {/* <ImageLoader src={item} style={{ objectFit: "contain", width: "100%" }} /> */}
                    <img src={item} style={{ objectFit: "contain", width: "100%" }} alt="" />
                  </SplideSlide>

})}
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
                  arrows: false,
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
                {events[currentEvent].sponsors.map((item => (
                  <SplideSlide>
                    <img src={item} style={{ width: "100px" }} />
                  </SplideSlide>
                )))}
              </Splide>
            </div>
            <div className="slides-sponsors upcoming-events">
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
                  arrows: false,
                  perPage:
                    window.innerWidth <= 426
                      ? 2
                      : window.innerWidth <= 768
                        ? 2.5
                        : window.innerWidth <= 1024
                          ? 3
                          : 4,
                  perMove: 1,
                  pagination: false,
                }}
              >
                {upcomingEvents.map((item) => (
                  <SplideSlide>
                    <img src={item.poster} style={{ width: "100%" }} />
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <Footer />
          </>
        )}
      </div>
      {register && (
        <div className="wrapper-reg">
          <div className="blocker"></div>
          <RegisterForm
            event={events[currentEvent]}
            userName={userName}
            email={userEmail}
            setRegister={setRegister}
          />
        </div>
      )}
    </>
  );
}

export default EventIndex;
