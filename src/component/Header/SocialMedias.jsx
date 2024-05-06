/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const SocialMedias = () => {
  return (
    <div className="media">
    <a href="https://www.linkedin.com/in/ikundabayo-placide-b63b07284/" target="_blank" rel="noreferrer"><FaLinkedin size={32}/></a>
    <a href="https://www.facebook.com/ikundabayoplacide.madiba/" target="_blank" rel="noreferrer"><FaFacebook size={32}/></a>
    <a href="https://github.com/ikundabayoplacide" target="_blank" rel="noreferrer"> <FaGithub size={32}/></a>
   </div>
  )
}

export default SocialMedias