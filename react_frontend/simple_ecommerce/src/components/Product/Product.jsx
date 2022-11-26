import React from 'react'
import './product.css'
const Product = () => {
  return (

        <div className="product">
            <div className="product__info">
                <p>Title</p>
                <p className="product__price">$43</p>
                <div className="product__rating"></div>
            </div>
            <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" srcset="" />
            <button>Add to basket</button>
        </div>

  )
}

export default Product