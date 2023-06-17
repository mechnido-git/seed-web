import React, {useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from "../../../images/logo_round.png";
import { Link} from 'react-router-dom';
import ProfileDrop from '../ProfileDrop';
import Drop from '../Drop';
import SignIn from '../../signin/SignIn';
import './homeNav.css'

function HomeNav({bodyId, dp, userName, setLoading, redirect, setSignIn, signIn, links}) {
  
    const [index, setIndex] = useState(null);
  
    const [showDrop, setShowDrop] = useState(false);
    const [profileDrop, setProfileShowDrop] = useState(false);

    const popup = (i) => {
        document.body.classList.add("disable-scroll");
        setIndex(i);
        setSignIn(true);
      };
      const close = () => {
        document.body.classList.remove("disable-scroll");
        setSignIn(false);
      };
    
      const toggle = () => {
        const nav = document.getElementById("nav");
       // if (nav.className === "nav")
         if(!nav.classList.contains('toggle')){
          //nav.className += " toggle";
          nav.classList.add('toggle')
          document.getElementById(bodyId).addEventListener("click", toggle);
        } else {
          //nav.className = "nav";
          nav.classList.remove('toggle')
          document.getElementById(bodyId).removeEventListener("click", toggle);
        }
      };
    
      const toggleOffer = (e) => {
        if (e) e.stopPropagation();
        const nav = document.getElementById("nav");
        nav.classList.toggle("offer");
        setShowDrop(!showDrop);
        if (profileDrop) viewProfile();
      };
    
      const viewProfile = (e) => {
        if (e) e.stopPropagation();
        document.getElementById("account").classList.toggle("clicked");
        setProfileShowDrop(!profileDrop);
        if (showDrop) toggleOffer();
      };

  return (
    <div className="nav" id="nav">
    <div className="left">
      <HashLink to="#home" smooth>
        <img src={logo} id="logo" alt="" />
      </HashLink>
    </div>
    <div className="options">
      <div className="links">
        <ul>
          <li className="link">
            {links[0]}
          </li>
          <li className="link">
            <Link to="#" id="offer" onClick={toggleOffer}>
              Offerings
            </Link>
          </li>
          <li>
          {links[1]}
          </li>
        </ul>
      </div>
    </div>
    <div className="right">
      <div className="account" id="account">
        {userName ? (
          <>
            <img src={dp} referrerPolicy="no-referrer" alt="" onClick={viewProfile} />
            <ProfileDrop
              userName={userName}
              show={profileDrop}
              onClickOutside={viewProfile}
              setLoading={setLoading}
            />
          </>
        ) : (
          <>
            <button onClick={() => popup(false)}>Sign In</button>
            <button onClick={() => popup(true)}>Sign Up</button>
          </>
        )}
      </div>
      <span onClick={toggle} id="menu" class="material-symbols-outlined">
        menu
      </span>
    </div>
    {showDrop && <Drop show={showDrop} onClickOutside={toggleOffer} />}
    {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={close}></div>
          <SignIn index={index} redirect={redirect} />
        </div>
      )}
  </div>
  )
}

export default HomeNav