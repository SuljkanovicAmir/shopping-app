import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from '../styles/images/cart.png'
import SearchBtn from '../styles/images/search.svg'
import CloseBtn from '../styles/images/close.svg'

function Nav({count, items, handleItemCount}) {

  const [isActive, setIsActive] = useState(false);
  const [isCartActive, setCartActive] = useState(false);
    
  const handleClick = event => {
    setIsActive(current => !current);
  };

  const handleCart = event => {
    setCartActive(current => !current);
  };
  
  
  console.log(items)

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
            <span>{count}</span>
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
        <div className={isCartActive ? 'cartBackdrop' : ''}>
          <div className={isCartActive ? 'cartDiv show' : 'cartDiv'}>
            <button  className="closeCart" onClick={handleCart}>
              <img src={CloseBtn} alt='cart menu' />
            </button>
            <h1>Your Shopping <br></br>Cart</h1>
            {items.map((product, index) => (
            <div className='itemsInBasket' key={index + 1} id={index + 1}>
              <img src={product.src} alt='phone'/>
              <div className='itemsDescription'>
                <figcaption>{product.name}</figcaption>
                <p>${product.price}</p>
                <div> 
                  <button onClick={() => handleItemCount(product, -1)}>-</button>
                  <p>{product.amount}</p>
                  <button onClick={() => handleItemCount(product, 1)}>+</button>
                </div>
              </div>
          </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default Nav