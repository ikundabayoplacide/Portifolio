import React from 'react'
import './Testmonies.css'
import  image1 from'../../Assets/beauty1.jpg';
import  image2  from'../../Assets/Guys.jpg'
import  guy from'../../Assets/guy.jpg';
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
          <h5 className='client_name'> Jaen Shunew</h5>
          <small className='message_review'>  It's Amazing Your Designs are verry beatfully 
           </small>
        </SwiperSlide>
        <SwiperSlide className='clientDetails'>
          <div className="clientImage">
          <img src={jane} alt="me" width={70}/>
          </div>
          <h5 className='client_name'> John Gakuba</h5>
          <small className='message_review'>  oooh! Your Application is running well and the clients increase day per day .
           </small>
        </SwiperSlide>
        <SwiperSlide className='clientDetails'>
          <div className="clientImage">
          <img src={image2} alt="image1" width={70}/>
          </div>
          <h5 className='client_name'> Peter Bruno</h5>
          <small className='message_review'>  The Website you made is performing well. so, Thank you for everyhing.
           </small>
        </SwiperSlide>
        <SwiperSlide className='clientDetails'>
          <div className="clientImage">
          <img src={guy} alt="image1" width={70} />
          </div>
          <h5 className='client_name'>  Kwizera Christian</h5>
          <small className='message_review'>  Hey! I'm happy to thank you for Your contribution to My success by using the Website You made.
           </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testmonies
