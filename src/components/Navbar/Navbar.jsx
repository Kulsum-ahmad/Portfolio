import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Brand Logo">
        KA
      </a>
      <nav aria-label="Main Navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="nav-actions">
        <a 
          href="/Kulsum_Ahmad_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          download="Kulsum_Ahmad_Resume.pdf"
          className="resume-link"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default Navbar
