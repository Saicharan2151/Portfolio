import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/logo_.jpeg";
import contactimg from "../../assets/contact.png";
import Menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About Me</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to="education" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Education</Link>
        <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactimg} alt='' className="desktopMenuImg" />Contact Me</button>

      <img src={Menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About Me</Link>
        <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to="education" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Education</Link>
        <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
