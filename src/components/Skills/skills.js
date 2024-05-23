import React from 'react';
import "./skills.css";
import FrontEnd from "../../assets/ui-design.png";
import BackEnd from "../../assets/website-design.png";

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>Fields I worked</span>
      <span className='skillDesc'>Full-Stack Developer with Expertise in Front-End and Back-End Technologies | Specializing in React, Node.js, and Cloud-Based Solutions</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={FrontEnd} alt='FrontEnd' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Front-End Development</h2>
            <ul className='skillBarTextLists'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Angular</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className='skillBar'>
          <img src={BackEnd} alt='BackEnd' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Back-End Development</h2>
            <ul className='skillBarTextLists'>
              <li>Java</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
