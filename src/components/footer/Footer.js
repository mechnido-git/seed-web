import React, { useContext} from "react";
import "./footer.css";
import { HashLink } from "react-router-hash-link";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import fbwhite from "../../images/facebookwhite.png";
import instawhite from "../../images/instawhite.png";
import { StoreContext } from "../../store/StoreContext";
import linkwhite from "../../images/linkedin-white.png";
import linkgreen from "../../images/linkedin-green.png";
import tg from "../../images/tweet-green.png";
import tw  from "../../images/tweet-white.png";
import thw from "../../images/thread-w.png";
import thg from "../../images/threads-green.png";

function Footer() {
const { check}= useContext(StoreContext);
 
//  const [fbsrc, setFbsrc] = useState(fb);
//  const [insrc, setInsrc] = useState(insta);



  return (
    <div className="footer">
      <h2>Quick Links</h2>
      <div className="links">
        <div className="section">
          <h3>Home</h3>
          <ul>
          <li>
              <HashLink smooth to="/about/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#accreditations">
                Accreditations
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#testimonial">
                Testimonials
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Collaborations">
                Collaborations
              </HashLink>
            </li>
           
            <li>
              <HashLink smooth to="/faq/#faq">
                FAQ
              </HashLink>
            </li>
          </ul> 
        </div>
        <div className="section">
          <h3>Courses</h3>
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
            <li>
              <HashLink smooth to="/menu/events/#sponsors">
                Sponsors
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

        <div className="section">
          <h3>Policies</h3>
          <ul>
            <li>
              <HashLink smooth to="/privacy-policy/#privacy">
                Privacy Policy
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/refund-policy/#refund">
                Refund Policy
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/terms/#terms">
                Terms & Conditions
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="section GIT">
          <h3>Get in touch</h3>
          <ul>
            {/* <li>

                  <div className="details">
                    <p>
                      +91-9047363963 <br /> +91-8220662798
                    </p>
                  </div>
            </li> */}
            <li>

                  <div className="details">
                    <p style={{ width: "100%", height: "100%" }}>
                      <a
                        href="mailto:support@mseed.in"
                      >
                        support@mseed.in
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
                     
                      <img  style={{width:"2.5rem" }} src={check ? fbwhite : fb} alt="" />
                      {/* <img style={{display: check ? "inline " : "none"  }} src={} alt="" /> */}
                        {/*  {social_icons('facebook',{color:"red", class:'sqs-svg-icon--list'})} */}
                       
                    </a>
                    <a
                      href="https://www.instagram.com/mechnido/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1"
                      target="_blank"
                    >
                      {" "}
                     
                    <img style={{ width: "2.5rem" }} src={check ? instawhite : insta} alt="facebook link " />
                      
                      
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
            </li>
                        <li>
              <div className="details">
                <a href="https://www.google.com/search?client=tablet-android-samsung-ss&sxsrf=AB5stBjynXM65Dq5sU2UvOOKChyWUkVHdQ:1691480997949&q=MECHNIDO+-+R%26D&ludocid=5846389838005926368&ibp=gwp;0,7&lsig=AB86z5WDXq3Yu-LuNuV-RN5ncQKQ&kgs=a48d0248b5423189&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/6"
                target="_blank">
                <p>
                294, 1st Floor, Trichy Rd, Vivekanandha Nagar, Singanallur, Tamil Nadu 641005.{" "}
                </p>
                </a>
               
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
