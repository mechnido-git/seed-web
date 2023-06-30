import React, { useContext, useEffect, useRef, useState } from "react";
import { recomended } from "../courses/CoursesHome";
import { CardBuilder } from "../courses/CoursesHome";
import { category } from "../courses/CoursesHome";
import { addIcon } from "../courses/CoursesHome";
import kart from "../../images/slide.jpg";
import sp from "../../images/sponsor.jpg";
import { StoreContext } from "../../store/StoreContext";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Drop({ onClickOutside, show, dropIndex, redirect, setRedirect, setSignIn }) {
  const [offerSwitch, setOfferSwitch] = useState(0);
  const [filter, setFilter] = useState(category[1]);
  const [eventSwitch, setEventSwitch] = useState(0);
  const [user, setUser] = useState(null)
  const ref = useRef();
  const navigate = useNavigate()

  console.log(dropIndex);

  const { setCourses, courses, setUserName } = useContext(StoreContext);

  const selcectOffer = (e) => {
    const list = document.querySelectorAll(".offer");
    list.forEach((item) => {
      item.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
    if(offerSwitch != e.target.dataset.index) setOfferSwitch(offerSwitch === 0 ? 1 : 0);
  };

  const doFetch = async () => {
    const q = query(collection(db, "courses"), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot?.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      console.log(doc.data());
      temp.push({ ...doc.data(), id: doc.id });
    });
    console.log(temp);
    setCourses(temp);

    // const washingtonRef = doc(db, "courses", "r8weEIiW3iJ8ocAkeTtJ");

    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
      
    // });
  };

  useEffect(() => {
    doFetch()
    onAuthStateChanged(auth, (user)=>setUser(user))
    document.body.classList.add("disable-scroll");
    return () => document.body.classList.remove("disable-scroll");
  }, []);

  useEffect(() => {
    setOfferSwitch(0);
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.getElementById('root').addEventListener("click", handleClickOutside);
    return () => {
      document.getElementById('root').removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  if (!show) return null;

  const cardBuilder = (arr = recomended, limit = 4) => (
    <>
      {arr.map((item, index) => {
        if (limit != null && index >= limit) return;
        return (
          <div className="card" key={index}>
            <img src={kart} alt="" />
            <div className="body">
              <h4>Event {index + 1}</h4>
              <p>{item.description}</p>
              <div></div>
            </div>
          </div>
        );
      })}
    </>
  );
  const li = [1, 2, 3, 4, 5, 6];

  const sponserCard = () => (
    <>
      {li.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img  style={{width: '5rem', borderRadius: '50%', padding: '1rem'}} src={sp} alt="" />
          </div>
        );
      })}
    </>
  );

  const viewCourseDetails = (index) => {
      if(user){
        navigate(`/menu/courses/details/${index}`)
      }else{
        setRedirect(`/menu/courses/details/${index}`)
        return setSignIn(true)
      }
  }


  return (
    <div className="drop-menu" ref={ref}>
      {/* <ul>
        <li className="offer clicked" data-index={0} onClick={selcectOffer}>
          Courses
        </li>
        <li className="offer" data-index={1} onClick={selcectOffer}>
          Events
        </li>
      </ul> */}
      <div className="lists">
        {parseInt(dropIndex) === 0 ? (
          <>
            <div className="courses">
              <ul>
                {category.map((item, index) => {
                  if (index != 0)
                    return (
                      <li
                        onMouseEnter={() => {
                          console.log(item);
                          setFilter(item);
                        }}
                        key={index}
                      >
                        <span class="material-symbols-outlined">
                          {addIcon(item)}
                        </span>
                        {item}
                      </li>
                    );
                })}
              </ul>
              <div className="cards">
                {courses.length !== 0 && <CardBuilder
                  arr={courses}
                  viewDetails={viewCourseDetails}
                />}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="events">
              <ul>
                <li
                  onMouseEnter={() => {
                    setEventSwitch(0);
                  }}
                >
                  <span class="material-symbols-outlined">event_list</span>
                  Current Events
                </li>
                <li
                  onMouseEnter={() => {
                    setEventSwitch(1);
                  }}
                >
                  <span class="material-symbols-outlined">event_upcoming</span>
                  Upcoming Events
                </li>
              </ul>
              <div className="cards">
                {eventSwitch == 0
                  ? cardBuilder()
                  : eventSwitch == 1
                  ? cardBuilder()
                  : sponserCard()}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Drop;
