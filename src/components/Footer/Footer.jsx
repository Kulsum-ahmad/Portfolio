import React from 'react'
import { Download } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-logo">KA</span>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Kulsum Ahmad. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <a href="/Kulsum_Ahmad_Resume.pdf" download className="btn btn-solid resume-btn-bottom">
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
