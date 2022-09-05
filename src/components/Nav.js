import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from '../styles/images/cart.png'
import SearchBtn from '../styles/images/search.svg'
import CloseBtn from '../styles/images/close.svg'

function Nav() {

  const [isActive, setIsActive] = useState(false);
  const [isCartActive, setCartActive] = useState(false);
    
  const handleClick = event => {
    setIsActive(current => !current);
  };

  const handleCart = event => {
    setCartActive(current => !current);
  };

  return (
    <div  className="navContainer">
         <nav>
            <ul className={isActive ? 'ul-nav show' : 'ul-nav'}>
                <NavLink activeclassname="active" className={"tab"} to="/home">MobileStore</NavLink>
                <NavLink activeclassname="active" className={"tab"} to="/shop">Shop</NavLink>
                <button  className={isActive ? 'searchBtn show' : 'searchBtn'} onClick={handleClick}>
                    <img src={SearchBtn} alt='search'/>
                </button>
                <button  className="cart" onClick={handleCart}>
                    <img src={Cart} alt='cart menu' />
                </button>
            </ul>
        </nav>
        <div className={isActive ? 'inputDiv show' : 'inputDiv'}>
          <button  className="closeInput" onClick={handleClick}>
             <img src={CloseBtn} alt='cart menu' />
          </button>
          <button  className='submitSearch'>
            <img src={SearchBtn} alt='search'/>
          </button>
          <input type={'text'} maxLength="25" placeholder='Search products'/>
        </div>
        <div className={isCartActive ? 'cartDiv show' : 'cartDiv'}>
          <button  className="closeCart" onClick={handleCart}>
             <img src={CloseBtn} alt='cart menu' />
          </button>
          
        </div>
    </div>
  )
}

export default Nav