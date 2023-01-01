import React from 'react'
import './quotes.css'
import Avatar1 from '../../assets/Avatar1.JPG'
import Avatar2 from '../../assets/Avatar2.JPG'
import Avatar3 from '../../assets/Avatar3.JPG'
import Avatar4 from '../../assets/Avatar4.JPG'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avatar1, 
    author: 'Insert',
    quote: 'lorem20'
  },
  {
    avatar: Avatar3, 
    author: 'Insert',
    quote: 'lorem20'
  },
  {
    avatar: Avatar2, 
    author: 'Insert',
    quote: 'lorem20'
  },
  {
    avatar: Avatar4, 
    author: 'Insert',
    quote: 'lorem20'
  },
]


const Quotes = () => {
  return (
    <section id='quotes'>
      <h5>What's Life Without Some Random</h5>
      <h2>Quotes</h2>

      <Swiper className="container quotes_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, author, quote}, index) => {
            return (
              <SwiperSlide key={index} className="quotes">
          <div className="quote_image">
          <img src={avatar} />
          </div>
          <h5 className='quote_name'>{author}</h5>
          <small className='quote_details'>{quote}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Quotes