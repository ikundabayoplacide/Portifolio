import React from 'react'
import './Testmonies.css'
import  image1 from'../../Assets/beauty1.jpg';
import  image2  from'../../Assets/beauty2.jpg'
import  image3 from'../../Assets/beauty5.webp'
import jane from '../../Assets/jane.jpg'
import {  Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

const Testmonies = () => {
  return (
    <section id='testmonies'>
      <h5>Review from clients</h5>
      <h2>Testimonies</h2>
      <Swiper className="container about_testimonies"
     pagination={{
      type: 'progressbar',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
      >
        <SwiperSlide className='clientDetails'>
          <div className="clientImage">
          <img src={image1} alt="image1" width={70}/>
          </div>
          <h5 className='client_name'> John Gacamumakuba</h5>
          <small className='message_review'>  Each of these elements plays a crucial role
           different visual effects and convey specific meanings or emotions.
           </small>
        </SwiperSlide>
        <SwiperSlide className='clientDetails'>
          <div className="clientImage">
          <img src={jane} alt="me" width={70}/>
          </div>
          <h5 className='client_name'> John Gacamumakuba</h5>
          <small className='message_review'>  Each of these elements plays a crucial role
           different visual effects and convey specific meanings or emotions.
           </small>
        </SwiperSlide>
        <SwiperSlide className='clientDetails'>
          <div className="clientImage">
          <img src={image2} alt="image1" width={70}/>
          </div>
          <h5 className='client_name'> John Gacamumakuba</h5>
          <small className='message_review'>  Each of these elements plays a crucial role
           different visual effects and convey specific meanings or emotions.
           </small>
        </SwiperSlide>
        <SwiperSlide className='clientDetails'>
          <div className="clientImage">
          <img src={image3} alt="image1" width={70} />
          </div>
          <h5 className='client_name'> John Gacamumakuba</h5>
          <small className='message_review'>  Each of these elements plays a crucial role
           different visual effects and convey specific meanings or emotions.
           </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testmonies
