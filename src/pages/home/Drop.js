import React, { useEffect, useRef, useState } from "react";
import { recomended } from "../courses/CoursesHome";
import { CardBuilder } from "../courses/CoursesHome";
import { category } from "../courses/CoursesHome";
import { addIcon } from "../courses/CoursesHome";
import kart from "../../images/slide.jpg"

function Drop({ onClickOutside, show }) {
  const [offerSwitch, setOfferSwitch] = useState(0);
  const [filter, setFilter] = useState(category[1]);
  const ref = useRef();

  const selcectOffer = (e) => {
    const list = document.querySelectorAll(".offer");
    list.forEach((item) => {
      item.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
    setOfferSwitch(offerSwitch === 0 ? 1 : 0);
  };

  useEffect(()=>{
    document.body.classList.add("disable-scroll");
    console.log('hi');
    return ()=>document.body.classList.remove("disable-scroll");
  }, [])

  useEffect(() => {
    setOfferSwitch(0);
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  if (!show) return null;

  const cardBuilder = (arr = recomended, limit= 4) => (
    <>
      {arr.map((item, index) => {
        if (limit != null && index >= limit) return;
        return (
          <div className="card" key={index}>
            <img src={kart} alt="" />
            <div className="body">
              <h4>Event{" "}{index+1}</h4>
              <p>{item.description}</p>
              <div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="drop-menu" ref={ref}>
      <ul>
        <li className="offer clicked" onClick={selcectOffer}>
          Courses
        </li>
        <li className="offer" onClick={selcectOffer}>
          Events
        </li>
      </ul>
      <div className="lists">
        {offerSwitch === 0 ? (
          <>
            <div className="courses">
              <ul>
                {category.map((item, index) => {
                  if (index != 0)
                    return (
                      <li
                        onMouseEnter={() => {
                          console.log("hi");
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
                <CardBuilder
                  arr={recomended.filter((item) => filter === item.category)}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="events">
              <ul>
                <li>
                <span class="material-symbols-outlined">event_list</span>
                  Current Events
                </li>
                <li>
                  <span class="material-symbols-outlined">event_upcoming</span>
                  Upcoming Events
                </li>
                <li>
                  <span class="material-symbols-outlined">stars</span>Sponsors
                </li>
              </ul>
              <div className="cards">
                {cardBuilder()}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Drop;
