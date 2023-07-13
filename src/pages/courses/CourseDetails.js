import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../store/StoreContext";
import img from "../../images/courses.jpg";
import side from "../../images/side.jpg";
import cert from "../../images/cert.jpg";

import "./details.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { HashLink } from "react-router-hash-link";
import Enroll from "../payment/Enroll";
import Footer from "../../components/footer/Footer";

function CourseDetails() {
  const { courseList, courses, userId, setSection, setCourseIndex } = useContext(StoreContext);
  const { index } = useParams();
  setCourseIndex(index)
  setSection(3)
  const loc = useLocation();
  const navigate = useNavigate()


  console.log(courseList[index]);
  const [buy, setbuy] = useState(false)
  const [data, setData] = useState(courseList[index]);

  const enroll = () => {
    //navigate(`/menu/courses/enroll/${currentSlide}`)
    let flag = false
    if (userId) {
      courses[index].enrolled?.forEach(item => {
        if (item.userId === userId) flag = true
      })
      if (flag) return window.alert("Alredy enrolled")
      setbuy(true)

    } else {
      window.alert("Sign in First")
    }
  }

  const showSubs = (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("show");
  };

  const getCours = (index) => {
    navigate(`/menu/courses/details/${index}`)
    window.location.reload()
  }

  useEffect(()=>{
      const loc = window.location.href.split("/")
      const last = loc[loc.length -1]
      if(last[0] === "#"){
        const id = last.slice(1, last.length)
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
      }
  }, [])

  return (
    <div className="course-details" >
      <div className="hero" id="intro">
        <div className="title">
          <h1>
            {data.flag ? <>The Flagship <br /></> : ''}
            {data.name}
          </h1>
          <p>{data.description}</p>
          <HashLink to={`${loc.pathname}/#explore`} smooth>
            Explore
          </HashLink>
        </div>
        <div className="course">
          <div className="card">
            <img src={img} alt="" />
            <button onClick={enroll}>Enroll Now</button>
            <hr />
            <div className="body">
              <h3>
                <span class="material-symbols-outlined">schedule</span> Duration
              </h3>
              <ul>
                {data.duration.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3>
                <span class="material-symbols-outlined">currency_rupee</span>Fee
                Structure
              </h3>
              <ul>
                {data.fee.map((item, i) => (
                  <li className="fee-li" key={i}>
                    <span>{item.type}</span>: <span style={{ fontWeight: 'bold' }}>{item.price}₹</span>{" "}
                  </li>
                ))}
              </ul>
              <h3>
                <span class="material-symbols-outlined">workspace_premium</span>
                Course certificate
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div id="about"></div>
        <h2>About the Course</h2>
        <div className="details">
          <div className="left">
            {data.description_L.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className="right">
            <img src={side} alt="" />
          </div>
        </div>
      </div>
      <div className="explore" id="explore">
        <div id="syllabus"></div>
        <h2>Explore the course</h2>
        <div className="content">
          <div className="topics">
            {data.schedule.map((item, i) => (
              <div key={i} className="main">
                <h3>{item.name}</h3>
                <ol>
                  {item.topics.map((item, i) => (
                    <li key={i} className="topic">
                      <h4 onClick={showSubs}>{item.name}</h4>
                      <ul>
                        {item.SUB.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="card">
            <img src={img} alt="" />
            <button onClick={enroll} >Enroll Now</button>
            <hr />
            <div className="body">
              <h3>
                <span class="material-symbols-outlined">schedule</span> Duration
              </h3>
              <ul>
                {data.duration.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3>
                <span class="material-symbols-outlined">currency_rupee</span>Fee
                Structure
              </h3>
              <ul>
                {data.fee.map((item, i) => (
                  <li className="fee-li" key={i}>
                    <span>{item.type}</span>: <span>{item.price}₹</span>{" "}
                  </li>
                ))}
              </ul>
              <h3>
                <span class="material-symbols-outlined">workspace_premium</span>
                Course certificate
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="certificate">
        <div id="certificate"></div>
        <h2>
          Certificate
          <span class="material-symbols-outlined">workspace_premium</span>
        </h2>
        <div className="content">
          <div className="details">
            <h3>{data.certificate.title}</h3>
            <ul>
              {data.certificate.sub.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <img src={data.certificate.imgURL} alt="" />
        </div>
      </div>
      {data.metrics && <div className="metrics">
        <div id="metrics"></div>
        <h2>Our Metrics</h2>
        <div className="content">
          <div className="section">
            <span class="material-symbols-outlined">groups</span>
            <h4>{data.metrics.students}+</h4>
            <p>Students participated</p>
          </div>
          <div className="section">
            <span class="material-symbols-outlined">record_voice_over</span>
            <h4>{data.metrics.hours} Hours</h4>
            <p>of live Interaction</p>
          </div>
          <div className="section">
            <span class="material-symbols-outlined">groups</span>
            <h4>{data.metrics.students}+</h4>
            <p>Students participated</p>
          </div>
        </div>
      </div>}
      {data.feedback && <div className="feedback">
        <div id="feedbacks"></div>
        <h2>Feedbacks</h2>
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
          {data.feedback?.map((item, i) => (
            <SplideSlide key={i}>
              <div className="info">
                <img src={item.dp} alt="" />
                <h4>{item.name}</h4>
              </div>
              <p>"{item.msg}"</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>}
      <div className="other-courses">
        <h2>Enroll Now!!</h2>
        <div className="content">
          <h3 id="individual">Individual courses</h3>
          <h3 id="divider" ></h3>
          <h3 id="pack" >Offer pack</h3>
          <div className="individual">
            {courses?.map((item, i) => <div className="card" onClick={()=>getCours(item.order)} key={i}>
              <h4>
                {item.flag ? <>The Flagship <br /></> : ''}
                {item.name}
              </h4>
              <span>₹{item.fee[0].price}</span>
            </div>)}
          </div>
          <div className="divider">
            <div className="circle">
              OR
            </div>
          </div>
          <div className="pack">
            <h3>OFFER PACK</h3>
          </div>
        </div>
      </div>
      {buy && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setbuy(false)}></div>
          <Enroll index={index} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default CourseDetails;
