import React, { useContext, useEffect, useState } from "react";
import "./coursesHome.css";
import courses from "../../images/courses.jpg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import image from "../../images/slide.jpg";
import slide from "../../images/slide1.png"
import thumbnail from "../../images/courses.jpg"
import "@splidejs/react-splide/css";
import { useNavigate, useOutletContext } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { StoreContext } from "../../store/StoreContext";
import Enroll from "../payment/Enroll";
import Footer from "../../components/footer/Footer";

export const recomended = [
  {
    name: "Video Title 1",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Marketing",
  },
  {
    name: "Video Title 2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    rating: "4.4",
    thumbnail: courses,
    category: "Sell Online",
  },
  {
    name: "Video Title 3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Services & Events",
  },
  {
    name: "Video Title 4",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Media Content",
  },
  {
    name: "Video Title 5",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Design Elements",
  },
  {
    name: "Video Title 6",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Communication",
  },
];

export const trending = [
  {
    name: "Video Title 5",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Design Elements",
  },
  {
    name: "Video Title 6",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Communication",
  },
  {
    name: "Video Title 7",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Marketing",
  },
  {
    name: "Video Title 8",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    rating: "4.4",
    thumbnail: courses,
    category: "Sell Online",
  },
];

export const CardBuilder = ({ arr, limit, viewDetails }) => (
  <>
    {arr.map((item, index) => {
      if (limit != null && index >= limit) return;
      return (
        <div className="card" key={index} onClick={() => viewDetails(item.order)}>
          <img src={require("../../images/courses.jpg")} alt="" />
          <div className="body">

            <h4>
              {item.flag ? <>The Flagship <br /></> : ''}
              {item.name}
            </h4>
            <p>{item.description_L[2].slice(0, 100)}...</p>
            <div>
              {item.rating && <h5>Rating:{item.rating}</h5>}
            </div>
          </div>
        </div>
      );
    })}
  </>
);

export const category = [
  "All",
  "PRODUCT DEVELOPMENT",
  "MANAGEMENT",
  "DESIGN ELEMENTS",
  "PERSONAL DELVELOPMENT",
  "BUSINESS",
  "SOFTWARE",
];

export const addIcon = (item) => {
  switch (item) {
    case "All":
      return "apps";
    case "PRODUCT DEVELOPMENT":
      return "campaign";
    case "MANAGEMENT":
      return "sell";
    case "PERSONAL DELVELOPMENT":
      return "prescriptions";
    case "BUSINESS":
      return "perm_media";
    case "DESIGN ELEMENTS":
      return "design_services";
    case "SOFTWARE":
      return "hub";
  }
};


export const filterItems = (filter, setFilter, item, e) => {
  e.preventDefault()
  //const btns = document.querySelectorAll('.filter')
  const active = document.querySelectorAll(".active");
  const allBtn = document.querySelectorAll(".All");
  console.log(active);
  if (active[0]) {
    if ((active[0]?.innerHTML == e.target.closest(".filter").innerHTML) || (active[1]?.innerHTML == e.target.closest(".filter").innerHTML)) {
      active[0]?.classList.toggle("active");
      active[1]?.classList.toggle("active");
      allBtn[0]?.classList.add("active");
      allBtn[1]?.classList.add("active");
    } else {
      active[0]?.classList.remove("active");
      active[1]?.classList.remove("active");
      //e.target.classList.add("active");
      category.map(item=>{

        if(e.target.closest(".filter").className.includes(item.replace(" ", "-"))){
          const btns = document.querySelectorAll(`.${item.replace(" ", "-")}`)
          btns.forEach(item=> item.classList.add("active"))
        }
      })
    }
  } else {
    e.target.closest(".filter").classList.add("active");
  }
  setFilter(filter === "All" ? item : filter == item ? "All" : item);
};

function CoursesHome() {
  const {filter, setFilter} =  useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  const [recommended, setRecommended] = useState([])
  const [trending, setTrending] = useState([])
  const [team, setTeam] = useState([])

  const [currentSlide, setCurrentSlide] = useState(0);
  const { register, setRegister } = useOutletContext();

  const { courseList, courses, userId } = useContext(StoreContext)

  const [buy, setbuy] = useState(false)

  const navigate = useNavigate()



  useEffect(() => {
    if (courses){
      setRecommended(courses.filter((item, i) => i < 4))
      setTrending(courses?.filter((item, i) => i > 3 && i < 8))
      setTeam(courses?.filter((item, i) => i > 7 && i < 12))
      setLoading(false)
    }
  }, [courses])

  useEffect(()=>{
    if(!loading){
      const loc = window.location.href.split("/")
      const last = loc[loc.length -1]
      if(last[0] === "#"){
        const id = last.slice(1, last.length)
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
      }
    }
  }, [loading])

  const getCours = (index) => {
    navigate(`/menu/courses/details/${index}`)
  }


  const viewDetails = () => {
    navigate(`/menu/courses/details/${currentSlide}`)
  }

  const enroll = () => {
    //navigate(`/menu/courses/enroll/${currentSlide}`)
    let flag = false
    if (userId) {
      console.log(courses);
      console.log(courses[currentSlide]);
      courses[currentSlide].enrolled?.forEach(item => {
        if (item.userId === userId) flag = true
      })
      if (flag) return window.alert("Alredy enrolled")
      setbuy(true)

    } else {
      window.alert("Sign in First")
    }
  }

  return (
    <>
      <div className="courses-home">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <div className="slides">
              <Splide
                tag="section"
                aria-labelledby="My Favorite Images"
                options={{
                  speed: 1000,
                  pauseOnHover: false,
                  pauseOnFocus: true,
                  keyboard: true,
                  gap: "1rem",
                  width: "100%",
                  pagination: true,
                  arrows: window.innerWidth < 770 ? false : true,
                }}
                onMove={(splide, prev, next) => {
                  setCurrentSlide(splide.index);
                }}
              >
                {courses?.map((item, i) => <SplideSlide key={i}>
                  <img src={courseList[i].slide} style={{ objectFit: "contain", width: "100%" }} alt="" />
                </SplideSlide>)}
              </Splide>

              <div className="btns">
                <button onClick={enroll}>Enroll</button>
                <button onClick={viewDetails}>Know more</button>
              </div>
            </div>
            <div className="fixed">
              {category.map((item, index) => (
                <button
                  id={index === 0 ? "All" : null}
                  className={filter === item ? `filter active ${item}` : `filter ${item.replace(" ", "-")}`}
                  onClick={(e) => filterItems(filter, setFilter, item, e)}
                  key={index}
                >
                  <span class="material-symbols-outlined">{addIcon(item)}</span>
                  <div>{item.toLowerCase()}</div>
                </button>
              ))}
            </div>
            <section className="main-div">
              <div id="recommended" className="section">
                <h2>Recommended for You</h2>
                <div className="card-container-div">
                  {/* <CardBuilder
                    arr={recomended.filter((item) =>
                      filter === "All" ? item : filter == item.category
                    )}
                    limit={4}
                  /> */}
                  <CardBuilder
                    arr={recommended.filter((item) =>
                      filter === "All" ? item : filter == item.category
                    )}
                    limit={4}
                    viewDetails={getCours}
                  />
                </div>
              </div>
              <div id="trending" className="section">
                <h2>Trending Now</h2>
                <div className="card-container-div">
                  <CardBuilder
                    arr={trending.filter((item) =>
                      filter === "All" ? item : filter == item.category
                    )}
                    limit={4}
                    viewDetails={getCours}
                  />
                </div>
              </div>
              <div id="team" className="section">
                <h2>Team Picks</h2>
                <div className="card-container-div">
                  {/* <CardBuilder arr={recomended} limit={4} /> */}
                  <CardBuilder
                    arr={team.filter((item) =>
                      filter === "All" ? item : filter == item.category
                    )}
                    limit={4}
                    viewDetails={getCours}
                  />
                </div>
              </div>
            </section>
            <Footer />
          </>
        )}

      </div>
      {buy && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setbuy(false)}></div>
          <Enroll index={currentSlide} />
        </div>
      )}
    </>
  );
}

export default CoursesHome;
