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
      </nav>
    </header>
  )
}

export default Navbar
