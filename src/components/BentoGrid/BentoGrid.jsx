import React from 'react'
import About from '../About/About'
import Experience from '../Experience/Experience'
import OpenSource from '../OpenSource/OpenSource'
import Certifications from '../Certifications/Certifications'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './BentoGrid.css'

function BentoGrid() {
  return (
    <section className="bento-grid-container">
      <About />
      <Experience />
      <Certifications />
      <OpenSource />
      <Skills />
      <Projects />
      <Contact />
    </section>
  )
}

export default BentoGrid
