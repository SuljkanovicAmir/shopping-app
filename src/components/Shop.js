import React from 'react'
import { NavLink,Outlet} from "react-router-dom";





const sortOptions = ["name", "price"]


function Shop({ handleSort, handleReset }) {


  return (
    <div className='shopDiv'>
      <div className='sidebar'>
        <h1>Shop</h1>
        <ul>
        <NavLink to="/shop"><li className='sidebarList'>All products</li></NavLink>
        <NavLink to="/shop/samsung"><li className='sidebarList'>Samsung</li></NavLink>
        <NavLink to="/shop/apple"><li className='sidebarList'>Apple</li></NavLink>
        <NavLink to="/shop/xiaomi"><li className='sidebarList'>Xiaomi</li></NavLink>
        <NavLink to="/shop/huawei"><li className='sidebarList'>Huawei</li></NavLink>
        <div className='selection'>
            <h1>Sort by</h1>
            <div>
              {sortOptions.map ((item, index) => (
                <li className='sortList' key={index}> <button onClick={handleSort} value={item} >{item}</button></li>
              ))}
            </div>
        </div>
        <NavLink to="/shop"><button className='resetBtn' onClick={handleReset}>Reset Filters</button></NavLink>
      </ul>
      </div>
      <Outlet />
     
    </div>
)}

export default Shop