import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../provider/reducer'
import {useStateValue} from '../../provider/StateProvider'

const Subtotal = () => {
    const [{basket},dispatch] = useStateValue()
  return (
    
    <div className="subtotal">
    <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                
            />

    <button>Proceed to Checkout</button>
    </div>
  )
}  

export default Subtotal