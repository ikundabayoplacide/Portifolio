import React from 'react'
import './About.css'
import me from'../../Assets/me.jpg';
import { FaUser } from 'react-icons/fa';
import { FaAward } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
const About = () => {
  return (
   <section id='about'> 
   <h5> Get to Know</h5>
   <h2>About Me</h2>
   <div className="container about__container">
    <div className="about__me">
      <div className="about__me_image">
        <img src={me} alt="pass" width={350} />
      </div>
    </div>
    <div className="about_content">
      <div className="aboutcard">
        <article className='card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>1 year working</small>
        </article>
     
      
        <article className='card'>
          <FaUser className='about_icon'/>
          <h5>Clients</h5>
          <small>50+ Worldwide</small>
        </article>
      
     
        <article className='card'>
          <FaFolder className='about_icon'/>
          <h5>Project</h5>
          <small>10 Completed Project</small>
        </article>
      </div>
      <p>If you want to make the nav element fixed so that it remains in a fixed
         position relative to the viewport while scrolling, you can simply add position: fixed; 
         to your CSS rule for the nav element. Additionally, you may need 
        to adjust the top property to specify the distance of the nav element from the top of the viewport.
        </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
    </div>
   </div>
   </section>
  )
}

export default About