/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";  
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css'
const Footerr = () => {
  return (
    <footer>
    <a href="#"className='footerlogo'> MORE</a>
    <ul className='permlinks'>
   <li><a href="#">Home</a></li>
   <li><a href="#about">About</a></li> 
   <li><a href="#experience">Experience</a></li> 
   <li><a href="#service">Servces</a></li>
   <li><a href="#portifolio">Portifolio</a></li>
   <li><a href="#testmonies">Testimonial</a></li>
   <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="socialmedias">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare size={25}/> Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"> <FaInstagram size={25}/>Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={25}/>Twitter</a>

      </div>
      <div className="copyright">
        <small> Done By PLacide</small>
      </div>
    </footer>
  )
}

export default Footerr