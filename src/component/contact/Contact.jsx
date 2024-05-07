/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import  { useRef } from 'react';
import { MdEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { FaWhatsappSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
  const form = useRef();
  const [name,setname]= useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');
  const [issubmitted, setIsbmitted]= useState(false);

  const sendEmail=(e)=>{
    e.preventDefault();
  

  const serviceId='service_lq3f449';
  const templateId='template_9ie1me6';
  const publicId='HvdGz2odGhyF3Qszt';

  const templateParams={
    from_name:name,
    from_email:email,
    message:message,
  };

  emailjs.send(serviceId,templateId,templateParams,publicId).then((Response)=>{
    console.log('Email sent successfuly!',Response);
    setname(''); 
    setEmail(''); 
    setMessage('');
    alert('send successfuly!');

  })
  .catch((error)=>{
    console.error('Error meassage',error);
  });
  }
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setIsbmitted(false);
    }, 2000);
    return ()=> clearTimeout(timeout);
  },[issubmitted]);

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container about_contact">
        <div className="contact_details">
          <article className="details">
            <MdEmail className='icons' color='#50C4ED' size={32}/>
            <h3>Email</h3>
            <h5 className='emaildetail'> ikundabayoplacide500@gmail.com</h5>
            <a href="mailto:ikundabayoplacide500@gmail.com" target="_blank" rel="noreferrer"> Send Message</a>
          </article>
          <article className="details">
            <RiMessengerFill className='icons'color='#50C4ED' size={32}/>
          <h3>Messanger</h3>
          <h5 className='messageDetails'>ikundabayoplacide</h5>
          <a href="https://www.facebook.com/ikundabayoplacide.madiba/" target="_blank" rel="noreferrer"> Send Message</a>
          </article>
          <article className="details">
            <FaWhatsappSquare className='icons' color='#50C4ED' size={32}/>
          <h3>Whatsapp</h3>
          <h5 className="whatsapDetails"> +250 789897235</h5>
          <a href="https://api.whatsapp.com/send?phone+250789897235" target="_blank" rel="noreferrer"> Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="messages">
   <input type="text" value={name} onChange={(e)=> setname(e.target.value)}placeholder='Your FullName' required/>
   <input type="text" value={email}onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required />
   <textarea value={message} onChange={(e)=>setMessage(e.target.value)}rows="7" placeholder='Your Message' required></textarea>
   <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
        {issubmitted &&(
   alert("message sent")
        )}
      </div>
    </section>
  )
}

export default Contact