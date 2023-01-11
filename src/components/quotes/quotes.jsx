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
    author: 'Dalinar Kholin - The Stormlight Archives',
    quote: '“A journey will have pain and failure. It is not only the steps forward that we must accept. It is the stumbles. The trials. The knowledge that we will fail. That we will hurt those around us. But if we stop, if we accept the person we are when we fail, the journey ends. That failure becomes our destination.”'
  },
  {
    avatar: Avatar3, 
    author: 'Nick Cave',
    quote: '"I am a big fan of teatowels and am always on the lookout for a good one."'
  },
  {
    avatar: Avatar2, 
    author: 'Kurt Vonnegut, Slaughterhouse-Five',
    quote: '“There is no beginning, no middle, no end, no suspense, no moral, no causes, no effects. What we love in our books are the depths of many marvelous moments seen all at one time.”'
  },
  {
    avatar: Avatar4, 
    author: 'Emmeline Pankhurst',
    quote: '“I am what you call a hooligan.”'
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