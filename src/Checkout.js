import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' 
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
            alt=''/>

            <div>
                <h2 className='checkout__title'>Items in your cart</h2>

                {basket.map(item => (
                   <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                   />
                ))}

                {/* 

                
                   <CheckoutProduct
                      
                       title='Hover-1 Pro Series Boss Foldable Electric Scooter with 500W Brushless Motor, 20 mph Max Speed, 10” Honeycomb Tires and 24 Mile Range'
                       image='https://m.media-amazon.com/images/I/61JMrq7RFaL._AC_UL640_FMwebp_QL65_.jpg'
                       price= {649.99}
                       rating={5}
                   />

                   <CheckoutProduct
                      
                       title='Hover-1 Pro Series Boss Foldable Electric Scooter with 500W Brushless Motor, 20 mph Max Speed, 10” Honeycomb Tires and 24 Mile Range'
                       image='https://m.media-amazon.com/images/I/61JMrq7RFaL._AC_UL640_FMwebp_QL65_.jpg'
                       price= {649.99}
                       rating={5}
                   /> */}

        
               



                {/* CheckoutProduct */}
            </div>
        </div>

        <div className='checkout__right'>
            < Subtotal />
            

        </div>
        
    </div>
  )
}

export default Checkout