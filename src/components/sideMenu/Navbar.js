import React, { useContext, useEffect, useState } from "react";
import search from "../../images/search.png";
import "./navbar.css";
import logo from "../../images/seed_logo/Seed.png";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../pages/signin/SignIn";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import Spinner from "../Spinner";
import ProfileDrop from "../../pages/home/ProfileDrop";
import profile from "../../images/profile.png"
import { StoreContext } from "../../store/StoreContext";
import cancellogo from "../../images/cancel_icon.png";
import Themes from "../Themes";
function Navbar({ signIn }) {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(null);
  const [profileDrop, setProfileShowDrop] = useState(false)
  const [dp, setDp] = useState(profile)
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [output, setOutput] = useState(false)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [selected, setSelected] = useState(-1)

  const [getInTouch, setGetInTouch] = useState(false)

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
        setName(user.displayName)
        setEmail(user.email)
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
    if (e.target.value.length > 0) setOutput(true)
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
    if (selected < results.length) {
      if (e.key === "ArrowUp" && selected > 0) {
        setSelected(prev => prev - 1)
      } else if (e.key === "ArrowDown" && selected < results.length - 1) {
        setSelected(prev => prev + 1)
      } else if (e.key === "Enter" && selected >= 0) {
        navigate(`/menu/courses/details/${results[selected].order}`)
        setOutput(false);
        setInput(results[selected].name)
        window.location.reload()
      }
    } else {
      setSelected(-1)
    }

  }

  const go = (e, order) => {
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
        <img src={logo} alt="" onClick={() => navigate("/")} />
      </div>
      <div className="search-bar">
        {/* <img src={search} alt="" onClick={()=>{document.getElementById('search').focus()}} /> */}
        <span class="material-symbols-outlined" onClick={()=>{document.getElementById('search').focus()}}>search</span>
        <div className="input-div">
          <input id="search" onKeyDown={handleKeyDown}  type="text" value={input} onChange={handleSearch} placeholder="Search" />
        </div>
        {results.length !== 0 && output && <div className="results">
          {results.map((item, key) => {
            return <Link className={selected === key && 'selected'} onClick={(e) => go(e, item.order)} key={key} >{item.name}</Link>
          })}
        </div>}
        {input && <span onClick={handleClose} class="material-symbols-outlined">
          close
        </span>}
       
      </div>
      <div className="right">
        <span onClick={() => setGetInTouch(true)} class="material-symbols-outlined">
          forum
        </span>
        <div className="account" id="account">
          {userName ? (
            <>
              <img referrerPolicy="no-referrer" src={dp} alt="" onClick={viewProfile} />
              <ProfileDrop userName={userName} setLoading={setLoading} show={profileDrop} onClickOutside={viewProfile} signOut={logout} />
              <Themes/>
            </>
            
          ) : (
            <>
              <button onClick={() => popup(false)}>Sign In</button>
              <button onClick={() => popup(true)}>Sign Up</button>
              <Themes/>
            </>
          )}
        </div>

      </div>
      {getInTouch && (
        <div className="wrapper-reg">
          <div className="blocker" onClick={() => setGetInTouch(false)}></div>
          <div className="get-in-touch">
          <img className='clbtn' src={cancellogo} onClick={()=>{setGetInTouch(false)}} alt="close button"/>
            <div id="get-in-touch"></div>
            <h2>Get in Touch</h2>
            <div className="content">
              <div class="container-div contact-us">
                <form action="">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  />

                  <label htmlFor="subject">Subject</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something"
                    style={{ height: "200px" }}
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>

                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
