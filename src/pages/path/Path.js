import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./path.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";


function Path() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/home");
    });
  }, []);

  return (
    <div className="path-div">
      <div className="paths">
        <div className="path">
        <Link className="course-path" to="/menu/courses">
        </Link>
          <h2>Courses</h2>
        </div>
        <div className="path">
        <Link className="event-path" to="/menu/events">
        </Link>
          <h2>Events</h2>
        </div>
      </div>
    </div>
  );
}

export default Path;
