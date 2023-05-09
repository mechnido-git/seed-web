import React from "react";
import "./about.css";
import logo from "../../images/logo_round.png";
import mech from "../../images/mech_logo.png";
import kart from "../../images/kart_logo.png";

function About() {
  return (
    <div className="about-container">
      
      <div className="about">
        <div id="about"></div>
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
            <h2>About INNOVATIVE DESIGN AND ENGINEERING ANALYSIS (I.D.E.A)</h2>
            <p>
              Innovative design and engineering analysis is a group of events
              presented by M/S MECHNIDO, comprising of various national level
              events which acts as a platform for engineers to apply and enhance
              their engineering skills in real world applications. It promotes
              the idea of developing innovative, robust structures designed with
              sound engineering practices.{" "}
            </p>
            <p>
              All the events included under brand name I.D.E.A. are exclusive
              events and cannot be associated with other events conducted by M/S
              MECHNIDO.{" "}
            </p>
            <h2>Vision</h2>
            <p>
              Our primary vision is to motivate budding engineers to develop
              creative ideas, implement them effectively and mould them to face
              the obstacles. We visualize in creating a platform which forms a
              strong technical base for them.{" "}
            </p>
            <h2>Mission</h2>
            <p>
              Our mission is to play key role in forging ideas of young
              technocrats, to create a platform for prospective engineers to
              perform and excel their technical skills, to strive hard to ensure
              that each student in our family evolves to their best potential.
            </p>
          </div>
          <div className="logo">
            <img src={logo} />
          </div>
        </section>
        <section>
          <div className="logo">
            <img src={kart} alt="" />
          </div>
          <div className="details">
            <h2>About INNOVATIVE DESIGN AND ENGINEERING ANALYSIS FOR VIRTUAL KART </h2>
            <p>
              I.D.E.A V-Kart stands for Innovative Design and Engineering
              Analysis for virtual kart. It is an online event encouraging
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

      <div className="footer">
        <div className="links">
          <div className="section">
            <h3>Cources</h3>
            <ul>
              <li>
                <a href="#">Trending Now</a>
              </li>
              <li>
                <a href="#">Team Picks</a>
              </li>
            </ul>
          </div>

          <div className="section">
            <h3>Events</h3>
            <ul>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Upcoming Events</a>
              </li>
              <li>
                <a href="#">Sponsors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>©Mechnido Pvt. Ltd. All Rights Reserved</p>
    </div>
  );
}

export default About;
