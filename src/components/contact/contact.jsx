import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h2n35zg', 'template_h16qs1g', form.current, 'vxOtjq6xoDPozBlfO')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
    <h5>I'm not desperate... but please</h5>
    <h2>Contact Me</h2>
    
      <div className="container contact_container"> 
        <div className="contact_options"> 
           <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>kean.bayneslow@gmail.com</h5>
              <a href="mailto:kean.bayneslow@gmail.com" target="_blank">Send a Message</a>
            </article>
            <article className="contact_option">
            <AiOutlinePhone className='contact_option-icon'/>
              <h4>Phone</h4>
              <h5>0415 210 285</h5>
              
            </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form> 
      </div>
    </section>
  )
}

export default Contact