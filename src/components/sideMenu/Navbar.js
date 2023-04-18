import React, { useEffect, useState } from "react";
import search from "../../images/search.png";
import "./navbar.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import SignIn from "../../pages/signin/SignIn";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import Spinner from "../Spinner";

function Navbar() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true)

  const toggle = () => {
    document.getElementById("menu-options").classList.toggle("disable");
    document.getElementById("index").classList.toggle("index-toggle");
    document.getElementById("min-menu").classList.toggle("disable");
    document.getElementById("side-menu").classList.toggle("border");
  };

  const logout = () => {
    setLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.reload()
    }).catch((error) => {
      // An error happened.
      setLoading(false)
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserName(user.displayName);
      setLoading(false)
    });
  }, []);

  return (
    <div className="navbar">
      {loading && <Spinner loading={loading} />}
      <div className="left">
        <span onClick={toggle} id="toggle" class="material-symbols-outlined">
          menu
        </span>
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="search-bar">
        <img src={search} alt="" />
        <div className="input-div">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="btns">
        {userName ? (
          <>
            <h4>{userName}</h4>
            <button onClick={logout}>Log out</button>
          </>
        ) : (
          <button onClick={() => setSignIn(true)}>Sign in</button>
        )}
      </div>
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setSignIn(false)}></div>
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default Navbar;
