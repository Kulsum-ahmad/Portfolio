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
            © {new Date().getFullYear()} Kulsum Ahmad. Built with passion & precision.
          </p>
        </div>
        <div className="footer-right">
          <a 
            href="/Kulsum_Ahmad_Resume.pdf" 
            download="Kulsum_Ahmad_Resume.pdf" 
            className="footer-download-btn"
          >
            <Download size={15} /> Download CV
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
