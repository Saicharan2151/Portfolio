import React from 'react';
import "./about.css";
import profileImage from "../../assets/charan.jpeg";
import experienceIcon from "../../assets/experience_icon.jpg"; // Replace with the correct path to your experience icon
import linkedinIcon from "../../assets/linkedin_icon.png"; // Replace with the correct path to your LinkedIn icon

const About = () => {
  return (
    <section id="about">
      <h2 className="aboutTitle">About Me</h2>
      <div className="aboutContent">
        <img src={profileImage} alt="Profile" className="aboutImage" />
        <div className="aboutText">
          <div className="aboutInfo">
            <div className="experienceBox">
              <img src={experienceIcon} alt="Experience" className="icon" />
              <h3>Experience</h3>
              <h4>2+ Years working</h4>
            </div>            
            <div className="connectBox">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              <h3>Connect with Me</h3>
              <p>
                Visit my <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="linkedinLink">LinkedIn</a> profile to connect with me.
              </p>
              
              
            </div>
            <p style={{color:'white'}}>I'm Sai Charan Dudala, a dynamic Full Stack Developer with over two years of hands-on experience in crafting scalable web applications. My expertise spans both front-end and back-end technologies, including JavaScript, React JS, Node JS, and SQL databases. I've excelled in both academic and professional settings, from teaching advanced computer science courses at Auburn University to driving customer satisfaction and reducing code duplication at Tata Consultancy Services.  With a strong foundation in software development and a passion for innovation, I'm eager to bring my skills to new and challenging projects.       </p>
          </div>
          <button className="contactBtn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </button>
        </div>
      </div>
    </section>
  );
}

export default About;
