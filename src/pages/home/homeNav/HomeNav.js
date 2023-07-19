import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/seed_logo/Seed.svg";
import logo_joined from "../../../images/seed_logo/Seed Joined.svg";
import { Link, useNavigate } from "react-router-dom";
import ProfileDrop from "../ProfileDrop";
import Drop from "../Drop";
import SignIn from "../../signin/SignIn";
import "./homeNav.css";
import Themes from "../../../components/Themes";
function HomeNav({
  bodyId,
  dp,
  userName,
  setLoading,
  redirect,
  setSignIn,
  signIn,
  setRedirect,
  joined,
  initial
}) {
  const [index, setIndex] = useState(null);

  const [showDrop, setShowDrop] = useState(false);
  const [dropIndex, setDropIndex] = useState(null);
  const [profileDrop, setProfileShowDrop] = useState(false);

  const navRef = useRef();
  const linkRef1 = useRef();
  const linkRef2 = useRef();
  const linkRef3 = useRef();

  const mobile = window.innerWidth < 840 ? true : false;
  const navigate = useNavigate()

  const popup = (i) => {
    document.body.classList.add("disable-scroll");
    setIndex(i);
    console.log(redirect);
    console.log(bodyId !== 'sower');
    if(bodyId !== 'sower') setRedirect("/menu/dashboard")
    setSignIn(true);
  };
  const close = () => {
    document.body.classList.remove("disable-scroll");
    setRedirect(null)
    setSignIn(false);
  };

  const toggle = () => {
    const nav = document.getElementById("nav");
    // if (nav.className === "nav")
    if (!nav.classList.contains("toggle")) {
      //nav.className += " toggle";
      nav.classList.add("toggle");
      document.getElementById(bodyId)?.addEventListener("click", toggle);
    } else {
      //nav.className = "nav";
      nav.classList.remove("toggle");
      document.getElementById(bodyId)?.removeEventListener("click", toggle);
    }
  };

  useEffect(()=>{
    
    if(!showDrop){
      const nav = document.getElementById("nav");
      nav.classList.remove("offer");
    }
  }, [showDrop])

  const toggleOffer = (e) => {
   if (e) e.stopPropagation();
    if ((e? e.target?.dataset.index == dropIndex: true) || (dropIndex === null)) {
      setDropIndex(e? e.target.dataset.index: null);
      if(e? e.target?.dataset.index == dropIndex: true) setDropIndex(null);
      const nav = document.getElementById("nav");
      nav.classList.toggle("offer");
      if(e){
        e.target.parentElement.classList.toggle("offer")
        e.target.parentElement.classList.toggle("highlight")
        
      }else{
        const links = document.querySelectorAll('.nav .link')
        links.forEach(item=>{item.classList.remove("offer"); item.classList.remove("highlight");})
      }
      setShowDrop(!showDrop);
      if(showDrop === false)
      if (profileDrop) viewProfile();
    }else{
      const links = document.querySelectorAll('.nav .link')
      links.forEach(item=>{item.classList.remove("offer"); item.classList.remove("highlight");})
      console.log(links);
      e.target.parentElement.classList.add("offer")
      e.target.parentElement.classList.add("highlight")
      setDropIndex(e.target.dataset.index);
    }
  };

  const viewProfile = (e) => {
    if (e) e.stopPropagation();
    document.getElementById("account").classList.toggle("clicked");
    setProfileShowDrop(!profileDrop);
    if (showDrop) toggleOffer();
  };

  const handleNavClick = (e) => {
    const links = document.querySelectorAll(".nav-link")
    links.forEach(item=>item.classList.remove("highlight"))
    e.target.classList.add("highlight")
  }

  useEffect(()=>{
    const links = document.querySelectorAll('.nav .nav-link')
    links[initial].classList.add('highlight')
    links.forEach(item=>{
      item.addEventListener('click', handleNavClick)
    })

    return () => {
    links.forEach(item=>{
      item.removeEventListener('click', handleNavClick)
    })
    }
  }, [])

  return (
    <div className="nav" id="nav" ref={navRef}>
      <div className="left">
        <Link to="/" smooth>
          <img src={logo_joined} id="logo" alt="" />
        </Link>
      </div>
      <div className="options">
        <div className="links">
          <ul>
            <li className="nav-link" ref={linkRef1}>
            <Link to="/">
                Home
              </Link>
            </li>
            <li className="nav-link" ref={linkRef2}>
            <Link to="/about">
                About
              </Link>
            </li>
            <li className="link">
              <Link to="#" id="offer" data-index={0} onMouseEnter={!mobile? !showDrop? toggleOffer: dropIndex != 0? toggleOffer: null : null} onClick={!mobile? toggleOffer : ()=>navigate("/menu/courses")}>
                Courses
              </Link>
            </li>
            <li className="link" >
              <Link to="#" id="offer" data-index={1} onMouseEnter={!mobile? !showDrop? toggleOffer: dropIndex != 1? toggleOffer: null : null} onClick={!mobile? toggleOffer : ()=>navigate("/menu/events")}>
                Events
              </Link>
            </li>
           
            <li className="nav-link" ref={linkRef3}>
            <Link to="/sower">
                Become a Sower
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="account" id="account">
          {userName ? (
            <>
              <img
                src={dp}
                referrerPolicy="no-referrer"
                alt=""
                onClick={viewProfile}
              />
              <ProfileDrop
                userName={userName}
                show={profileDrop}
                onClickOutside={viewProfile}
                setLoading={setLoading}
              />
              <Themes/>
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
      {showDrop && (
        <Drop
          navRef={navRef}
          linkRef1={linkRef1}
          linkRef2={linkRef2}
          linkRef3={linkRef3}
          dropIndex={dropIndex}
          show={showDrop}
          onClickOutside={toggleOffer}
          redirect={redirect}
          setRedirect={setRedirect} setSignIn={setSignIn} 
        />
      )}
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={close}></div>
          <SignIn index={index} redirect={redirect} setSignIn={setSignIn} setRedirect={setRedirect}/>
        </div>
      )}
    </div>
  );
}

export default HomeNav;
