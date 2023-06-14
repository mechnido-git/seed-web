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

function Navbar({ signIn }) {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(null);
  const [profileDrop, setProfileShowDrop] = useState(false)
  const [dp, setDp] = useState(profile)
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [output, setOutput] = useState(false)

  const [selected, setSelected] = useState(-1)

  const navigate = useNavigate()

  const toggle = () => {
    document.getElementById("menu-options").classList.toggle("disable");
    document.getElementById("index").classList.toggle("index-toggle");
    document.getElementById("min-menu").classList.toggle("disable");
    document.getElementById("side-menu").classList.toggle("border");
    document.getElementById("toggle").classList.toggle("clicked");
  };

  const { setUserId, courses } = useContext(StoreContext)

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
      if (user) {
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
    if (e) e.stopPropagation()
    document.getElementById('account').classList.toggle('clicked')
    setProfileShowDrop(!profileDrop)
  }

  const handleSearch = (e) => {
    setInput(e.target.value)
    setSelected(-1)
    if(e.target.value.length > 0) setOutput(true)
    if (courses.length !== 0) {
      let value = e.target.value.toLowerCase();
      const items = courses.filter(item => {
        return value && item && item.name && item.name.toLowerCase().includes(value)
      })
      console.log(items)
      setResults(items)
    }
  }

  const handleKeyDown = (e) => {
    console.log(selected);
    if(selected < results.length){
      if(e.key === "ArrowUp" && selected > 0){
        setSelected(prev=> prev -1)
      }else if(e.key === "ArrowDown" && selected < results.length -1){
        setSelected(prev => prev + 1)
      }else if(e.key === "Enter" && selected >= 0){
        navigate(`/menu/courses/details/${results[selected].order}`)
        setOutput(false);
        setInput(results[selected].name)
        window.location.reload()
      }
    }else{
      setSelected(-1)
    }

  }

  const go = (e, order)=>{
    e.preventDefault()
    navigate(`/menu/courses/details/${order}`)

        window.location.reload()
  }


  const handleClose = () => {
    setOutput(false);
    setInput('');
    setSelected(-1)
  }

  return (
    <div className="navbar">
      {loading && <Spinner other={"globel"} loading={loading} />}
      <div className="left">
        <span onClick={toggle} id="toggle" className={`material-symbols-outlined ${window.innerWidth > 650 && 'clicked'}`}>
          menu
        </span>
        <img src={logo} alt="" />
      </div>
      <div className="search-bar">
        <img src={search} alt="" />
        <div className="input-div">
          <input onKeyDown={handleKeyDown} type="text" value={input} onChange={handleSearch} placeholder="Search" />
        </div>
        {results.length !== 0 && output && <div className="results">
          {results.map((item, key) => {
            return <Link className={selected === key && 'selected'} onClick={(e)=>go(e, item.order)} key={key} >{item.name}</Link>
          })}
        </div>}
        {input && <span onClick={handleClose} class="material-symbols-outlined">
          close
        </span>}
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
