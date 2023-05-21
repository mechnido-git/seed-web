import React, { useContext, useEffect, useState } from "react";
import search from "../../images/search.png";
import "./navbar.css";
import logo from "../../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../pages/signin/SignIn";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import Spinner from "../Spinner";
import ProfileDrop from "../../pages/home/ProfileDrop";
import profile from "../../images/profile.png"
import { StoreContext } from "../../store/StoreContext";

function Navbar({signIn}) {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(null);
  const [profileDrop, setProfileShowDrop] = useState(false)
  const [dp, setDp] = useState(profile)

  const navigate = useNavigate()

  const toggle = () => {
    document.getElementById("menu-options").classList.toggle("disable");
    document.getElementById("index").classList.toggle("index-toggle");
    document.getElementById("min-menu").classList.toggle("disable");
    document.getElementById("side-menu").classList.toggle("border");
  };

  const { setUserId } = useContext(StoreContext)

  const logout = () => {
    setLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
      
      console.log('hikk');
    }).catch((error) => {
      // An error happened.
      setLoading(false)
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user){
        setUserName(user.displayName)
        setUserId(user.uid)
        if (user.photoURL) setDp(user.photoURL);
      };
      setLoading(false)
    });
  }, []);

  const popup = (i) => {
    document.body.classList.add("disable-scroll");
    setIndex(i);
    signIn(true);
  };
  const viewProfile = (e) => {
    if(e) e.stopPropagation()
    document.getElementById('account').classList.toggle('clicked')
    setProfileShowDrop(!profileDrop)
  }


  return (
    <div className="navbar">
      {loading && <Spinner other={"globel"} loading={loading} />}
      <div className="left">
        <span onClick={toggle} id="toggle" class="material-symbols-outlined">
          menu
        </span>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="search-bar">
        <img src={search} alt="" />
        <div className="input-div">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
      <span id="bell" class="material-symbols-outlined">
            campaign
          </span>
      <div className="account" id="account">
          {userName ? (
            <>
              <img referrerPolicy="no-referrer" src={dp} alt="" onClick={viewProfile} />
              <ProfileDrop userName={userName} setLoading={setLoading} show={profileDrop} onClickOutside={viewProfile} signOut={logout} />
            </>
          ) : (
            <>
              <button onClick={() => popup(false)}>Sign In</button>
              <button onClick={() => popup(true)}>Sign Up</button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default Navbar;
