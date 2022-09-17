import React from 'react'
import { useState, useEffect } from "react";
import CloseBtn from '../styles/images/close.svg'


function Cart({items, handleItemCount, isCartActive, handleCart, setCart}) {

  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let total = 0;
    items.map((item) => (total += item.quantity * item.price));
    setPrice((Math.round(total * 100) / 100).toFixed(2));
  };

  const handleRemove = (id) => {
    const arr = items.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice(); 
  };

  useEffect(() => {
    handlePrice()
  })


  return (
    <>
    <div className={isCartActive ? 'cartBackdrop' : 'noBackdrop'} onClick={handleCart}></div>
    <div className={isCartActive ? 'cartDiv show' : 'cartDiv'}>
      <button  className="closeCart" onClick={handleCart}>
        <img src={CloseBtn} alt='cart menu' />
      </button>
      <h1>Your Shopping <br></br>Cart</h1>
      {items.map((product, index) => (
      <div className='itemsInBasket' key={index + 1} id={index + 1}>
        <div className='cartImgDiv'>
            <img src={product.src} alt='phone'/>
        </div>
        
        <div className='itemsDescription'>
          <figcaption>{product.name}</figcaption>
          <p>${product.price}</p>
          <div> 
            <button onClick={() => handleItemCount(product, -1)}>-</button>
            <p>{product.quantity}</p>
            <button onClick={() => handleItemCount(product, 1)}>+</button>
            <button onClick={() => handleRemove(product.id)}>D</button>
          </div>
        </div>
      </div>
    ))}
    <div className="totalPrice">Subtotal: ${price}</div>
    <a href="as" className='checkout'><div>Checkout</div></a>
    </div>
    </>
  )
}

export default Cart