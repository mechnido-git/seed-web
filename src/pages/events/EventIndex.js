import React, { useContext, useEffect } from 'react'
import './eventIndex.css'
import { Splide, SplideSlide} from "@splidejs/react-splide";
import image from "../../images/slide.jpg";
import "@splidejs/react-splide/css";
import { useLocation, useOutletContext } from 'react-router-dom';

function EventIndex() {


  return (
    <div className='events-index'>
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
            <button>Know More</button>
          </div>
          </div>
    </div>
  )
}

export default EventIndex