import React from 'react'
import { Layers, Terminal, Database, Code } from 'lucide-react'
import './Skills.css'

const skillCategories = [
  {
    title: 'UI/UX & Product Design',
    icon: <Layers size={18} className="cat-icon-design" />,
    skills: [
      'User Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Information Architecture',
      'Figma',
      'Usability Testing',
      'Interaction Design'
    ]
  },
  {
    title: 'Frontend & Technology',
    icon: <Terminal size={18} className="cat-icon-tech" />,
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Responsive Web Design',
      'Git & GitHub Version Control',
      'RESTful APIs'
    ]
  },
  {
    title: 'Core Computer Science',
    icon: <Database size={18} className="cat-icon-cs" style={{ color: '#4caf50' }} />,
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks'
    ]
  },
  {
    title: 'Developer Stats',
    icon: <Code size={18} className="cat-icon-stats" style={{ color: '#00d4ff' }} />,
    skills: [
      'GitHub: 300+ Commits',
      'GitHub: 10+ Repositories',
      'Open Source Enthusiast'
    ]
  }
]

function Skills() {
  return (
    <section id="skills" className="panel skills-section">
      <div className="section-title">
        <h2>Core Competencies</h2>
        <div className="divider"></div>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skills-card" key={category.title}>
            <div className="skills-card-header">
              {category.icon}
              <h3>{category.title}</h3>
            </div>
            <ul className="chip-grid">
              {category.skills.map((skill) => (
                <li key={skill} className="skill-chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
