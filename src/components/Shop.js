import React from 'react'



function Shop({ handleCount, products, handleBag }) {

  return (
    <div className='shopDiv'>
      <div className='sidebar'>
        <h1>Shop</h1>
        <ul>
          <li>All products</li>
          <li>Samsung</li>
          <li>Apple</li>
          <li>Xiaomi</li>
          <li>Huawei</li>
        </ul>
      </div>
      <div className='mainpage'>
          {products.map((product, index) => (
            <div className='products' key={index + 1} id={index + 1}>
              <img src={product.src} alt='phone'/>
              <figcaption>{product.name}</figcaption>
              <p>${product.price}</p>
              <button onClick={e => handleBag(product)}>Add to cart</button>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Shop