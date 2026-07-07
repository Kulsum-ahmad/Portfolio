import React, { useState, useEffect } from 'react'
import { Sparkles, Clock, ExternalLink, Code } from 'lucide-react'

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

function Projects() {
  // --- VORTEX TICKETS TIMER SIMULATOR ---
  const [ticketTime, setTicketTime] = useState(300)
  useEffect(() => {
    const timer = setInterval(() => {
      setTicketTime(prev => (prev <= 1 ? 300 : prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const s = secs % 60
    return `0${mins}:${s < 10 ? '0' : ''}${s}`
  }

  // --- SMARTMOCK AI INTERVIEW CHAT SIMULATOR ---
  const [chatStep, setChatStep] = useState(0)
  useEffect(() => {
    const chatInterval = setInterval(() => {
      setChatStep(prev => (prev >= 3 ? 0 : prev + 1))
    }, 4500)
    return () => clearInterval(chatInterval)
  }, [])

  return (
    <div id="projects" className="bento-card projects-section-card glass-card">
      <div className="projects-section-header">
        <h2 className="section-hdr">
          <Sparkles size={18} className="text-cyan animate-pulse" /> Highlighted Projects
        </h2>
      </div>

      <div className="projects-grid">
        {/* Card 1: SmartMock AI */}
        <div className="project-detail-card">
          <div className="project-card-header">
            <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" className="proj-header-link">
              SmartMock AI <span className="live-status-pill">Live Link Available</span>
            </a>
            <div className="project-header-icons">
              <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" title="View GitHub Code">
                <GitHubIcon size={16} />
              </a>
              <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" title="View Live Site">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="project-tech-row font-mono">
            React 19 · Node.js · Express · Gemini 2.5 Flash · BullMQ (Redis) · Zod · Jest
          </div>

          <div className="project-card-content">
            <ul className="project-bullets">
              <li>Architected a full-stack mock interview simulator evaluating speech pacing and code accuracy via Gemini 2.5 Flash across 16 technical engineering sub-roles.</li>
              <li>Implemented a local Retrieval-Augmented Generation (RAG) context engine using Gemini vectors and Cosine Similarity search to optimize data context delivery.</li>
              <li>Decoupled heavy LLM evaluation routines into a BullMQ worker queue to protect the core API gateway event loop from performance bottlenecks.</li>
              <li>Engineered network jitter resilience using custom chunk_id Web Audio API streaming sequence headers over WebSockets with structural Zod schema validation fallbacks.</li>
            </ul>
            
            {/* Interactive Simulator: Mock Chat */}
            <div className="proj-simulator">
              <div className="simulator-header">
                <span className="sim-dot bg-red"></span>
                <span className="sim-dot bg-yellow"></span>
                <span className="sim-dot bg-green"></span>
                <span className="sim-title">SmartMock Terminal</span>
              </div>
              <div className="simulator-content chat-content">
                <div className="chat-msg system">
                  <span className="chat-avatar">AI</span>
                  <div className="chat-bubble">
                    How does the Event Loop handle asynchronous tasks in Node.js?
                  </div>
                </div>
                
                {chatStep >= 1 && (
                  <div className="chat-msg user animate-slide-in">
                    <span className="chat-avatar">ME</span>
                    <div className="chat-bubble">
                      It delegates system tasks to Libuv, running callbacks in different phases like poll and timers.
                    </div>
                  </div>
                )}

                {chatStep >= 2 && (
                  <div className="chat-msg system animate-slide-in">
                    <span className="chat-avatar">AI</span>
                    <div className="chat-bubble evaluation glow-cyan">
                      💡 <strong>Cosine Similarity: 94%</strong>
                      <p className="eval-text">Accurate overview. Excellent mention of Libuv and phase execution.</p>
                    </div>
                  </div>
                )}

                {chatStep === 3 && (
                  <div className="chat-pulse-indicator animate-pulse">
                    Analyzing speech vectors...
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="project-card-footer">
            <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" className="btn-solid btn-sm">
              View Live App <ExternalLink size={13} />
            </a>
            <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" className="btn-outline-sm btn-link-sub">
              GitHub Repo
            </a>
          </div>
        </div>

        {/* Card 2: Vortex Tickets */}
        <div className="project-detail-card">
          <div className="project-card-header">
            <span className="proj-header-link-static">Vortex Tickets</span>
            <div className="project-header-icons">
              <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" title="View GitHub Code">
                <GitHubIcon size={16} />
              </a>
            </div>
          </div>

          <div className="project-tech-row font-mono">
            Spring WebFlux · React (Vite) · PostgreSQL · R2DBC · WebSockets · Docker
          </div>

          <div className="project-card-content">
            <ul className="project-bullets">
              <li>Built a high-performance, non-blocking event ticketing engine using Spring WebFlux and R2DBC to handle concurrent operations without thread starvation.</li>
              <li>Integrated WebSockets for live inventory tracking and engineered a 5-minute database ticket lock to eliminate structural race conditions and double-bookings.</li>
              <li>Developed an automated background task worker running every 10 seconds to programmatically clear expired database reservations.</li>
            </ul>

            {/* Interactive Simulator: Seating and Timer */}
            <div className="proj-simulator">
              <div className="simulator-header">
                <span className="sim-dot bg-red"></span>
                <span className="sim-dot bg-yellow"></span>
                <span className="sim-dot bg-green"></span>
                <span className="sim-title">Live Inventory Stream</span>
              </div>
              <div className="simulator-content ticketing-content">
                <div className="ticket-timer-bar">
                  <span className="timer-label"><Clock size={12} /> Temp Reservation Lock:</span>
                  <span className="timer-val text-orange">{formatTime(ticketTime)}</span>
                </div>
                
                <div className="seating-chart">
                  {[...Array(25)].map((_, idx) => {
                    let status = 'available'
                    if (idx === 6 || idx === 12 || idx === 18) status = 'reserved'
                    else if (idx === 7 || idx === 8) status = 'locked'
                    else if (idx === 14 && ticketTime % 2 === 0) status = 'locked'
                    else if (idx === 22 && ticketTime % 3 === 0) status = 'reserved'

                    return (
                      <div 
                        key={idx} 
                        className={`seat ${status}`} 
                        title={`${status.toUpperCase()} seat #${idx + 1}`}
                      ></div>
                    )
                  })}
                </div>
                <div className="seating-legend">
                  <span className="leg-item"><span className="leg-dot bg-cyan"></span> Free</span>
                  <span className="leg-item"><span className="leg-dot bg-orange"></span> Locked</span>
                  <span className="leg-item"><span className="leg-dot bg-red"></span> Sold</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card-footer">
            <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" className="btn-solid btn-sm">
              GitHub Repo <GitHubIcon size={13} />
            </a>
          </div>
        </div>

        {/* Card 3: SkillBridge */}
        <div className="project-detail-card span-two-cols">
          <div className="project-card-header">
            <span className="proj-header-link-static">
              SkillBridge <span className="internship-label">Infosys Springboard Internship</span>
            </span>
            <div className="project-header-icons">
              <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" title="View GitHub Code">
                <GitHubIcon size={16} />
              </a>
            </div>
          </div>

          <div className="project-tech-row font-mono">
            React.js · Node.js · Express · MongoDB · Socket.io · Git · Agile
          </div>

          <div className="project-card-content">
            <ul className="project-bullets">
              <li>Developed as part of the Infosys Springboard Virtual Internship 6.0 within an Agile team of 6 engineers. Individually co-architected a bi-directional real-time chat platform and automated push notification infrastructure powered by Socket.io.</li>
              <li>Engineered clean frontend interfaces utilizing React.js and CSS Modules, implementing component rendering guardrails to optimize client-side lifecycle execution and eliminate unnecessary DOM re-rendering overhead.</li>
            </ul>
          </div>

          <div className="project-card-footer">
            <a href="https://github.com/Kulsum-ahmad" target="_blank" rel="noopener noreferrer" className="btn-solid btn-sm">
              GitHub Repo <GitHubIcon size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
