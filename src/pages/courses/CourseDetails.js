import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { StoreContext } from "../../store/StoreContext";
import img from "../../images/courses.jpg";
import side from "../../images/side.jpg";
import cert from "../../images/cert.jpg";

import "./details.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { HashLink } from "react-router-hash-link";
import Enroll from "../payment/Enroll";

function CourseDetails() {
  const { index } = useParams();
  const loc = useLocation();

  const otherCourses = [
    {
      name: "Course 1",
      price: 200
    },
    {
      name: "Course 2",
      price: 200
    },
    {
      name: "Course 3",
      price: 200
    },
    {
      name: "Course 4",
      price: 200
    },
    {
      name: "Course 5",
      price: 200
    },
    {
      name: "Course 6",
      price: 200
    },
    {
      name: "Course 7",
      price: 200
    },
    {
      name: "Course 8",
      price: 200
    },
  ]

  const { courseList, courses, userId } = useContext(StoreContext);

  console.log(courseList[index]);
  const [buy, setbuy] = useState(false)
  const [data, setData] = useState(courseList[index]);

  const enroll = () => {
    //navigate(`/menu/courses/enroll/${currentSlide}`)
    let flag = false
    if(userId){
      courses[index].enrolled?.forEach(item=>{
        if(item.userId === userId ) flag = true
      })
      if(flag) return window.alert("Alredy enrolled")
      setbuy(true)

    }else{
      window.alert("Sign in First")
    }
  } 

  const showSubs = (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("show");
  };

  return (
    <div className="course-details">
      <div className="hero">
        <div className="title">
          <h1>
            The Flagship <br />
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
                    <span>{item.type}</span>: <span style={{fontWeight: 'bold'}}>{item.price}₹</span>{" "}
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
            <button>Enroll Now</button>
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
      <div className="metrics">
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
      </div>
      <div className="feedback">
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
          {data.feedback.map((item, i) => (
            <SplideSlide key={i}>
              <div className="info">
                <img src={item.dp} alt="" />
                <h4>{item.name}</h4>
              </div>
              <p>"{item.msg}"</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="other-courses">
        <h2>Enroll Now!!</h2>
        <div className="content">
          <h3>Individual courses</h3>
          <h3></h3>
          <h3>Offer pack</h3>
        <div className="individual">
          {otherCourses.map((item, i) => <div className="card" key={i}>
            <h4>{item.name}</h4>
            <span>₹{item.price}</span>
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

    </div>
  );
}

export default CourseDetails;
