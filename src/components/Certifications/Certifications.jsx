import React from 'react'
import { Award } from 'lucide-react'

function Certifications() {
  return (
    <div id="validation" className="bento-card validation-section-card glass-card">
      <div className="section-title">
        <h2 className="section-hdr">
          <Award size={18} className="text-cyan" /> Professional Validation & Achievements
        </h2>
        <div className="divider"></div>
      </div>

      <div className="validation-grid">
        {/* Achievements block */}
        <div className="val-sub-block">
          <h3 className="val-sub-hdr">Key Achievements</h3>
          <div className="ach-list-new">
            <div className="ach-item-new">
              <span className="ach-badge-icon">🏆</span>
              <div>
                <h4>1st Place Winner – HackIT 2.0 Hackathon (2026)</h4>
                <p>Competed under strict constraints to architect and prototype an optimized, functional technical solution over a multi-day engineering sprint at Amity University Patna.</p>
              </div>
            </div>
            <div className="ach-item-new">
              <span className="ach-badge-icon">📈</span>
              <div>
                <h4>Academic Standing: 8.81 CGPA</h4>
                <p>Maintaining an 8.81 CGPA in B.Tech Computer Science and Engineering at Amity University Patna.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid block */}
        <div className="val-sub-block">
          <h3 className="val-sub-hdr">Professional Certifications</h3>
          <div className="certs-compact-grid">
            
            <div className="cert-card-new">
              <div className="cert-logo-wrapper aws-theme">
                <span className="cert-mini-logo">AWS</span>
              </div>
              <div className="cert-info-new">
                <h4>AWS Cloud Quest: Generative AI Practitioner</h4>
                <p>AWS Training & Completion</p>
              </div>
            </div>

            <div className="cert-card-new">
              <div className="cert-logo-wrapper aws-theme">
                <span className="cert-mini-logo">AWS</span>
              </div>
              <div className="cert-info-new">
                <h4>AWS Cloud Practitioner Essentials</h4>
                <p>AWS Training & Completion</p>
              </div>
            </div>

            <div className="cert-card-new">
              <div className="cert-logo-wrapper ibm-theme">
                <span className="cert-mini-logo">IBM</span>
              </div>
              <div className="cert-info-new">
                <h4>Full Stack Software Developer</h4>
                <p>IBM Certificate (Validating core full-stack foundations)</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
