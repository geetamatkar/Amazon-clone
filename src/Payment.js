import React from 'react'
import './Payment.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
             {/* Delivery address */}
             <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment__address'>
                    <p>Email : {user?.email} </p>
                    <p>1111, S Michigan Ave</p>
                    <p>Chicago, IL</p>

                </div>

             </div>

             {/* Review items */}
             <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items</h3>
                </div>

                <div className='payment__items'>
                    {basket.map( item => 
                        <CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                        />
                    
                    )}
                </div>
                
             </div>

             {/* Payment method */}
             <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>

                </div>

                <div className='payment__details'>

                </div>
                
             </div>
        </div>

    </div>
  )
}

export default Payment