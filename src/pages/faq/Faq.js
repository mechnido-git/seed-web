import React, { useEffect, useRef, useState } from 'react'
import { FiPlus } from "react-icons/fi";
import logo from "../../images/logo_round.png";
import './faq.css'

function Faq() {

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
  
    const contentRef1 = useRef(null);
    const contentRef2 = useRef(null);
    const contentRef3 = useRef(null);
  
    useEffect(() => {
      contentRef1.current.style.maxHeight = active1
        ? `${contentRef1.current.scrollHeight}px`
        : "0px";
    }, [contentRef1, active1]);
  
    const toggleAccordion1 = () => {
      setActive1(!active1);
    };
    useEffect(() => {
      contentRef2.current.style.maxHeight = active2
        ? `${contentRef2.current.scrollHeight}px`
        : "0px";
    }, [contentRef2, active2]);
  
    const toggleAccordion2 = () => {
      setActive2(!active2);
    };
    useEffect(() => {
      contentRef3.current.style.maxHeight = active3
        ? `${contentRef3.current.scrollHeight}px`
        : "0px";
    }, [contentRef3, active3]);
  
    const toggleAccordion3 = () => {
      setActive3(!active3);
    };
  

  return (
    <div className="faq-container">
        <div className="faq">
            <div id="faq"></div>
            <img src={logo} />
            <h2>FAQ</h2>
            <div>
              <button
                className={`question-section ${active1}`}
                onClick={toggleAccordion1}
              >
                <div>
                  <div className="question-align">
                    <h4 className="question-style">
                      Why do you like web developemnt
                    </h4>
                    <FiPlus
                      className={
                        active1 ? `question-icon rotate` : `question-icon`
                      }
                    />
                  </div>
                  <div
                    ref={contentRef1}
                    className={active1 ? `answer answer-divider` : `answer`}
                  >
                    <p>Because I love coding</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                className={`question-section ${active2}`}
                onClick={toggleAccordion2}
              >
                <div>
                  <div className="question-align">
                    <h4 className="question-style">
                      Why do you like web developemnt
                    </h4>
                    <FiPlus
                      className={
                        active2 ? `question-icon rotate` : `question-icon`
                      }
                    />
                  </div>
                  <div
                    ref={contentRef2}
                    className={active2 ? `answer answer-divider` : `answer`}
                  >
                    <p>Because I love coding</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                className={`question-section ${active3}`}
                onClick={toggleAccordion3}
              >
                <div>
                  <div className="question-align">
                    <h4 className="question-style">
                      Why do you like web developemnt
                    </h4>
                    <FiPlus
                      className={
                        active3 ? `question-icon rotate` : `question-icon`
                      }
                    />
                  </div>
                  <div
                    ref={contentRef3}
                    className={active3 ? `answer answer-divider` : `answer`}
                  >
                    <p>Because I love coding</p>
                  </div>
                </div>
              </button>
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

export default Faq