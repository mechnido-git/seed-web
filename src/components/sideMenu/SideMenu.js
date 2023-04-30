import React, { useContext, useEffect, useState } from "react";
import "./sideMenu.css";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import RegisterForm from "../RegisterForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import SignIn from "../../pages/signin/SignIn";



function SideMenu() {
  // const {loc, setLoc} = useContext(ToggleContext)
  const [user, setUser] = useState(false);
  const [prev, setPrev] = useState(null);
  const location = useLocation();
  const loc = location.pathname.split("/");
  const [section, setSection] = useState(null);


  // setLoc(location.pathname.split("/"))
  // console.log(loc);
  //const loc = location.pathname.split("/");
  //const [loc, setLoc] = useState()
  const { signIn } = useOutletContext();

  const toggle = () => {
    document.getElementById("menu-options").classList.toggle("disable");
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
    }
  }

  useEffect(() => {
    console.log(section);
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(true);
    });
    let elem = -1;
    switch (loc[loc.length - 1]) {
      case "courses":
        elem = 0;
        setSection(0);
        break;
      case "events":
        setSection(1);
        elem = 1;
        break;
    }
    console.log(elem);
    document.querySelectorAll(".link").forEach((link, index) => {
      if (prev === null) {
        if (elem === 0) {
          if (index === 0) link.classList.add("clicked");
          setPrev(link);
        } else if(elem === 1) {
          if (index === 1) {
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
        } else if(elem === 1) {
          if (index === 1) {
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
  }, []);



  const renderSwitch = (index) => {
    switch (index) {
      case 0:
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
            <Link className="sub" onClick={mobile ? toggle : null} to="marketing">
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
      case 1:
        return (
          <>
            <h3>MENU</h3>
            <Link className="sub" to="dashboard">
              <span class="material-symbols-outlined">dashboard</span>
              <div>Dashboard</div>
            </Link>
            <Link className="sub" to="downloads">
              <span class="material-symbols-outlined">download</span>
              <div>Downloads</div>
            </Link>
            <Link className="sub" to="uploads">
              <span class="material-symbols-outlined">upload_file</span>
              <div>Uploads</div>
            </Link>
            <Link className="sub" to="payments">
              <span class="material-symbols-outlined">payments</span>
              <div>Payments</div>
            </Link>
            {!user && (
              <div className="cover">
                <button onClick={() => signIn(true)}>Sign in</button>
              </div>
            )}
          </>
        );
        default : return <></>
    }
  };

  return (
    <div className="side-menu" id="side-menu">
      <div className="min-menu" id="min-menu">
        <Link to="courses" className="link" data-index={0}>
          <span class="material-symbols-outlined">school</span>
          <p>Courses</p>
        </Link>
        <Link to="events" className="link" data-index={1}>
          <span class="material-symbols-outlined">today</span>
          <p>Events</p>
        </Link>
      </div>
      <div className="menu-options disable" id="menu-options">
        <Link
          
          to="courses"
          className="min-link"
          data-index={0}
        >
          <span class="material-symbols-outlined">school</span>
          <div>Courses</div>
        </Link>
        <Link
          
          to="events"
          className="min-link"
          data-index={1}
        >
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
