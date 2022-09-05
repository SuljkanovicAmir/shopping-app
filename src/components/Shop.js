import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Fold from '../styles/images/banner_galaxy-z-fold4.png'

function Shop() {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    axios.get('.../db.json')
    .then(response => {
        console.log(response.data)
        setProducts(response.data)
    })
    .catch(err => {
      console.log(err)
    })
})

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
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
          <div className='fold'>
            <img src={Fold} alt='fold'/>
            <figcaption>Samsung Galaxy S22</figcaption>
          </div>
      </div>
    </div>
  )
}

export default Shop