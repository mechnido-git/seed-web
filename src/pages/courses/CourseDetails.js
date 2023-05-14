import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { StoreContext } from "../../store/StoreContext";
import img from "../../images/courses.jpg";
import side from "../../images/side.jpg";
import cert from "../../images/cert.jpg"

import "./details.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function CourseDetails() {
  const { index } = useParams();

  const { courseList } = useContext(StoreContext);

  console.log(courseList[index]);
  const [data, setData] = useState(courseList[index]);

  const showSubs = (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("show");
  };

  return (
    <div className="course-details">
      <div className="hero">
        <div className="title">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <button>Explore</button>
        </div>
        <div className="course">
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
      <div className="explore">
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
        <h2>Certificate <span class="material-symbols-outlined">workspace_premium</span></h2>
        <h3>{data.certificate.title}</h3>
        <div className="content">
            <ul>{data.certificate.sub.map((item, i)=><li key={i}>{item}</li>)}</ul>
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
    </div>
  );
}

export default CourseDetails;
