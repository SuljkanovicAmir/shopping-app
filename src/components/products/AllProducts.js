import { motion  } from 'framer-motion'
import React from 'react'

function AllProducts({products, handleBag}) {

  
  return (
    <div className='mainpage'>
          {products.map((product, index) => (
            <motion.div className='products' key={index + 1} id={index + 1}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: '0.5',
              delay: 0.4,
             }}>
              <img src={product.src} alt='phone'/>
              <figcaption>{product.name}</figcaption>
              <p>${product.price}</p>
              <button className='addToCart' onClick={e => handleBag(product)}>Add to cart</button>
          </motion.div>
          ))}
        	
    </div>
  )
}

export default AllProducts