import React from 'react'
import './Service.css'
import { FaCheck } from "react-icons/fa";
const Servicess = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container About_service">
          <div className="content">
          <div className="serviceHeader">
          <h3> Software Development</h3>
          </div>

          <div className="main">
          <div>
          <FaCheck className='icon'/>
            <small> Web Application  </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Mobile Application </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Wordpress Web Development</small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small>Application Debbuging</small>
            </div>
            </div>
          </div>
          <div className="content">
          <div className="serviceHeader">
          <h3>Content Creation & Design</h3>
          </div>
          <div className="main">
          <div>
          <FaCheck className='icon'/>
            <small> Figma Design </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Graphic Design  </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Application Content Creation </small>
            </div>
            <div>
           <FaCheck className='icon'/>
            <small> Application Content Creation </small>
            </div>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Servicess