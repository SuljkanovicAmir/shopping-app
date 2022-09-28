import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from './Cart'
import CartImg from '../styles/images/cart.png'
import SearchBtn from '../styles/images/search.svg'
import CloseBtn from '../styles/images/close.svg'


function Nav({items, handleItemCount, isCartActive, handleCart, setCart, setValue, handleSearch}) {

const [isActive, setIsActive] = useState(false);


const handleClick = event => {
    setIsActive(current => !current);
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
            <span>{items.length}</span>
              <img src={CartImg} alt='cart menu' />
            </button>
          </ul>
        </nav>
        <div className={isActive ? 'inputDiv show' : 'inputDiv'}>
          <button  className="closeInput" onClick={handleClick}>
             <img src={CloseBtn} alt='cart menu' />
          </button>
          <form onSubmit={handleSearch}>
          <button type='submit' className='submitSearch'>
            <img src={SearchBtn} alt='search'/>
          </button>
          <input 
            type={'text'} 
            maxLength="25" 
            placeholder='Search products'
            onChange={(e) => setValue(e.target.value)}
            />
            </form>
        </div>
        <Cart 
          handleItemCount={handleItemCount} 
          items={items} 
          handleCart={handleCart} 
          isCartActive={isCartActive}
          setCart={setCart}
          />
    </div>
  )
}

export default Nav