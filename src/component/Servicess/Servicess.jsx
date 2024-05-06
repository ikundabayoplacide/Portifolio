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
          <h3> UI Design</h3>
          </div>
          <div className="main">
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            </div>
          </div>
          <div className="content">
          <div className="serviceHeader">
          <h3> Web Development</h3>
          </div>

          <div className="main">
          <div>
          <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            </div>
          </div>
          <div className="content">
          <div className="serviceHeader">
          <h3>Content Creation</h3>
          </div>
          <div className="main">
          <div>
          <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
            <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            <div>
           <FaCheck className='icon'/>
            <small> Am Beginner in development </small>
            </div>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Servicess