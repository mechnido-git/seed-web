import React from "react";
import "./sideMenu.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function SideMenu() {
  const toggle = () => {
    document.getElementById("menu-options").classList.toggle("disable");
    document.getElementById("index").classList.toggle("index-toggle");
    document.getElementById("min-menu").classList.toggle("disable");
    document.getElementById("side-menu").classList.toggle("border");
  };
  const mobile = window.innerWidth < 430? true: false
  return (
    <div className="side-menu" id="side-menu">
      <div className="min-menu" id="min-menu">
        <Link to="courses">
          <span class="material-symbols-outlined">school</span>
          <p>Courses</p>
        </Link>
        <Link to="events">
          <span class="material-symbols-outlined">today</span>
          <p>Events</p>
        </Link>
      </div>
      <div className="menu-options disable" id="menu-options">
        <Link onClick={mobile? toggle: null} to="courses">
          <span class="material-symbols-outlined">school</span>
          <div>Courses</div>
        </Link>
        <Link onClick={mobile? toggle: null} to="events">
          <span class="material-symbols-outlined">today</span>
          <div>Events</div>
        </Link>
        <hr />
        <h3>EXPLORE</h3>
        <HashLink onClick={mobile? toggle: null} to="/courses/#recommended" smooth>
          <span class="material-symbols-outlined">sort</span>
          <div>Recommended</div>
        </HashLink>
        <HashLink onClick={mobile? toggle: null} to="/courses/#trending" smooth>
          <span class="material-symbols-outlined">trending_up</span>
          <div>Trending Now</div>
        </HashLink>
        <HashLink onClick={mobile? toggle: null} to="/courses/#team" smooth>
        <span class="material-symbols-outlined">
diversity_3
</span>
          <div>Team Picks</div>
        </HashLink>
        <hr />
        <h3>CATEGORIES</h3>
        <Link onClick={mobile? toggle: null} to="marketing">
        <span class="material-symbols-outlined">
campaign
</span>
          <div>Marketing</div>
        </Link>
        <Link onClick={mobile? toggle: null} to="sell">
        <span class="material-symbols-outlined">
sell
</span>
          <div>Sell Online</div>
        </Link>
        <Link to="services">
        <span class="material-symbols-outlined">
prescriptions
</span>
          <div>Services & Events</div>
        </Link>
        <Link onClick={mobile? toggle: null} to="media">
        <span class="material-symbols-outlined">
perm_media
</span>
          <div>Media & Content</div>
        </Link>
        <Link onClick={mobile? toggle: null} to="design">
        <span class="material-symbols-outlined">
design_services
</span>
          <div>Design Elements</div>
        </Link>
        <Link onClick={mobile? toggle: null} to="communication">
        <span class="material-symbols-outlined">
hub
</span>
          <div>communication</div>
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
