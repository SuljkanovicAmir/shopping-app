import React from 'react'

function Huawei({products, handleBag}) {
  return (
    <div className='mainpage'>
          {products.filter((item) => item.brand === 'Huawei').map((product, index) => (
            <div className='products' key={index + 1} id={index + 1}>
              <img src={product.src} alt='phone'/>
              <figcaption>{product.name}</figcaption>
              <p>${product.price}</p>
              <button className='addToCart' onClick={e => handleBag(product)}>Add to cart</button>
          </div>
          ))}
        	
    </div>
  )
}

export default Huawei