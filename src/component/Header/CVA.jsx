import React from 'react'
import CV from '../../Assets/IKUNDABAYO Placide Resume.pdf';

const CVA = () => {
  return (
    <div className='cta'>
       <a href={CV} download className='btn cv'> Download CV</a>
       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CVA