/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Nav.css' 
import { FiHome } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { RiServiceLine } from "react-icons/ri";
import { FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
  const [active, setActive]=useState('#');
  return (
 <nav>
  <a href="#" onClick={()=>setActive('#')} className={active==='#'?'active':''}>  <FiHome/></a>
  <a href="#about" onClick={()=>setActive('#about')} className={active==='#about'?'active':''}> <FaUser/></a>
  <a href="#experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}> <FaBook/></a>
  <a href="#service"onClick={()=>setActive('#service')} className={active==='#service'? 'active':''}> <RiServiceLine/></a>
  <a href="#contact" onClick={()=>setActive('#contact')} className={active ==='#contact'?'active':''}> <FaEnvelope/></a>
 </nav>
  )
}

export default Nav