import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
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

function About() {

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
            <div className="logo">
              <img src={mech} alt="" />
            </div>
            <div className="details">
              <h2>
                About Organizing Team -{" "}
                <span style={{ color: "red" }}>MECHNIDO</span>
              </h2>
              <p>
                M/S MECHNIDO is an emerging enterprise started in November-2018,
                working in the field of design, fabrication, and retailing of
                parts associated with Go-karts and all Terrain Vehicles. We also
                customize motorsports parts as per the customer requirements
                prioritizing their design, comfort, and affordability.
              </p>
            </div>
          </section>
          <section>
            <div className="details">
              <h2>
                About SEED- A Unit of Mechnido
              </h2>
              <p>
                Seed is a group of events
                presented by M/S MECHNIDO, comprising of various national level
                events which acts as a platform for engineers to apply and
                enhance their engineering skills in real world applications. It
                promotes the idea of developing innovative, robust structures
                designed with sound engineering practices.{" "}
              </p>
              <p>
                All the events included under brand name SEED are exclusive
                events and cannot be associated with other events conducted by
                M/S MECHNIDO.{" "}
              </p>
              <h2>Vision</h2>
              <p>
                Our primary vision is to motivate budding engineers to develop
                creative ideas, implement them effectively and mould them to
                face the obstacles. We visualize in creating a platform which
                forms a strong technical base for them.{" "}
              </p>
              <h2>Mission</h2>
              <p>
                Our mission is to play key role in forging ideas of young
                technocrats, to create a platform for prospective engineers to
                perform and excel their technical skills, to strive hard to
                ensure that each student in our family evolves to their best
                potential.
              </p>
            </div>
            <div className="logo">
              <img src={logo} />
            </div>
          </section>
          <section>
            <div className="logo">
              <img src={logo} alt="" />
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
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
