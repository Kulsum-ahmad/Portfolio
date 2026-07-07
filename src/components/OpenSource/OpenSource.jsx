import React from 'react'
import { Code, FileText, ExternalLink } from 'lucide-react'

const GitHubIcon = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

function OpenSource() {
  return (
    <div id="open-source" className="bento-card open-source-section-card glass-card">
      <div className="section-title">
        <h2 className="section-hdr">
          <Code size={18} className="text-indigo" /> Open-Source Engineering & System Design
        </h2>
        <div className="divider"></div>
      </div>

      <div className="open-source-grid">
        {/* Card 1: CircuitVerse */}
        <div className="os-project-card">
          <div className="os-card-header">
            <span className="os-title">CircuitVerse | Finite State Machine Project</span>
            <FileText size={20} className="text-cyan os-doc-icon" title="Architecture Document" />
          </div>
          <p className="os-desc">
            <strong>Technical Contribution:</strong> Authored a 15+ page comprehensive technical roadmap and system specification for an FSM Editor integration within the core logic simulation codebase. Mapped out complex event-driven state transitions, user interaction layers, and data structure schemas.
          </p>
          <div className="os-card-footer">
            <a 
              href="https://github.com/Kulsum-ahmad" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-solid btn-sm"
            >
              View Architecture Spec <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Card 2: Hacktoberfest */}
        <div className="os-project-card">
          <div className="os-card-header">
            <span className="os-title">Hacktoberfest Super Contributor (2025)</span>
            <GitHubIcon size={20} className="text-indigo" />
          </div>
          <p className="os-desc">
            <strong>Technical Contribution:</strong> Actively audited open-source repositories, resolved codebase tracking issues, and submitted peer-reviewed code to international open-source software projects.
          </p>
          <div className="os-card-footer">
            <a 
              href="https://github.com/Kulsum-ahmad" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-solid btn-sm"
            >
              View GitHub Profile <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenSource
