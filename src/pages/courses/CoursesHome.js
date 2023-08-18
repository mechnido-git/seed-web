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
import CardLoader from "../../components/cardLoader/cardLoader";
import ImageLoader from "../../components/imageLoader/ImageLoader";
import cancellogo from "../../images/cancel_icon.png";


const getInvoice = (course , user) => {
  let invoice = null;
 
  course.enrolled.forEach(item=>{
    if(item.userId === user.uid){
      invoice = item.invoice
    }
  })
  return invoice
}
export const CardBuilder = ({ arr, limit, viewDetails, loading , user , download}) => (
  <>
    {arr.map((item, index) => {
      // console.log(index);
      if (limit != null && index >= limit) return;
      return (
        <div className="card" key={index} onClick={() => viewDetails(item.order)}>
          {/* <img src={require("../../images/courses.jpg")} alt="" /> */}
          <ImageLoader src={item.poster? item.poster:require("../../images/courses.jpg")} />
          <div className="body">

            <h4>
              {item.flag ? <>The Flagship <br /></> : ''}
              {item.name}
            </h4>
            {item.description && <p>{item?.description[0]?.slice(0, 100)}...</p>}
            <div>
              {item.rating && <h5>Rating:{item.rating}</h5>}
            </div>
        
            {download && getInvoice(item, user) && <div className="invoice">
                <a  onClick={(e)=>e.stopPropagation()} href={getInvoice(item , user)} rel="noreferrer" target="_blank"> <span class="material-symbols-outlined">
                  download
                </span>Invoice </a>
                
              </div>}
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
  "Technology",
  "Production",
  "Master's Programme"
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
    case "Technology":
      return "engineering"
    case "Production":
      return "precision_manufacturing"
    case "Master's Programme":
      return "workspace_premium"
  }
};


export const filterItems = (filter, setFilter, item, e) => {
  e.preventDefault()
  //const btns = document.querySelectorAll('.filter')
  const active = document.querySelectorAll(".active");
  const allBtn = document.querySelectorAll(".All");
  // console.log(active);
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

  const { courseList, courses, userId, setSection } = useContext(StoreContext)
  setSection(1)

  const [buy, setbuy] = useState(false);
 

  const navigate = useNavigate()



  useEffect(() => {
    if (courses){
      console.log(courses);
      setRecommended(courses.filter((item, i) => i < 6))
      setTrending(courses?.filter((item, i) => i > 5 && i < 12))
      setTeam(courses?.filter((item, i) => i > 11 && i < 23))
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

  const checkEnroll = (item)=>{
    let flag = false
    item.enrolled?.forEach(item => {
      if (item.userId === userId) flag = true
    })
    return flag
  }

  const enroll = () => {
    //navigate(`/menu/courses/enroll/${currentSlide}`)
    let flag = false
    if (userId) {
      // console.log(courses);
      // console.log(courses[currentSlide]);
      courses[currentSlide].enrolled?.forEach(item => {
        if (item.userId === userId) flag = true;
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
          <Spinner loading={true} />
        ) : (
          <>
            <div className="slides">
              <Splide
                tag="section"
                aria-labelledby="My Favorite Images"
                options={{
                  speed: 1500,
                  autoplay: true,
                  interval: 3400,
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
                {courses?.map((item, i) =>{
                  let enrolled = checkEnroll(item)
                  //  console.log("this is the value of enroled",enrolled);

                  //  if(enrolled){
                  //   document.getElementById("btnEnroll").className = "disabledbtn";
                  //  }
                   
                  return <SplideSlide key={i}>
                  {/*className="exploreBTN" <img src={courseList[i].slide} style={{ objectFit: "contain", width: "100%" }} alt="" /> */}
                  <ImageLoader src={item.poster? item.poster: courseList[i].slide} style={{ objectFit: "contain", width: "100%" }} />
                  <div className="btns">
                <button  className={enrolled ? "disabledbtn" : null}disabled={enrolled} onClick={ enroll } >{enrolled? "Enrolled": "Enroll"} </button>
                <button  onClick={viewDetails}>Know more</button>
              </div>
                </SplideSlide>})}
              </Splide>


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
                    loading={loading}
                    arr={recommended.filter((item) =>
                      filter === "All" ? item : filter == item.category
                    )}
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
          <div className="blocker" onClick={() => setbuy(false)}>
          
          </div>
        
          <Enroll index={currentSlide} setbuy= {setbuy} />
        </div>
      )}
    </>
  );
}

export default CoursesHome;
