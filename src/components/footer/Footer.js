import React from 'react'
import './footer.css'
import { HashLink } from 'react-router-hash-link'

function Footer() {
  return (
    <div className="footer">
    <div className="links">
    <div className="section">
        <h3>Home</h3>
        <ul>
          <li>
            <HashLink smooth to='/#achievements' >Achievements</HashLink>
          </li>
          <li>
            <HashLink smooth to='/#testimonials' >Testimonials</HashLink>
          </li>
          <li>
            <HashLink smooth to='/#sponsors' >Sponsors</HashLink>
          </li>
          <li>
            <HashLink smooth to='/#faq' >FAQ</HashLink>
          </li>
        </ul>
      </div>  
      <div className="section">
        <h3>Cources</h3>
        <ul>
          <li>
            <HashLink smooth to='/menu/courses/#trending' >Trending now</HashLink>
          </li>
          <li>
          <HashLink smooth to='/menu/courses/#team' >Team Picks</HashLink>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Events</h3>
        <ul>
          <li>
            <HashLink smooth to='/menu/events/#gallery' >Gallery</HashLink>
          </li>
          <li>
            <HashLink smooth to='/menu/events/#upcomming' >Upcoming Events</HashLink>
          </li>
        </ul>
      </div>

    </div>
    <p>© 2023, Mechnido Pvt. Ltd. All Rights Reserved</p>
  </div>
  )
}

export default Footer