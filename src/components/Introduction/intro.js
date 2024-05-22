import React from 'react'
import "./intro.css"
import bg from "../../assets/Myimage.png"
import btnImg from "../../assets/hireme.png"
import {Link} from "react-scroll"

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Charan<br/>Full Stack Developer</span></span>
            <p className='introPara'>A versatile Software Engineer with experience in freelance, corporate, and academic settings.I am proficient in C#, JavaScript, SQL, React JS, Angular, and Node.js, with experience in SQL Server and MySQL, and have mentored teams and taught programming at Auburn University at Montgomery. </p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>

  )
}

export default Intro