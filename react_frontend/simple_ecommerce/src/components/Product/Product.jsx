import React from 'react'
import './product.css'
import { useStateValue } from '../../provider/StateProvider'

const Product = (props) => {

  const [state,dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:props.id,
        image:props.image,
        price:props.price,
        rating:props.rating,
      },
    });
  }

  return (

        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                  <small>$</small>
                  <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                  {Array(props.rating).fill().map((_,i)=>(
                    <p>⭐</p>
                  ))}
                </div>
            </div>
            <img src={props.image} alt="" srcset="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>

  )
}

export default Product