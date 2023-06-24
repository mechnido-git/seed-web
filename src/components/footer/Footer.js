import React from "react";
import "./footer.css";
import { HashLink } from "react-router-hash-link";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";

function Footer() {
  return (
    <div className="footer">
      <h2>Quick Links</h2>
      <div className="links">
        <div className="section">
          <h3>Home</h3>
          <ul>
            <li>
              <HashLink smooth to="/#achievements">
                Achievements
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#testimonials">
                Testimonials
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#sponsors">
                Sponsors
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#faq">
                FAQ
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Cources</h3>
          <ul>
            <li>
            <HashLink smooth to="/menu/courses/#recommended">
                Recommended
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/menu/courses/#trending">
                Trending now
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/menu/courses/#team">
                Team Picks
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>Events</h3>
          <ul>
            <li>
              <HashLink smooth to="/menu/events/#gallery">
                Gallery
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/menu/events/#upcoming">
                Upcoming Events
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>Become a sower</h3>
          <ul>
            <li>
              <HashLink smooth to="/sower">
                Apply now
              </HashLink>
            </li>

          </ul>
        </div>

        <div className="section get-in-touch">
          <h3>Get in touch</h3>
          <ul>
            <li>

                  <div className="details">
                    <p>
                      +91-9047363963 <br /> +91-8220662798
                    </p>
                  </div>
            </li>
            <li>

                  <div className="details">
                    <p style={{ width: "100%", height: "100%" }}>
                      <a
                        href="mailto:info@mechnido.com"
                      >
                        info@mechnido.com
                      </a>
                    </p>
                  </div>
            </li>
            <li>
                  <div className="details">
                    <a
                      href="https://www.facebook.com/IDEATECHEVENTS"
                      target="_blank"
                    >
                      {" "}
                      <img style={{ width: "2.5rem" }} src={fb} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/mechnido/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1"
                      target="_blank"
                    >
                      {" "}
                      <img style={{ width: "2.5rem" }} src={insta} alt="" />
                    </a>
                  </div>
            </li>
                        <li>
              <div className="details">
                <p>
                  5/4b Lakshmi Vinayagar Kovil Land, 8th Street, Ganapathy
                  Coimbatore, Tamil Nadu 641006{" "}
                </p>
              </div>

            </li>
          </ul>
        </div>
      </div>
      <p>© 2023, Mechnido Pvt. Ltd. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
