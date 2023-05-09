import React, { useContext, useEffect, useState } from "react";
import "./sideMenu.css";
import { Link, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import RegisterForm from "../RegisterForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import SignIn from "../../pages/signin/SignIn";
import { StoreContext } from "../../store/StoreContext";

function SideMenu() {
  // const {loc, setLoc} = useContext(ToggleContext)
  const [user, setUser] = useState(false);
  const [prev, setPrev] = useState(null);
  const location = useLocation();
  const [loc, setLoc] = useState(location.pathname.split("/"))
  const [section, setSection] = useState(null);
  const navigator = useNavigate();

  // setLoc(location.pathname.split("/"))
  // console.log(loc);
  //const loc = location.pathname.split("/");
  //const [loc, setLoc] = useState()
  const { setSignIn } = useOutletContext();
  const { change } = useContext(StoreContext)

  const toggle = () => {
  //  document.getElementById("menu-options").classList.toggle("disable");
    document.getElementById("index").classList.toggle("index-toggle");
    document.getElementById("min-menu").classList.toggle("disable");
    document.getElementById("side-menu").classList.toggle("border");
  };
  const mobile = window.innerWidth < 430 ? true : false;

  function click(e) {
    const links = document.querySelectorAll(".link");
    const minLinks = document.querySelectorAll(".min-link");
    links.forEach((link) => {
      link.classList.remove("clicked");
    });
    minLinks.forEach((link) => {
      link.classList.remove("clicked");
    });
    const index = e.target.closest("[data-index]").dataset.index;
    console.log(index);
    if (index == 0) {
      console.log(links[0], "k");
      links[0].classList.add("clicked");
      minLinks[0].classList.add("clicked");
      setSection(0);
    } else if (index == 1) {
      links[1].classList.add("clicked");
      minLinks[1].classList.add("clicked");
      setSection(1);
    } else if (index == 2) {
      links[2].classList.add("clicked");
      minLinks[2].classList.add("clicked");
      setSection(2);
    }
  }

  useEffect(() => {
    console.log(change);
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(true);
    });
    let elem = -1;
    let pos = 1
    if(loc[loc.length - 1].length == 0) pos = 2;
    switch (loc[loc.length - pos]) {
      case "courses":
        elem = 1;
        setSection(1);
        break;
      case "events":
        setSection(2);
        elem = 2;
        break;
      case "home":
        setSection(0);
        elem = 0;
        break;
      default:
        return;
    }
    console.log(elem);
    document.querySelectorAll(".link").forEach((link, index) => {
      if (prev === null) {
        if (elem === 0) {
          if (index === 0) link.classList.add("clicked");
          setPrev(link);
        } else if (elem === 1) {
          if (index === 1) {
            link.classList.add("clicked");
            setPrev(link);
          }
        } else if (elem === 2) {
          if (index === 2) {
            link.classList.add("clicked");
            setPrev(link);
          }
        }
      }
      link.addEventListener("click", click);
    });
    document.querySelectorAll(".min-link").forEach((link, index) => {
      if (prev === null) {
        if (elem === 0) {
          if (index === 0) link.classList.add("clicked");
          setPrev(link);
        } else if (elem === 1) {
          if (index === 1) {
            link.classList.add("clicked");
            setPrev(link);
          }
        } else if (elem === 2) {
          if (index === 2) {
            link.classList.add("clicked");
            setPrev(link);
          }
        }
      }
      link.addEventListener("click", click);
    });
    return () => {
      document.querySelectorAll(".link").forEach((link) => {
        link.removeEventListener("click", click);
      });
      document.querySelectorAll(".min-link").forEach((link) => {
        link.removeEventListener("click", click);
      });
    };
  }, [change]);

  const renderSwitch = (index) => {
    switch (index) {
      case 1:
        return (
          <>
            <h3>EXPLORE</h3>
            <HashLink
              className="sub"
              onClick={mobile ? toggle : null}
              to="/menu/courses/#recommended"
              smooth
            >
              <span class="material-symbols-outlined">sort</span>
              <div>Recommended</div>
            </HashLink>
            <HashLink
              className="sub"
              onClick={mobile ? toggle : null}
              to="/menu/courses/#trending"
              smooth
            >
              <span class="material-symbols-outlined">trending_up</span>
              <div>Trending Now</div>
            </HashLink>
            <HashLink
              className="sub"
              onClick={mobile ? toggle : null}
              to="/menu/courses/#team"
              smooth
            >
              <span class="material-symbols-outlined">diversity_3</span>
              <div>Team Picks</div>
            </HashLink>
            <hr />
            <h3>CATEGORIES</h3>
            <Link
              className="sub"
              onClick={mobile ? toggle : null}
              to="marketing"
            >
              <span class="material-symbols-outlined">campaign</span>
              <div>Marketing</div>
            </Link>
            <Link className="sub" onClick={mobile ? toggle : null} to="sell">
              <span class="material-symbols-outlined">sell</span>
              <div>Sell Online</div>
            </Link>
            <Link className="sub" to="services">
              <span class="material-symbols-outlined">prescriptions</span>
              <div>Services & Events</div>
            </Link>
            <Link className="sub" onClick={mobile ? toggle : null} to="media">
              <span class="material-symbols-outlined">perm_media</span>
              <div>Media & Content</div>
            </Link>
            <Link className="sub" onClick={mobile ? toggle : null} to="design">
              <span class="material-symbols-outlined">design_services</span>
              <div>Design Elements</div>
            </Link>
            <Link
              className="sub"
              onClick={mobile ? toggle : null}
              to="communication"
            >
              <span class="material-symbols-outlined">hub</span>
              <div>communication</div>
            </Link>
          </>
        );
      case 2:
        return (
          <>
            <h3>MENU</h3>
            <HashLink
              onClick={mobile ? toggle : null}
              to="/menu/events/#current"
              smooth
              className="sub"
            >
              <span class="material-symbols-outlined">event_list</span>
              <div>Current Events</div>
            </HashLink>
            <HashLink
              className="sub"
              onClick={mobile ? toggle : null}
              to="/menu/events/#gallery"
              smooth
            >
              <span class="material-symbols-outlined">gallery_thumbnail</span>
              <div>Gallery</div>
            </HashLink>
            <HashLink
              className="sub"
              onClick={mobile ? toggle : null}
              to="/menu/events/#upcoming"
              smooth
            >
              <span class="material-symbols-outlined">event_upcoming</span>
              <div>Upcoming Events</div>
            </HashLink>
            <HashLink
              className="sub"
              onClick={mobile ? toggle : null}
              to="/menu/events/#sponsors"
              smooth
            >
              <span class="material-symbols-outlined">stars</span>
              <div>Sponsors</div>
            </HashLink>
            {!user && (
              <div className="cover">
                <button onClick={() => setSignIn(true)}>Sign in</button>
              </div>
            )}
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="side-menu" id="side-menu">
      <div className="min-menu" id="min-menu">
        <Link to="home" className="link" data-index={0} >
          <span class="material-symbols-outlined">home</span>
          <p>Home</p>
        </Link>
        <Link to="courses" className="link" data-index={1}>
          <span class="material-symbols-outlined">school</span>
          <p>Courses</p>
        </Link>
        <Link to="events" className="link" data-index={2}>
          <span class="material-symbols-outlined">today</span>
          <p>Events</p>
        </Link>
      </div>
      <div className="menu-options disable" id="menu-options">
        <Link to="home" className="min-link" data-index={0}>
        <span class="material-symbols-outlined">home</span>
          <div>Home</div>
        </Link>
        <Link to="courses" className="min-link" data-index={1}>
          <span class="material-symbols-outlined">school</span>
          <div>Courses</div>
        </Link>
        <Link to="events" className="min-link" data-index={2}>
          <span class="material-symbols-outlined">today</span>
          <div>Events</div>
        </Link>
        <hr />
        {renderSwitch(section)}
      </div>
    </div>
  );
}

export default SideMenu;
