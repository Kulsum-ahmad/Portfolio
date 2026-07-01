import React from 'react'
import { GraduationCap, Award, Briefcase } from 'lucide-react'
import './Education.css'

function Education() {
  return (
    <section id="education" className="panel education-section">
      <div className="section-title">
        <h2>Experience & Education</h2>
        <div className="divider"></div>
      </div>
      
      <div className="education-grid">
        {/* Experience & Internships */}
        <div className="edu-card">
          <div className="edu-header">
            <Briefcase size={24} className="edu-icon" />
            <h3>Experience</h3>
          </div>
          
          <div className="timeline-item">
            <span className="timeline-date">Jun 2023 - Aug 2023</span>
            <h4 className="timeline-title">Frontend Developer Intern</h4>
            <div className="timeline-subtitle">Infosys Springboard (Remote)</div>
            <p className="timeline-desc">
              Developed and optimized web applications using React.js. Collaborated with a team of developers to implement responsive UI features and integrate RESTful APIs.
            </p>
          </div>
        </div>

        {/* Education & Coursework */}
        <div className="edu-card">
          <div className="edu-header">
            <GraduationCap size={24} className="edu-icon" />
            <h3>Education</h3>
          </div>
          
          <div className="timeline-item">
            <span className="timeline-date">2021 - Expected 2025</span>
            <h4 className="timeline-title">B.Tech in Computer Science & Engineering</h4>
            <div className="timeline-subtitle">7th Semester Student</div>
            <p className="timeline-desc">
              <strong>Core Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
