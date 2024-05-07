import React from 'react'
import './header.css'
import CVA from './CVA';
import pass from'../../Assets/pass.png';
import SocialMedias from './SocialMedias'

const Header = () => {
  return (
    <header>
     <div className="container header_container">
      <h5> Hello I'm </h5>
      <h1>Placide IKUNDABAYO</h1>
      <div className='text-animate'>
       <h3> Frontend Developer </h3>
     </div>
     <CVA/>
     <SocialMedias/>
     <a href="#contact" className='scrolldown'>Scroll-down</a>
     <div className="photo">
      <img src={pass} alt='me' className='photoes'/>
      <div className='circle-span'></div>
     </div>
     </div>
    </header>
  )
}

export default Header