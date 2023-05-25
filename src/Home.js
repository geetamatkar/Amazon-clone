import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
      <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
      />

      <div className='home__rows'>
        <Product 
        title="BTFBM Women 2023 Summer Halter Neck Dresses Sleeveless Casual Floral Polka Dot Leopard Print Short Boho Ruffle Sundress" price={15.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZ5J6blNvdke0-JJZj092H_o7aKDCC9Pvvo14-ucz4w&usqp=CAU&ec=48600113
        " rating={4} />
        <Product 
        title="Apple iPhone 14, 128GB, Midnight" price={1299} image="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY436_FMwebp_QL65_.jpg"
        rating={5}
        />
        
        {/*product*/}
      </div>

      <div className='home__rows'>
        <Product 
        title="PUMA Mens Wild Rider Ls Lace Up Sneakers Casual Shoes Casual - Black" price={59.99} image="https://m.media-amazon.com/images/I/513xypgrI1L._AC_UL640_FMwebp_QL65_.jpg"
        rating={5}/>
        <Product
        title="Dove Advanced Hair Series Oxygen Moisture, Shampoo and Conditioner Set, 12 Ounce Each" price={23.92} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxWBJcpvrFk1IhM89tJdlZshA7wjB61kDKztgsXbIJQ&usqp=CAU&ec=48600113"
        rating={3}
        />
        <Product
        title="Avatar 4k UHD" price={33.99} image="https://m.media-amazon.com/images/I/81SLoj0EmAL._AC_UY436_FMwebp_QL65_.jpg"
        rating={4}
        />
        {/*product*/}
      </div> 

      <div className='home__rows'>
        <Product
        title="Lay's Kettle Cooked Jalapeno Chips (Pack of 40)" price={23.29}
        image="https://m.media-amazon.com/images/I/81JQG6WmV2L._AC_UL640_FMwebp_QL65_.jpg" rating="5"/>
        {/*product*/}
      </div>  

        

      </div>
      

    </div>
  )
}

export default Home