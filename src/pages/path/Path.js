import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./path.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { StoreContext } from "../../store/StoreContext";
import courseImg from "../../images/path2.jpg"
import eventImg from "../../images/path1.jpg"


function Path({skip}) {
  const navigate = useNavigate();

  const { userName } = useContext(StoreContext);

  useEffect(() => {
    document.querySelector('.dashboard').classList.add("disable-scroll");
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/home");
    });
  }, []);

  const goCourse = () => {
    navigate("/menu/courses");
   // localStorage.setItem('cover', true)
    //window.location.reload()
  }
  
  const goEvents = () => {
    navigate("/menu/events");
    //localStorage.setItem('cover', true)
    //window.location.reload()
  }

  return (
    <div className="path-div">
          <div className="intro">
            <p>Hi {userName}. We are happy to have you on board</p>
            <h2>You should start with  any  of this</h2>
          </div>
      <div className="paths">
        <div className="path">
        <div className="course-path" >
          <img src={courseImg} alt="" />
          <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
          <button onClick={goCourse}>Courses</button>
        </div>
        <div className="divider">
        <div className="circle">
          OR
        </div>
        </div>
        <div className="path">
        <div className="event-path">
          <img src={eventImg} alt="" />
          <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
          <button onClick={goEvents} >Events</button>
        </div>
      </div>
      {/* <button id="skip" onClick={skip}>Skip</button> */}
    </div>
  );
}

export default Path;
