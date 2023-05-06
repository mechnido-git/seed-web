import React, { useEffect, useRef } from 'react'

function ProfileDrop({userName, onClickOutside, show, signOut}) {
    const ref = useRef()
    useEffect(() => {
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
    <div className="options" ref={ref}>
                <h3>{userName}</h3>
                <ul>
                  <li>My Account</li>
                  <li>My Courses</li>
                  <li>My Events</li>
                  <li onClick={signOut}>Sign Out</li>
                </ul>
              </div>
  )
}

export default ProfileDrop