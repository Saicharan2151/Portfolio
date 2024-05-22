import React from 'react'
import "./skills.css"
import FrontEnd from "../../assets/ui-design.png";
import BackEnd from "../../assets/website-design.png";
import DevOps from "../../assets/app-design.png"

const Skills = () => {
  return (
    <section id='skills'>
    <span className='skillTitle'>What I Do</span>
    <span className='skillDesc'>Full-Stack Developer with Expertise in Front-End and Back-End Technologies | Specializing in React, Node.js, and Cloud-Based Solutions</span>
    <div className='skillBars'>
      <div className='skillBar'>
        <img src={FrontEnd} alt='FrontEnd' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>Front-End Development</h2>
          <p>Creating responsive and dynamic user interfaces using React, Angular, HTML, CSS, and JavaScript.</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={BackEnd} alt='BackEnd' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>Back-End Development</h2>
          <p>Developing robust and scalable back-end systems using Node.js, Express, and various databases like MongoDB and SQL.</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={DevOps} alt='DevOps' className='skillBarImg'/>
        <div className='skillBarText'>
          <h2>DevOps & Cloud</h2>
          <p>Implementing CI/CD pipelines and managing cloud infrastructure with AWS, Azure, and Docker.</p>
        </div>
      </div>
    </div>   
  </section>
  
  )
}

export default Skills