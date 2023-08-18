import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState , useContext} from "react";
import Spinner from "../../components/Spinner";
import { auth } from "../../firebase/config";
import kart from "../../images/kart_logo.png";
import logo from "../../images/seed_logo/Seed Joined.svg";
import mech from "../../images/mech_logo.png";
import profile from "../../images/profile.png";
import "./about.css";
import HomeNav from "../home/homeNav/HomeNav";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import seedwhite from "../../images/seed_white.png";
import { StoreContext } from "../../store/StoreContext.js";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.png";
import about4 from "../../images/about4.png";
import about5 from "../../images/about5.png";


function About() {
  const {check, theme } = useContext(StoreContext);
  const [dp, setDp] = useState(profile);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(null);
  const [signIn, setSignin] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        if (user.photoURL) setDp(user.photoURL);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
    {loading && <Spinner other="globel" loading={loading} />}
      <HomeNav initial={1} bodyId={'about'} dp={dp} setSignIn={setSignin} signIn={signIn}  redirect={redirect} setRedirect={setRedirect} userName={userName} setLoading={setLoading} links={[<Link to="/">Home</Link>, <Link to="/sower">Become a Sower</Link>]} />
      <div className="about-container">
        {loading && <Spinner loading={loading} />}

        <div className="about" id="about">
          
     
          <section>
            <div className="details">
              <h2>
                About SEED- AN EDTECH ORGANISATION
              </h2>
              <p>
              Mechnido's Seed Learning Hub is a dynamic and innovative platform that serves as an integral part of MECHNIDO, dedicated to providing a comprehensive learning solution for individuals across diverse segments.
               Our platform offers a wide range of courses and events to help learners enhance their knowledge and skills, empowering them to thrive in an ever-evolving world. 
              Our courses and events are designed by industry experts and educators who are passionate about their fields.{" "}
              </p>
              {/* <p>
                All the events included under brand name SEED are exclusive
                events and cannot be associated with other events conducted by
                M/S MECHNIDO.{" "}
              </p> */}
              <h2>Vision</h2>
              <p>
              We envision a world where learning is a lifelong pursuit, and everyone has the opportunity to unlock their full potential. 
              Our goal is to create a dynamic and inclusive learning community where individuals can explore, connect, and grow, making learning a fulfilling and enjoyable experience.{" "}
              </p>
              <h2>Mission</h2>
              <p>
              Our mission is to empower individuals to learn and grow by providing a comprehensive and accessible learning solution. We strive to offer a wide range of courses and events that enhance knowledge and skills, enabling individuals to thrive in a changing world
              </p>
            </div>
            <div className="logo">
            <img src={check ? seedwhite : logo} alt="seed logo " />
            </div>
          </section>

          <section className="sectionimg">
            <div >
            <div className="img"><img src={about2}/></div>
              <div  className="txt"><h3>Experienced Trainers</h3></div>
            </div>
            <div>
            <div className="img"><img src={about1}/></div>
              <div  className="txt"><h3>Established in 2019</h3></div>
            </div>
            <div>
            <div className="img"><img src={about3}/></div>
              <div  className="txt"><h3>High quality tech-training platform</h3></div>
            </div>
            <div>
            <div className="img"><img src={about4}/></div>
              <div  className="txt"><h3>In demand courses</h3></div>
            </div>
            <div>
            <div className="img"><img src={about5}/></div>
              <div className="txt"><h3>4 Years in service</h3></div>
            </div>
            

          </section>

          <section>
            <div className="logo">
              <img src={mech} alt="" />
            </div>
            <div className="details">
              <h2>
                About Organizing Team -{" "}
                <span style={{ color: "red" }}>MECHNIDO</span>
              </h2>
              <p>
              M/S MECHNIDO was Established in 2018 in Coimbatore, Tamil Nadu, M/S Mechnido is a promising enterprise in the electric vehicle (EV) industry.
               With a strong commitment to driving innovation and contributing to a sustainable future, Mechnido is dedicated to manufacturing high-quality electric vehicles that
                offer exceptional performance and efficiency. Our team of skilled engineers, designers, and visionaries works diligently to develop cutting-edge EVs that prioritize reliability
                 and customer satisfaction.

              </p>
            </div>
          </section>

          {/* <section>
            <div className="logo">
              {console.log("this is check",check)}
            <img src={check ? seedwhite : logo} alt="seed logo " />
            </div>
            <div className="details">
              <h2>
                About SEED - VIRTUAL
                KART{" "}
              </h2>
              <p>
                SEED virtual kart is an online event encouraging
                budding engineers in designing a Go-kart or E-kart with proper
                engineering techniques. It aims at developing appropriate
                designing skills and understanding of the relevant scientific
                theories. It is a team event. The participating teams have to
                develop a virtual model of Go-kart or an E-kart, analyse and
                optimise virtually, under ideal conditions using modern computer
                applications, scientific theories and engineering calculations.
                The teams are then evaluated based on various relevant aspects
                required to design a fully functional vehicle.{" "}
              </p>
            </div>
          </section> */}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
