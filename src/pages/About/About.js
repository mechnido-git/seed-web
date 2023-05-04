import React from 'react'
import './about.css'
import logo from "../../images/logo_round.png";

function About() {
  return (
    <div className='about-container'>
    <div className="about">
            <div id="about"></div>
            <div className="left">
              <h2>
                About INNOVATIVE DESIGN AND ENGINEERING ANALYSIS (I.D.E.A)
              </h2>
              <p>
                Innovative design and engineering analysis is a group of events
                presented by M/S MECHNIDO, comprising of various national level
                events which acts as a platform for engineers to apply and
                enhance their engineering skills in real world applications. It
                promotes the idea of developing innovative, robust structures
                designed with sound engineering practices.{" "}
              </p>
              <p>
                All the events included under brand name I.D.E.A. are exclusive
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
            <div className="right">
              <img src={logo} />
            </div>
          </div>

          <div className="footer">
          <div className="links">
          <div className="section">
             <h3>Cources</h3>
             <ul>
               <li><a href="#">Trending Now</a></li>
               <li><a href="#">Team Picks</a></li>
             </ul>
           </div>
  
           <div className="section">
             <h3>Events</h3>
             <ul>
               <li><a href="#">Gallery</a></li>
               <li><a href="#">Upcoming Events</a></li>
               <li><a href="#">Sponsors</a></li>
             </ul>
           </div>
          </div>
         </div>
               <p>©Mechnido Pvt. Ltd. All Rights Reserved</p>
    </div>
  )
}

export default About