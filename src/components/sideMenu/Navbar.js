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
  const [category, setCategory] = useState("Category")

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
      console.log( " these are items",items)
      setResults(items)
    }
  }

  const getInTouchSubmit = (event) => {
    document.getElementById("subject").value = "";
    alert("Details submited");
    event.preventDefault();
  };

  const handleKeyDown = (e) => {
    // console.log(selected);
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

          <div className="git">
            <div id="git"></div>
           
            <div className="content">
            <h2>Get in Touch</h2>
              <div className="container-div contact-us">
                <form action="" onSubmit={getInTouchSubmit}>
                  <div>
 
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

                  <label>Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="none" selected hidden>
                      Choose a category
                    </option>
                    <option style={{ fontSize: "17px" }} value="Group joining">
                      Group joining
                    </option>
                    <option
                      style={{ fontSize: "17px" }}
                      value="Courses related"
                    >
                      Courses related
                    </option>
                    <option style={{ fontSize: "17px" }} value="Events related">
                      Events related
                    </option>
                    <option
                      style={{ fontSize: "17px" }}
                      value="University/College collaboration "
                    >
                      University/College collaboration{" "}
                    </option>
                    <option
                      style={{ fontSize: "17px" }}
                      value="Technical issues "
                    >
                      Technical issues{" "}
                    </option>
                    <option style={{ fontSize: "17px" }} value="Payment issues">
                      Payment issues
                    </option>
                    <option style={{ fontSize: "17px" }} value="Event Sponsors">
                      Event Sponsors
                    </option>
                    <option style={{ fontSize: "17px" }} value="Others">
                      Others
                    </option>
                  </select>

                  </div>
                 

                  {/* <div className="cards">
                <div className="section">
                  <a href="https://www.google.com/search?client=tablet-android-samsung-ss&sxsrf=AB5stBjynXM65Dq5sU2UvOOKChyWUkVHdQ:1691480997949&q=MECHNIDO+-+R%26D&ludocid=5846389838005926368&ibp=gwp;0,7&lsig=AB86z5WDXq3Yu-LuNuV-RN5ncQKQ&kgs=a48d0248b5423189&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/6" target="_blank">
                  <span className="material-symbols-outlined">location_on</span>
                  <div className="details">
                <p>
                294, 1st Floor, Trichy Rd, Vivekanandha Nagar, Singanallur, Tamil Nadu 641005.{" "}
                </p>
                  </div>
                </a>
                </div>
                <div className="section">
                  <span className="material-symbols-outlined">call</span>
                  <div className="details">
                    {/* <p>
                      +91-9047363963 <br /> +91-8220662798
                    </p> 
                  </div>
                </div>
                <div className="section">
                  <span className="material-symbols-outlined">mail</span>
                  <div className="details">
                    <p style={{ width: "100%", height: "100%" }}>
                      <a
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        href="mailto:support@mseed.in"
                      >
                       support@mseed.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="section">
                  <span className="material-symbols-outlined">group</span>
                  <div className="details">
                    <a
                      href="https://www.facebook.com/IDEATECHEVENTS"
                      target="_blank"
                    >
                      {" "}
                      <img  style={{width: "35px",height:'35px' }} src={check ? fbwhite : fb} alt="" />
                    </a>
                   
                    <a
                      href="https://www.instagram.com/mechnido/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width: "2.0rem" }} src={check ? instawhite : insta} alt="facebook link " />
                      
                      
                    </a>

                    <a
                      href="https://twitter.com/Seed_Mechnido?t=3f1PMqcAsZpphg9EG-baFA&s=09"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width: "2.0rem" }} src={check ? tw : tg} alt="facebook link " />
                      
                      
                    </a>
                    <a
                      href="https://www.linkedin.com/showcase/ideaedu/"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width: "2.0rem" }} src={check ? linkwhite: linkgreen} alt="facebook link " />
                      
                      
                    </a>
                    <a
                      href="https://www.threads.net/@ideatechevents"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width:"30px", height:"30px"  }} src={check ? thw: thg} alt="facebook link " />
                      
                      
                    </a>

                  </div> 
                </div>
               </div>  */}

                  <div>
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
                  </div>
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
