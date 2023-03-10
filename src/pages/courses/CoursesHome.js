import React, { useState } from "react";
import "./coursesHome.css";
import courses from "../../images/courses.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from "../../images/slide.jpg";
import "@splidejs/react-splide/css";

export const recomended = [
  {
    name: "Video Title 1",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: 'Marketing'
  },
  {
    name: "Video Title 2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    rating: "4.4",
    thumbnail: courses,
    category: 'Sell Online'
  },
  {
    name: "Video Title 3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: 'Services & Events'
  },
  {
    name: "Video Title 4",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      rating: "4.4",
    thumbnail: courses,
    category: 'Media Content'
  },
];

export const trending = [
  {
    name: "Video Title 5",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: 'Design Elements'
  },
  {
    name: "Video Title 6",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: 'Communication'
  },
  {
    name: "Video Title 7",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: 'Marketing'
  },
  {
    name: "Video Title 8",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: 'Sell Online'
  },
]

const CardBuilder = ({ arr, limit }) => (
  <>
    {arr.map((item, index) => {
      if (limit != null && index >= limit) return;
      return (
        <div className="card">
          <img src={item.thumbnail} alt="" />
          <div className="body">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div>
              <p>Free plan</p>
              <h5>Rating:{item.rating}</h5>
            </div>
          </div>
        </div>
      );
    })}
  </>
);



const category = ['All', 'Marketing', 'Sell Online', 'Services & Events', 'Media Content', 'Design Elements', 'Communication']

function CoursesHome() {
  const [filter, setFilter] = useState('All')

  const filterItems = (item, e) => {
    //const btns = document.querySelectorAll('.filter')
    const active = document.getElementsByClassName('active')
    const allBtn = document.getElementById('All')
    if(active[0]){
      if(active[0].innerHTML == e.target.innerHTML){
        active[0].classList.toggle('active')
        allBtn.classList.add('active')
      }else{
        active[0].classList.remove('active')
        e.target.classList.add('active')

      }
    }else{
      e.target.classList.add('active')
    }
    setFilter(filter === 'All'? item: filter == item? 'All': item)
  }

  return (<>
        <div className="fixed">
        {category.map((item, index)=><button id={index === 0? 'All': null} className={index === 0? 'filter active': 'filter'} onClick={(e)=>filterItems(item, e)} key={index}>{item}</button>)}
        </div>
    <div className="courses-home">

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
      <section className="main-div">
        <div id="recommended" className="section">
          <h2>Recommended for You</h2>
          <div className="card-container-div">
            <CardBuilder arr={recomended.filter((item)=> filter === 'All'? item: filter == item.category)} limit={4} />
          </div>
        </div>
        <div id="trending" className="section">
          <h2>Trending Now</h2>
          <div className="card-container-div">
            <CardBuilder arr={trending.filter((item)=> filter === 'All'? item: filter == item.category)} limit={4} />
          </div>
        </div>
        <div id="team" className="section">
          <h2>Team Picks</h2>
          <div className="card-container-div">
            
            <CardBuilder arr={recomended} limit={4} />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default CoursesHome;
