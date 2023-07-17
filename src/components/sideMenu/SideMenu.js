import React, { useContext, useEffect, useState } from "react";
import "./sideMenu.css";
import { Link, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import RegisterForm from "../RegisterForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import SignIn from "../../pages/signin/SignIn";
import { StoreContext } from "../../store/StoreContext";
import { addIcon, category, filterItems } from "../../pages/courses/CoursesHome";
import intro from "../../images/intro.png";
import why from "../../images/why.png";
import perk from"../../images/perk.png";
import sch from "../../images/sch.png";
import tro from "../../images/tro.png";
import workflow from "../../images/workflow.png";

export const toggle = () => {
  // document.getElementById("menu-options").classList.toggle("disable");
  document.getElementById("index").classList.toggle("index-toggle");
  document.getElementById("min-menu").classList.toggle("disable");
  document.getElementById("side-menu").classList.toggle("border");
};

function SideMenu() {
  // const {loc, setLoc} = useContext(ToggleContext)
  const [user, setUser] = useState(false);
  const [prev, setPrev] = useState(null);
  const { filter, setFilter, courseIndex, eventIndex } = useContext(StoreContext);

  // const [loc, setLoc] = useState(location.pathname.split("/"))
  const navigator = useNavigate();

  // setLoc(location.pathname.split("/"))
  // console.log(loc);
  //const loc = location.pathname.split("/");
  //const [loc, setLoc] = useState()
  const { setSignIn } = useOutletContext();
  const { change, setLoc, section, setSection } = useContext(StoreContext)
  // setLoc(location.split("/"))
  // console.log(location.split("/"));


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
    console.log(index + "jiii");
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
    const loc = window.location.href.split("/")
    console.log(loc);
    console.log('hehe');
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(true);
    });
    let elem = -1;
    let pos = 1
    if (loc[loc.length - 1].length <= 1) pos = 2;
    if (loc[loc.length - 1].length == 1) pos = 3;
    console.log(loc[loc.length - pos]);
    switch (loc[loc.length - pos]) {
      case "courses":
        elem = 1;
        setSection(1);
        break;
      case "events":
        setSection(2);
        elem = 2;
        break;
      case "dashboard":
        setSection(0);
        elem = 0;
        break;
      default:
        return;
    }
    console.log(elem);
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
  }, []);

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
            {category.map((item, i) =>
              <Link
                key={i}
                className={i === 0 ? `filter sub active ${item.replace(" ", "-")}` : `filter sub ${item.replace(" ", "-")}`}
                onClick={(e) => { if (mobile) toggle(); filterItems(filter, setFilter, item, e) }}
                to="#"
              >
                <span class="material-symbols-outlined">{addIcon(item)}</span>
                <div>{item.toLowerCase()}</div>
              </Link>
            )}
            {/* <Link
              className="sub"
              onClick={mobile ? toggle : null}
              to="#"
            >
              <span class="material-symbols-outlined">campaign</span>
              <div>Marketing</div>
            </Link>
            <Link className="sub" onClick={mobile ? toggle : null} to="#">
              <span class="material-symbols-outlined">sell</span>
              <div>Sell Online</div>
            </Link>
            <Link className="sub" to="#">
              <span class="material-symbols-outlined">prescriptions</span>
              <div>Services & Events</div>
            </Link>
            <Link className="sub" onClick={mobile ? toggle : null} to="#">
              <span class="material-symbols-outlined">perm_media</span>
              <div>Media & Content</div>
            </Link>
            <Link className="sub" onClick={mobile ? toggle : null} to="#">
              <span class="material-symbols-outlined">design_services</span>
              <div>Design Elements</div>
            </Link>
            <Link
              className="sub"
              onClick={mobile ? toggle : null}
              to="#"
            >
              <span class="material-symbols-outlined">hub</span>
              <div>communication</div>
            </Link> */}
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
            {!user && (
              <div className="cover">
                <button onClick={() => setSignIn(true)}>Sign in</button>
              </div>
            )}
          </>
        );

      case 3:
        return (
          <>
            <h3>MENU</h3>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/courses/details/${courseIndex}/#intro`}
              smooth
              className="sub"
            >
              <span class="material-symbols-outlined">
                description
              </span>
              <div>Intro</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/courses/details/${courseIndex}/#about`}
              smooth
              className="sub"
            >
              <span class="material-symbols-outlined">
                info
              </span>
              <div>About</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/courses/details/${courseIndex}/#syllabus`}
              smooth
              className="sub"
            >
              <span class="material-symbols-outlined">
                import_contacts
              </span>
              <div>Syllabus</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/courses/details/${courseIndex}/#certificate`}
              smooth
              className="sub"
            >
              <span class="material-symbols-outlined">
                badge
              </span>
              <div>Certificate</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/courses/details/${courseIndex}/#metrics`}
              smooth
              className="sub"
            >
              <span class="material-symbols-outlined">
                bar_chart
              </span>
              <div>Metrics</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/courses/details/${courseIndex}/#feedbacks`}
              smooth
              className="sub"
            >
              <span class="material-symbols-outlined">
                rate_review
              </span>
              <div>Feedbacks</div>
            </HashLink>
          </>);

      case 4:
        return (
          <>
            <h3>MENU</h3>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/events/details/${eventIndex}/#intro`}
              smooth
              className="sub"
            >
              {/* <span class="material-symbols-outlined">
                description
              </span> */}
              <img className="menu-icon" src={intro} alt="tnkc icon"/>
              <div>Intro</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/events/details/${eventIndex}/#features`}
              smooth
              className="sub"
            >
              {/* <span class="material-symbols-outlined">
                description
              </span> */}
              <img className="menu-icon"  src={why} alt="tnkc icon"/>
              <div>Why TNKC 2023?</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/events/details/${eventIndex}/#perks`}
              smooth
              className="sub"
            >
              {/* <span class="material-symbols-outlined">
                description
              </span> */}
               <img className="menu-icon"  src={perk} alt="tnkc icon"/>
              <div>Perks</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/events/details/${eventIndex}/#workflow`}
              smooth
              className="sub"
            >
              {/* <span class="material-symbols-outlined">
                description
              </span> */}
               <img className="menu-icon"  src={workflow} alt="tnkc icon"/>
              <div>Workflow</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/events/details/${eventIndex}/#schedule`}
              smooth
              className="sub"
            >
              {/* <span class="material-symbols-outlined">
                description
              </span> */}
               <img className="menu-icon" src={sch} alt="tnkc icon"/>
              <div>Schedule</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to={`/menu/events/details/${eventIndex}/#awards`}
              smooth
              className="sub"
            >
              {/* <span class="material-symbols-outlined">
                description
              </span> */}
               <img className="menu-icon" src={tro} alt="tnkc icon"/>
              <div>Awards & Prizes</div>
            </HashLink>
          </>
        )

      default:
        return <></>;
    }
  };

  return (
    <div className={`side-menu ${window.innerWidth > 650 && 'border'}`} id="side-menu">
      <div className={`min-menu ${window.innerWidth > 650 && 'disable'}`} id="min-menu">
        <Link to="dashboard" className="link" data-index={0} >
          <span class="material-symbols-outlined">dashboard</span>
          <p>Dashboard</p>
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
      <div className={`menu-options ${window.innerWidth < 650 && 'disable'}`} id="menu-options">
        <Link to="dashboard" className="min-link" data-index={0}>
          <span class="material-symbols-outlined">dashboard</span>
          <div>Dashboard</div>
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
