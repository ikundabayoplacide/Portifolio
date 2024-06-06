import React from 'react'
import './Experience.css'
import { FaCheckCircle } from "react-icons/fa";
const Experience = () => {
  return (
    <section id='experience'>

      <h5>What skills I have</h5>
      <h2> My Experience</h2>

  <div className="container about_Experience">
 <div className="experience_content">
  <h3> Frontend development</h3>
  <div className="experience_container"> 
  <article className='ExpeDetails'>
    <FaCheckCircle className='icon'/> 
    <div>
    <h3>HTML</h3>
    <small className='ExpText'>Experienced</small>
    </div>
  </article>
  <article className='ExpeDetails'>
    <FaCheckCircle className='icon'/> 
    <div>
    <h3>CSS</h3>
    <small className='ExpText'>Experienced</small>
    </div>
      </article>
  <article className='ExpeDetails'>
    <FaCheckCircle className='icon'/> 
    <div>
    <h3>React</h3>
    <small className='ExpText'>Experienced</small>
    </div>
  </article>
  
  <article className='ExpeDetails'>
    <FaCheckCircle className='icon'/> 
    <div>
    <h3>JavaScript</h3>
    <small className='ExpText'>Intermediate</small>
    </div>
  </article>

  <article className='ExpeDetails'>
    <FaCheckCircle className='icon'/> 
    <div>
    <h3>React Native</h3>
    <small className='ExpText'>Intermedaite</small>
    </div>
  </article>
  </div>
  </div>

<div className="experience_content">
  <h3>Backend Experience</h3>
  <div className="experience_container">
    <article className='ExpeDetails'>
    <FaCheckCircle className='icon'/> 
    <div>
      <h3>MySql</h3>
      <small className='fordatabase'>Small</small>
      </div>
    </article>

    <article className='ExpeDetails'>
    <FaCheckCircle className='icon'/> 
    <div>
      <h3>PHP</h3>
      <small className='fordatabase'>Small</small>
      </div>
    </article>
  </div>
</div>
</div>
    </section>
  )
}

export default Experience