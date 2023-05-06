import React, { useEffect, useRef, useState } from 'react'


function Drop({ onClickOutside, show }) {
    const [offerSwitch, setOfferSwitch] = useState(0);
    const ref = useRef()

    const selcectOffer = (e) => {
        const list = document.querySelectorAll(".offer");
        list.forEach((item) => {
          item.classList.remove("clicked");
        });
        e.target.classList.add("clicked");
        setOfferSwitch(offerSwitch === 0? 1 : 0);
      };

      useEffect(() => {
        setOfferSwitch(0)
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [ onClickOutside ]);


      if(!show) return null

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
      <ul>
        {offerSwitch === 0 ? (
          <>
            <li>
              <span class="material-symbols-outlined">trending_up</span>
              Trending
            </li>
            <li>
              <span class="material-symbols-outlined">diversity_3</span>
              Team Picks
            </li>
            <li>
              <span class="material-symbols-outlined">campaign</span>
              Marketing
            </li>
            <li>
              <span class="material-symbols-outlined">prescriptions</span>
              Services & Events
            </li>
            <li>
              <span class="material-symbols-outlined">perm_media</span>
              Media & Content
            </li>
            <li>
              <span class="material-symbols-outlined">
                design_services
              </span>
              Design Elements
            </li>
            <li>
              <span class="material-symbols-outlined">hub</span>
              Communication
            </li>
          </>
        ) : (
          <>
            <li><span class="material-symbols-outlined">event_list</span>Current Events</li>
            <li><span class="material-symbols-outlined">gallery_thumbnail</span>Gallery</li>
            <li><span class="material-symbols-outlined">event_upcoming</span>Upcoming Events</li>
            <li><span class="material-symbols-outlined">stars</span>Sponsors</li>
          </>
        )}
      </ul>
    </div>
  </div>
  )
}

export default Drop