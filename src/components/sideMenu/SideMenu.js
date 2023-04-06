import React, { useEffect, useState } from "react";
import "./sideMenu.css";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function SideMenu() {
  const [prev, setPrev] = useState(null);
  const [event, setEvent] = useState(false);

  const location = useLocation();
  const loc = location.pathname.split("/");

  function click(e) {
    e.stopPropagation();
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.classList.remove("clicked");
    });
    const index = e.target.closest("[data-index]").dataset.index;
    console.log(index);
    if (index == 0 || index == 2) {
      console.log(links[0], "k");
      links[0].classList.add("clicked");
      links[2].classList.add("clicked");
      setEvent(false);
    } else {
      links[1].classList.add("clicked");
      links[3].classList.add("clicked");
      setEvent(true);
    }
  }

  useEffect(() => {
    let elem;
    switch (loc[loc.length - 1]) {
      case "courses":
        elem = 0;
        break;
      case "events":
        setEvent(true);
        elem = 1;
        break;
    }
    document.querySelectorAll(".link").forEach((link, index) => {
      if (prev === null) {
        if (elem === 0) {
          if (index === 0 || index === 2) link.classList.add("clicked");
          setPrev(link);
        } else {
          if (index === 1 || index === 3) {
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
    };
  }, []);

  const toggle = () => {
    document.getElementById("menu-options").classList.toggle("disable");
    document.getElementById("index").classList.toggle("index-toggle");
    document.getElementById("min-menu").classList.toggle("disable");
    document.getElementById("side-menu").classList.toggle("border");
  };
  const mobile = window.innerWidth < 430 ? true : false;
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
          onClick={mobile ? toggle : null}
          to="courses"
          className="link"
          data-index={0}
        >
          <span class="material-symbols-outlined">school</span>
          <div>Courses</div>
        </Link>
        <Link
          onClick={mobile ? toggle : null}
          to="events"
          className="link"
          data-index={1}
        >
          <span class="material-symbols-outlined">today</span>
          <div>Events</div>
        </Link>
        <hr />
        {!event ? (
          <>
            <h3>EXPLORE</h3>
            <HashLink
              onClick={mobile ? toggle : null}
              to="/courses/#recommended"
              smooth
            >
              <span class="material-symbols-outlined">sort</span>
              <div>Recommended</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to="/courses/#trending"
              smooth
            >
              <span class="material-symbols-outlined">trending_up</span>
              <div>Trending Now</div>
            </HashLink>
            <HashLink
              onClick={mobile ? toggle : null}
              to="/courses/#team"
              smooth
            >
              <span class="material-symbols-outlined">diversity_3</span>
              <div>Team Picks</div>
            </HashLink>
            <hr />
            <h3>CATEGORIES</h3>
            <Link onClick={mobile ? toggle : null} to="marketing">
              <span class="material-symbols-outlined">campaign</span>
              <div>Marketing</div>
            </Link>
            <Link onClick={mobile ? toggle : null} to="sell">
              <span class="material-symbols-outlined">sell</span>
              <div>Sell Online</div>
            </Link>
            <Link to="services">
              <span class="material-symbols-outlined">prescriptions</span>
              <div>Services & Events</div>
            </Link>
            <Link onClick={mobile ? toggle : null} to="media">
              <span class="material-symbols-outlined">perm_media</span>
              <div>Media & Content</div>
            </Link>
            <Link onClick={mobile ? toggle : null} to="design">
              <span class="material-symbols-outlined">design_services</span>
              <div>Design Elements</div>
            </Link>
            <Link onClick={mobile ? toggle : null} to="communication">
              <span class="material-symbols-outlined">hub</span>
              <div>communication</div>
            </Link>
          </>
        ) : (
          <>
            <h3>MENU</h3>
            <Link to="dashboard">
              <span class="material-symbols-outlined">dashboard</span>
              <div>Dashboard</div>
            </Link>
            <Link to="downloads">
              <span class="material-symbols-outlined">download</span>
              <div>Downloads</div>
            </Link>
            <Link to="uploads">
              <span class="material-symbols-outlined">upload_file</span>
              <div>Uploads</div>
            </Link>
            <Link to="payments">
              <span class="material-symbols-outlined">payments</span>
              <div>Payments</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
