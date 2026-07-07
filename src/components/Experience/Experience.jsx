import React, { useState } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

function Experience() {
  const [activeHistoryTab, setActiveHistoryTab] = useState('experience')

  return (
    <div id="experience" className="bento-card history-card glass-card">
      <div className="history-tabs">
        <button 
          className={`tab-btn ${activeHistoryTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveHistoryTab('experience')}
        >
          <Briefcase size={16} /> Experience
        </button>
        <button 
          className={`tab-btn ${activeHistoryTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveHistoryTab('education')}
        >
          <GraduationCap size={16} /> Education
        </button>
      </div>

      <div className="history-content">
        {activeHistoryTab === 'experience' && (
          <div className="timeline">
            <div className="timeline-block animate-fade-in">
              <div className="timeline-hdr">
                <span className="timeline-date">Sep 2025 - Nov 2025</span>
                <h3 className="timeline-role">Frontend Developer Intern</h3>
                <h4 className="timeline-company">Infosys Springboard</h4>
              </div>
              <ul className="timeline-details">
                <li>Integrated real-time chat & notifications on <strong>SkillBridge</strong> (MERN-based platform connecting NGOs globally).</li>
                <li>Architected asynchronous state pipelines to minimize UI rendering lag.</li>
                <li>Collaborated in agile sprint deliveries using Git/GitHub version control.</li>
              </ul>
            </div>
          </div>
        )}

        {activeHistoryTab === 'education' && (
          <div className="timeline">
            <div className="timeline-block animate-fade-in">
              <div className="timeline-hdr">
                <span className="timeline-date">2023 - 2027</span>
                <h3 className="timeline-role">B.Tech in Computer Science</h3>
                <h4 className="timeline-company">Amity University Patna</h4>
              </div>
              <div className="education-stats">
                <div className="edu-stat">
                  <span className="edu-val">8.81</span>
                  <span className="edu-lbl">Current CGPA</span>
                </div>
                <div className="edu-stat">
                  <span className="edu-val">7th</span>
                  <span className="edu-lbl">Semester</span>
                </div>
              </div>
              <p className="education-desc">
                Core modules: Data Structures, Analysis of Algorithms, Object-Oriented Software Engineering, Relational Databases, Computer Systems.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
