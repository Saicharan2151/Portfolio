import React, { useRef } from 'react';
import "./contact.css";
import Walmart from "../../assets/tcs2-165742482116x9-1.jpg";
import Adobe from "../../assets/AUM-Entrance-2.jpg";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tjixqyr', 'template_z7mv7o3', form.current, 'fz5fHdp2Jx1kCd8pD')
            .then((result) => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            });
        };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with include:
            </p>
            <div className='clientImgs'>
                <div className='clientItem'>
                    <img src={Walmart} alt='Walmart' className='clientImg'/>
                    <p className='clientText'>Tata Consultancy Services ltd<br/>Hyderabad,India<br/>Full Stack Developer<br/>Dec 2020-June 2022</p>
                </div>
                <div className='clientItem'>
                    <img src={Adobe} alt='Adobe' className='clientImg'/>
                    <p className='clientText'>Auburn University at Montgomery<br/>Montgomery,AL<br/>Graduate Teaching Assistant<br/>Jan 2023-Dec2023</p>
                </div>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                <input type="email" className='email' placeholder='Your Email' name='your_email'/>
                <textarea className="msg" name='message' rows='5' placeholder='Your message'></textarea>
                <button className='submitBtn' type='submit'>Submit</button>
                <div className='links'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt='FacebookIcon' className='link'/>    
                    </a>
                    <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt='TwitterIcon' className='link'/>    
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={YouTubeIcon} alt='YouTubeIcon' className='link'/>    
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt='InstagramIcon' className='link'/>    
                    </a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;
