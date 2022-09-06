import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Fold from '../styles/images/banner_galaxy-z-fold4.png'

const headers = {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
};
const url = "https://my-json-server.typicode.com/SuljkanovicAmir/shopping-app/db/";


function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get(url, {headers})
    .then(response => {
        console.log(response.data.products)
        setProducts(response.data.products)
       
    })
    .catch(err => {
      console.log(err)
    })
},[])

console.log(products.map(product => product.name))
  return (
    <div className='shopDiv'>
      <div className='sidebar'>
        <h1>Shop</h1>
        <hr></hr>
        <ul>
          <li>All products</li>
          <li>Samsung</li>
          <li>Apple</li>
          <li>Xaomi</li>
          <li>Huawei</li>
        </ul>
      </div>
      <div className='mainpage'>
          {products.map(product => (
            <div className='products'>
              <img src={product.src} alt='phone'/>
              <figcaption>{product.name}</figcaption>
              <p>${product.price}</p>
          </div>
          ))}
          
      </div>
    </div>
  )
}

export default Shop