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
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link" style={{ background: '#1e1b18', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontWeight: '500', transition: 'all 0.2s ease', border: '1px solid #1e1b18' }}>Resume</a>
      </nav>
    </header>
  )
}

export default Navbar
