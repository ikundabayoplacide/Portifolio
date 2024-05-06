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
      <h1>Placide</h1>
     <h5 className="text-Light"> Frontend Developer</h5>
     <CVA/>
     <SocialMedias/>
     <a href="#contact" className='scrolldown'>Scroll-down</a>
     <div className="photo">
      <img src={pass} alt='me' className='photoes'/>
     </div>
     </div>
    </header>
  )
}

export default Header