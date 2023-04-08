import React, { useContext, useEffect, useState } from "react";
import "./eventIndex.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from "../../images/slide2.jpg";
import poster from "../../images/aa7.jpg";
import kart from "../../images/kart.jpg";
import trophy from "../../images/trophy.png"
import medal from "../../images/medal.png"
import sponsor from "../../images/sponsor.jpg"
import "@splidejs/react-splide/css";
import { useLocation, useOutletContext } from "react-router-dom";

function EventIndex() {
  const [signIn, setSignIn] = useState(false);
  const imgWidth = window.innerWidth < 1024 ? "100%" : "200px";
  const gap = window.innerWidth < 1024 ? "1rem" : "4rem";

  useEffect(() => {
    const arrows = document.querySelectorAll(".splide__arrow");
    arrows.forEach(
      (arrow) =>
        (arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z"/></svg>`)
    );
  }, []);

  console.log(
    window.innerWidth < 426
      ? 2
      : window.innerWidth < 768
      ? 3
      : window.innerWidth < 1024
      ? 4
      : 6
  );
  return (
    <div className="events-index">
      <div className="slides">
        <Splide
          tag="section"
          aria-labelledby="My Favorite Images"
          options={{
            type: "loop",
            interval: "1000",
            autoplay: true,
            interval: 3000,
            speed: 1000,
            pauseOnHover: false,
            pauseOnFocus: true,
            keyboard: true,
            gap: "1rem",
            width: "100%",
          }}
        >
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{ objectFit: "contain", width: "100%" }}
              src={image}
              alt="Image 2"
            />
          </SplideSlide>
        </Splide>

        <div className="btns">
          <button>Register</button>
        </div>
      </div>

<div className="register-info">
<div className="time-container">
        <h4>Registration Ends in</h4>
        <div className="time-div">
          <div className="days-div">
            <h3>Days</h3>
            <p>1</p>
          </div>
          <div className="hour-div">
            <h3>Hours</h3>
            <p>2</p>
          </div>
          <div className="minute-div">
            <h3>Minutes</h3>
            <p>4</p>
          </div>
          <div className="second-div">
            <h3>Seconds</h3>
            <p>5</p>
          </div>
        </div>
      </div>
      <div className="prize-div">
        <h4>Prize Category</h4>
        <div className="prize-list">
          <ul>
            <li>Overall winner <img src={medal} /></li>
            <li>Overall runner up <img src={medal} /></li>
            <li>Best design quality award <img src={medal} /></li>
            <li>Best innovation award <img src={medal} /></li>
            <li>Best strategy award <img src={medal} /></li>
            <li>Best business plan <img src={medal} /></li>
          </ul>
        </div>
      </div>
</div>

      <div className="slides-gallery">
        <h2>Gallery</h2>

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
            <img
              style={{
                objectFit: "contain",
                width: "100%",
              }}
              src={kart}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
              }}
              src={kart}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
              }}
              src={kart}
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
              }}
              src={kart}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
              }}
              src={kart}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
              }}
              src={kart}
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
              }}
              src={kart}
              alt="Image 2"
            />
          </SplideSlide>
        </Splide>
      </div>
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
            <img src={trophy} style={{width: "100px"}}/>
            Achievement #1
          </SplideSlide>
          <SplideSlide>
                        <img src={trophy} style={{width: "100px"}}/>
            Achievement #2
          </SplideSlide>
          <SplideSlide>
                        <img src={trophy} style={{width: "100px"}}/>
            Achievement #3
          </SplideSlide>
          <SplideSlide>
                        <img src={trophy} style={{width: "100px"}}/>
            Achievement #4
          </SplideSlide>
          <SplideSlide>
                        <img src={trophy} style={{width: "100px"}}/>
            Achievement #5
          </SplideSlide>
          <SplideSlide>
                       <img src={trophy} style={{width: "100px"}}/>
            Achievement #6
          </SplideSlide>
          <SplideSlide>
                        <img src={trophy} style={{width: "100px"}}/>
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
            <p>I have been to many automotive events in India but what attaracted me most about NEKC is the Experienced Judging Panels. The Judges were very knowledgeable and completely unbaised.</p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
          <h3>Greate Events & expierienced Judges</h3>
            <p>I have been to many automotive events in India but what attaracted me most about NEKC is the Experienced Judging Panels. The Judges were very knowledgeable and completely unbaised.</p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
          <h3>Greate Events & expierienced Judges</h3>
            <p>I have been to many automotive events in India but what attaracted me most about NEKC is the Experienced Judging Panels. The Judges were very knowledgeable and completely unbaised.</p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
          <h3>Greate Events & expierienced Judges</h3>
            <p>I have been to many automotive events in India but what attaracted me most about NEKC is the Experienced Judging Panels. The Judges were very knowledgeable and completely unbaised.</p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
          <h3>Greate Events & expierienced Judges</h3>
            <p>I have been to many automotive events in India but what attaracted me most about NEKC is the Experienced Judging Panels. The Judges were very knowledgeable and completely unbaised.</p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
          <h3>Greate Events & expierienced Judges</h3>
            <p>I have been to many automotive events in India but what attaracted me most about NEKC is the Experienced Judging Panels. The Judges were very knowledgeable and completely unbaised.</p>
            <p>Rahul Kumar</p>
          </SplideSlide>
          <SplideSlide>
          <h3>Greate Events & expierienced Judges</h3>
            <p>I have been to many automotive events in India but what attaracted me most about NEKC is the Experienced Judging Panels. The Judges were very knowledgeable and completely unbaised.</p>
            <p>Rahul Kumar</p>
          </SplideSlide>
        </Splide>
      </div>
      <div className="slides-sponsors">
        <h2>Sponsors</h2>

        <Splide
          tag="section"
          aria-labelledby="My Favorite Images"
          options={{
            speed: 1000,
            autoplay: true,
            interval: 2000,
            pauseOnHover: false,
            type: "loop",
            pauseOnFocus: true,
            keyboard: true,
            gap: ".5rem",
            width: "100%",
            perPage:
              window.innerWidth <= 426
                ? 3
                : window.innerWidth <= 768
                ? 3.5
                : window.innerWidth <= 1024
                ? 4
                : 5,
            perMove: 1,
            pagination: false,
          }}
        >
          <SplideSlide>
            <img src={sponsor} style={{width: "100px"}}/>
          </SplideSlide>
          <SplideSlide>
            <img src={sponsor} style={{width: "100px"}}/>
          </SplideSlide>
          <SplideSlide>
            <img src={sponsor} style={{width: "100px"}}/>
          </SplideSlide>
          <SplideSlide>
            <img src={sponsor} style={{width: "100px"}}/>
          </SplideSlide>
          <SplideSlide>
            <img src={sponsor} style={{width: "100px"}}/>
          </SplideSlide>
          <SplideSlide>
            <img src={sponsor} style={{width: "100px"}}/>
          </SplideSlide>
          <SplideSlide>
            <img src={sponsor} style={{width: "100px"}}/>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default EventIndex;
