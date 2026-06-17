import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="panel about-section">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="divider"></div>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p className="about-highlight">
            I design experiences with the user in mind and write clean code to bring them to life.
          </p>
          <p>
            My background in frontend development combined with a deep interest in user experience allows me to design screens that are not only visually appealing but also technically feasible and highly accessible.
          </p>
          <p>
            Whether conducting user research, drawing wireframes in Figma, or structuring components in React, my goal is to craft digital products that make people's daily tasks simpler and more enjoyable.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>Goal</h3>
            <p>Creating functional designs focused on accessibility, responsiveness, and clear visual hierarchy.</p>
          </div>
          <div className="stat-card">
            <h3>Philosophy</h3>
            <p>Keep layouts clean, remove visual noise, and prioritize what helps the user accomplish their tasks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
