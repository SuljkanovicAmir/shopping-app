import React from 'react'
import { NavLink } from "react-router-dom";


function Home() {

  return (
    <div className='home-div'>
      <div className='home'>
        <div className='home-title'>
          <h1>Galaxy Z Fold4</h1>
          <p>Now available for preorder, shipping December, 2022.</p>
          <button><NavLink to="/shop">SHOP NOW</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default Home