import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
    <div className="links">
      <div className="section">
        <h3>Cources</h3>
        <ul>
          <li>
            <a href="#">Trending Now</a>
          </li>
          <li>
            <a href="#">Team Picks</a>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Events</h3>
        <ul>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Upcoming Events</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer