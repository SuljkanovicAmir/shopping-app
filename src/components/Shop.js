import React from 'react'
import { NavLink,Outlet} from "react-router-dom";
import CloseBtn from '../styles/images/close.svg'
import { motion } from 'framer-motion'



import { useState } from 'react';


const sortOptions = ["name", "price"]


function Shop({ handleSort, handleReset }) {

  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebar = event => {
    setSidebarActive(current => !current);
  };


  return (
    <motion.div className="shopDiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }}
        transition={{
          ease: "easeInOut",
          duration: '0.4',
         }}
      >
      <div className={isSidebarActive ? 'sidebar show' : 'sidebar'}>
        <button className={ isSidebarActive ? 'closeFilters show' : 'closeFilters'} onClick={handleSidebar}>
          <img src={CloseBtn} alt='cart menu' />
        </button>
        <h1>Shop</h1>
        <ul>
        <NavLink to="/shop"><li onClick={handleSidebar} className='sidebarList'>All products</li></NavLink>
        <NavLink to="/shop/samsung"><li onClick={handleSidebar} className='sidebarList'>Samsung</li></NavLink>
        <NavLink to="/shop/apple"><li onClick={handleSidebar} className='sidebarList'>Apple</li></NavLink>
        <NavLink to="/shop/xiaomi"><li onClick={handleSidebar} className='sidebarList'>Xiaomi</li></NavLink>
        <NavLink to="/shop/huawei"><li onClick={handleSidebar} className='sidebarList'>Huawei</li></NavLink>
        <div className='selection'>
            <h1>Sort by</h1>
            <div>
              {sortOptions.map ((item, index) => (
                <li onClick={handleSidebar} className='sortList' key={index}><button onClick={handleSort} value={item} >{item}</button></li>
              ))}
            </div>
        </div>
        <NavLink onClick={handleSidebar} to="/shop"><button className='resetBtn' onClick={handleReset}>Reset Filters</button></NavLink>
      </ul>
      </div>
      <button onClick={e => handleSidebar()} className='filters'>Filters</button>
      <Outlet />
    </motion.div>
)}

export default Shop