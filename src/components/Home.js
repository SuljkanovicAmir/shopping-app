import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";


function Home() {

  return (
    <motion.div className="home-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: '0.4',
       }}
    >
      <div className='home'>
        <motion.div className="home-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
          ease: "easeInOut",
          duration: '0.4',
          delay: '0.1'
        }}>
          <h1>Galaxy Z Fold4</h1>
          <p>Now available for preorder, shipping December, 2022.</p>
          <button><NavLink to="/shop">SHOP NOW</NavLink></button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home