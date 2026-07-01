import React from 'react'
import { ExternalLink, Code } from 'lucide-react'
import './Projects.css'

const GitHubIcon = ({ size = 14, className }) => (
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

const projects = [
  {
    title: 'Fintech Mobile App Redesign',
    role: 'Lead UI/UX Designer',
    timeline: '4 Weeks',
    challenge: 'Users faced cognitive overload when transfering funds, leading to a 24% drop-off in the checkout/transaction funnel.',
    solution: 'Streamlined the multi-step transaction wizard, reduced fields by 40%, and added micro-interactions for transaction confirmation.',
    stack: 'Figma, Interactive Prototyping, Usability Testing',
    colorClass: 'project-pink',
    previewType: 'mobile-app',
    live: '#',
    code: '#'
  },
  {
    title: 'SaaS Analytics Dashboard',
    role: 'UX Researcher & Developer',
    timeline: '6 Weeks',
    challenge: 'Enterprise administrators were overwhelmed by data density, resulting in a steep learning curve and long onboarding times.',
    solution: 'Designed a component-driven dashboard widgets system, created accessible data visualization layouts, and built a clean React system.',
    stack: 'React, Design Systems, ChartJS, CSS Grid',
    colorClass: 'project-orange',
    previewType: 'dashboard',
    live: '#',
    code: '#'
  },
  {
    title: 'E-Commerce Checkout Optimization',
    role: 'UI/UX & Product Designer',
    timeline: '3 Weeks',
    challenge: 'High cart abandonment rates due to confusing guest checkout policies and lengthy billing/shipping forms.',
    solution: 'Restructured the flow to a single-page smart checkout, added progress cues, inline validation, and autocomplete location APIs.',
    stack: 'Figma, React, Form Usability, A/B Testing',
    colorClass: 'project-yellow',
    previewType: 'checkout',
    live: '#',
    code: '#'
  }
]

function Projects() {
  return (
    <section id="projects" className="panel projects-section">
      <div className="section-title">
        <h2>Selected Projects</h2>
        <div className="divider"></div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.colorClass}`} key={project.title}>
            {/* CSS Interactive UI Mockups */}
            <div className="project-mockup-wrapper">
              <div className="project-mockup-container">
                {project.previewType === 'mobile-app' && (
                  <div className="mockup-phone">
                    <div className="phone-screen">
                      <div className="phone-header">
                        <div className="phone-notch"></div>
                        <span className="phone-time">9:41</span>
                      </div>
                      <div className="phone-app-content">
                        <div className="mock-card">
                          <span className="mock-label">Available Balance</span>
                          <span className="mock-value">$4,850.20</span>
                        </div>
                        <div className="mock-transfer-row">
                          <div className="mock-user-avatar"></div>
                          <div className="mock-user-avatar"></div>
                          <div className="mock-user-avatar add-btn">+</div>
                        </div>
                        <div className="mock-button">Send Funds</div>
                      </div>
                    </div>
                  </div>
                )}

                {project.previewType === 'dashboard' && (
                  <div className="mockup-browser">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="browser-url">analytics-app.co</div>
                    </div>
                    <div className="browser-content">
                      <div className="mock-sidebar">
                        <div className="mock-side-item active"></div>
                        <div className="mock-side-item"></div>
                        <div className="mock-side-item"></div>
                      </div>
                      <div className="mock-body">
                        <div className="mock-title-row">
                          <div className="mock-h"></div>
                          <div className="mock-w"></div>
                        </div>
                        <div className="mock-chart-container">
                          <div className="mock-chart-bar" style={{ height: '35%' }}></div>
                          <div className="mock-chart-bar" style={{ height: '65%' }}></div>
                          <div className="mock-chart-bar" style={{ height: '50%' }}></div>
                          <div className="mock-chart-bar" style={{ height: '80%' }}></div>
                          <div className="mock-chart-bar" style={{ height: '40%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.previewType === 'checkout' && (
                  <div className="mockup-checkout">
                    <div className="checkout-stepper">
                      <div className="step active">1</div>
                      <div className="step-line active"></div>
                      <div className="step active">2</div>
                      <div className="step-line"></div>
                      <div className="step">3</div>
                    </div>
                    <div className="checkout-content">
                      <div className="mock-h short"></div>
                      <div className="mock-item-row">
                        <div className="item-sq"></div>
                        <div className="item-lines">
                          <div className="line-item full"></div>
                          <div className="line-item half"></div>
                        </div>
                      </div>
                      <div className="checkout-summary">
                        <div className="summary-line"></div>
                        <div className="summary-line font-bold"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="project-details">
              <div className="project-meta">
                <span className="role-badge">{project.role}</span>
                <span className="timeline">{project.timeline}</span>
              </div>
              <h3>{project.title}</h3>

              <div className="ux-brief">
                <p>
                  <strong>Challenge:</strong> {project.challenge}
                </p>
                <p>
                  <strong>Solution:</strong> {project.solution}
                </p>
              </div>

              <div className="project-tags">
                {project.stack.split(', ').map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} className="project-link-btn primary" target="_blank" rel="noreferrer">
                  Live Demo <ExternalLink size={14} />
                </a>
                <a href={project.code} className="project-link-btn secondary" target="_blank" rel="noreferrer">
                  GitHub Repo <GitHubIcon size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
