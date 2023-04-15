import React, { useState } from 'react'
import logo from '../../images/logo_round.png'
import './home.css'
import trophy from '../../images/trophy.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useNavigate } from 'react-router-dom'
import SignIn from '../signin/SignIn'

function Home() {
    const [signIn, setSignIn] = useState(false);
    const navigate = useNavigate();
    const goToLink = (link) =>{
        navigate(link)
    }
  return (
    <div className="home">
        <div className="nav">
            <div className="left">
                <img src={logo} alt="" />
                <ul>
                    <li>About</li>
                    <li>Achievements</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="right">
                <button onClick={()=>setSignIn(true)}>Signin</button>
            </div>
        </div>
        <div className="hero">
            <div className="btns">
                <button onClick={()=>goToLink('/menu/courses')}>Courses</button>
                <button onClick={()=>goToLink('/menu/events')}>Events</button>
            </div>
        </div>
        <div className="main">
        <div className="slides-achievements">
        <h2>Achievements</h2>

        <Splide
          tag="section"
          aria-labelledby="My Favorite Images"
          options={{
            speed: 1000,
            pauseOnHover: false,
            type: "loop",
            pauseOnFocus: true,
            keyboard: true,
            gap: ".5rem",
            width: "100%",
            perPage:
              window.innerWidth <= 426
                ? 1
                : window.innerWidth <= 768
                ? 1.5
                : window.innerWidth <= 1024
                ? 2
                : 3,
            perMove: 1,
            pagination: false,
          }}
        >
          <SplideSlide>
            <img src={trophy} style={{ width: "100px" }} />
            Achievement #1
          </SplideSlide>
          <SplideSlide>
            <img src={trophy} style={{ width: "100px" }} />
            Achievement #2
          </SplideSlide>
          <SplideSlide>
            <img src={trophy} style={{ width: "100px" }} />
            Achievement #3
          </SplideSlide>
          <SplideSlide>
            <img src={trophy} style={{ width: "100px" }} />
            Achievement #4
          </SplideSlide>
          <SplideSlide>
            <img src={trophy} style={{ width: "100px" }} />
            Achievement #5
          </SplideSlide>
          <SplideSlide>
            <img src={trophy} style={{ width: "100px" }} />
            Achievement #6
          </SplideSlide>
          <SplideSlide>
            <img src={trophy} style={{ width: "100px" }} />
            Achievement #7
          </SplideSlide>
        </Splide>
      </div>
      <div className="slides-testimonials">
        <h2>Testimonials</h2>
        <p>What people say</p>
        <Splide
          tag="section"
          aria-labelledby="My Favorite Images"
          options={{
            speed: 1000,
            autoplay: true,
            interval: 3400,
            pauseOnHover: false,
            type: "loop",
            pauseOnFocus: true,
            keyboard: true,
            gap: ".5rem",
            width: "100%",
            perPage:
              window.innerWidth <= 426
                ? 1
                : window.innerWidth <= 768
                ? 1.5
                : window.innerWidth <= 1024
                ? 2
                : 3,
            perMove: 1,
            pagination: false,
          }}
        >
          <SplideSlide>
            <h3>Greate Events & expierienced Judges</h3>
            <p>
              I have been to many automotive events in India but what attaracted
              me most about NEKC is the Experienced Judging Panels. The Judges
              were very knowledgeable and completely unbaised.
            </p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
            <h3>Greate Events & expierienced Judges</h3>
            <p>
              I have been to many automotive events in India but what attaracted
              me most about NEKC is the Experienced Judging Panels. The Judges
              were very knowledgeable and completely unbaised.
            </p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
            <h3>Greate Events & expierienced Judges</h3>
            <p>
              I have been to many automotive events in India but what attaracted
              me most about NEKC is the Experienced Judging Panels. The Judges
              were very knowledgeable and completely unbaised.
            </p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
            <h3>Greate Events & expierienced Judges</h3>
            <p>
              I have been to many automotive events in India but what attaracted
              me most about NEKC is the Experienced Judging Panels. The Judges
              were very knowledgeable and completely unbaised.
            </p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
            <h3>Greate Events & expierienced Judges</h3>
            <p>
              I have been to many automotive events in India but what attaracted
              me most about NEKC is the Experienced Judging Panels. The Judges
              were very knowledgeable and completely unbaised.
            </p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
            <h3>Greate Events & expierienced Judges</h3>
            <p>
              I have been to many automotive events in India but what attaracted
              me most about NEKC is the Experienced Judging Panels. The Judges
              were very knowledgeable and completely unbaised.
            </p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
            <h3>Greate Events & expierienced Judges</h3>
            <p>
              I have been to many automotive events in India but what attaracted
              me most about NEKC is the Experienced Judging Panels. The Judges
              were very knowledgeable and completely unbaised.
            </p>
            <p>Rahul Kumar</p>
          </SplideSlide>
        </Splide>
      </div>
        </div>
        {signIn && <div className="wrapper">
        <div className="blocker" onClick={()=>setSignIn(false)}></div>
        <SignIn />
      </div>}
    </div>
  )
}

export default Home