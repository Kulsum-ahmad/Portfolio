import React from 'react'
import { Sparkles, ArrowRight, Download } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow-container">
        <div className="glow-blob glow-pink"></div>
        <div className="glow-blob glow-orange"></div>
        <div className="glow-blob glow-yellow"></div>
      </div>
      <div className="hero-content">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div className="status-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#dcfce7', padding: '4px 12px', borderRadius: '100px', fontSize: '0.85rem', color: '#166534', border: '1px solid #bbf7d0', fontWeight: '600' }}>
            <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }}></span>
            7th Sem CSE Student
          </div>
          <p className="eyebrow" style={{ margin: 0 }}>
            <Sparkles size={14} className="hero-spark" /> Software Engineer & Frontend Specialist
          </p>
        </div>
        <h1>
          Crafting intuitive experiences that <span>matter</span>.
        </h1>
        <p className="lead">
          Hi, I am <strong>Kulsum Ahmad</strong>. I build clean, robust applications and user-centric interfaces that bridge the gap between strong engineering fundamentals and seamless design.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-solid">
            Explore My Work <ArrowRight size={18} className="arrow-icon" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Resume <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
