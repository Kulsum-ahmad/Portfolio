import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
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
        <p className="eyebrow">
          <Sparkles size={14} className="hero-spark" /> UI/UX Designer & Frontend Developer
        </p>
        <h1>
          Crafting intuitive experiences that <span>matter</span>.
        </h1>
        <p className="lead">
          Hi, I am <strong>Kulsum Ahmad</strong>. I build clean, user-centric interfaces and design workflows that bridge the gap between design philosophy and code implementation.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-solid">
            Explore My Work <ArrowRight size={18} className="arrow-icon" />
          </a>
          <a href="#contact" className="btn btn-outline">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
