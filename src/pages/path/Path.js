import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./path.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { StoreContext } from "../../store/StoreContext";
import courseImg from "../../images/path2.jpg"
import eventImg from "../../images/path1.jpg"
import { doc, setDoc } from "firebase/firestore";


function Path({ user }) {
  const navigate = useNavigate();

  const { userName } = useContext(StoreContext);

  useEffect(() => {
    document.querySelector('.dashboard').classList.add("disable-scroll");
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/home");
    });
  }, []);

  const goCourse = async() => {
    navigate("/menu/courses");
    const cityRef = doc(db, 'users', user.uid);
    await setDoc(cityRef, { cover: false }, { merge: true });
    window.location.reload()
  }

  const goEvents = async() => {
    navigate("/menu/events");
    const cityRef = doc(db, 'users', user.uid);
    await setDoc(cityRef, { cover: false }, { merge: true });
    window.location.reload()
  }

  return (
    <div className="path-div">
      <div className="intro">
        <p>Hi {userName}. We are happy to have you on board</p>
        <h2>You might have to start with any of this</h2>
      </div>
      <div className="paths">
        <div className="path">
          <div className="course-path" >
            <img src={courseImg} alt="" />
            <h2>Elevate Your Skills with Our Courses</h2>
            <p> Explore a diverse spectrum of courses on Seed Learning Hub. Each course is designed to empower you
               with practical skills, deep insights, and a transformative learning experience. Whether you're looking to expand your horizons,
               enhance your career prospects, or simply pursue a passion, you're in the right place.</p>
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
            <h2>Ignite Innovation with Our Exciting Events! </h2>
           <p>Immerse yourself in a world of innovation and learning through our upcoming events – Design Challenge, Hackathon, and Ideathon
             – are tailor-made for aspiring innovators like you
              Our events are designed to inspire, empower, and connect learners, educators, and tech enthusiasts alike..</p>
          </div>
          <button onClick={goEvents} >Events</button>
        </div>
      </div>
      {/* <button id="skip" onClick={skip}>Skip</button> */}
    </div>
  );
}

export default Path;
