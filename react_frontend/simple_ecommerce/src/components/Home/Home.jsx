

import React from 'react'
import './home.css'
import Product from '../Product/Product'

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />
                <div className="home__row">
                    <Product
                        id = "123456"
                        title = "PRODUCT 1"
                        price = {11.96}
                        rating = {5}
                        image = "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                    />
                     <Product
                        id = "1234561"
                        title = "PRODUCT 2"
                        price = {11.96}
                        rating = {3}
                        image = "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                            id = "123456 sa"
                            title = "PRODUCT 3"
                            price = {112}
                            rating = {4}
                            image = "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                        />
                     <Product
                        id = "123456fa"
                        title = "PRODUCT 3"
                        price = {13}
                        rating = {1}
                        image = "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                    />
                     <Product
                        id = "123456qwe"
                        title = "PRODUCT 4"
                        price = {11.3}
                        rating = {2}
                        image = "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                    />
                </div>
                <div className="home__row">
                <Product
                        id = "123456qer "
                        title = "PRODUCT 5"
                        price = {14}
                        rating = {5}
                        image = "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home