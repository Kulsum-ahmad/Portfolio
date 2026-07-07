import React from 'react'
import { Terminal, Code, Database, Layers } from 'lucide-react'

function Skills() {
  return (
    <div id="skills" className="bento-card skills-matrix-card glass-card">
      <div className="section-title">
        <h2 className="section-hdr">
          <Terminal size={18} className="text-cyan" /> Technical Skills Matrix
        </h2>
        <div className="divider"></div>
      </div>

      <div className="skills-matrix-grid">
        {/* Pillar 1 */}
        <div className="skills-pillar">
          <h3 className="pillar-title"><Code size={14} className="text-cyan" /> Languages</h3>
          <ul className="pillar-list">
            <li>Java</li>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>C++</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="skills-pillar">
          <h3 className="pillar-title"><Database size={14} className="text-indigo" /> Backend & Systems</h3>
          <ul className="pillar-list">
            <li>Node.js / Express.js</li>
            <li>Spring Boot</li>
            <li>Spring WebFlux</li>
            <li>R2DBC</li>
            <li>WebSockets / Socket.io</li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="skills-pillar">
          <h3 className="pillar-title"><Layers size={14} className="text-cyan" /> Frontend & Design</h3>
          <ul className="pillar-list">
            <li>React.js (React 19)</li>
            <li>Tailwind CSS</li>
            <li>HTML5 / CSS Modules</li>
            <li>Figma (UI/UX Design)</li>
          </ul>
        </div>

        {/* Pillar 4 */}
        <div className="skills-pillar">
          <h3 className="pillar-title"><Terminal size={14} className="text-indigo" /> Tools & DevOps</h3>
          <ul className="pillar-list">
            <li>Docker</li>
            <li>Git / GitHub</li>
            <li>REST APIs</li>
            <li>MongoDB</li>
            <li>PostgreSQL / SQLite</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
