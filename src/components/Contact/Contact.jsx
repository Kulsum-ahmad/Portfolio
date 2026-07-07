import React, { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

function Contact() {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMsg, setContactMsg] = useState('')
  const [contactStatus, setContactStatus] = useState('idle') // idle | submitting | success

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactName || !contactEmail || !contactMsg) return
    setContactStatus('submitting')
    setTimeout(() => {
      setContactStatus('success')
      setContactName('')
      setContactEmail('')
      setContactMsg('')
    }, 1500)
  }

  return (
    <div id="contact" className="bento-card contact-section-card glass-card">
      <div className="section-title">
        <h2 className="section-hdr"><Mail size={18} className="text-cyan" /> Let's Connect</h2>
        <div className="divider"></div>
      </div>
      
      {contactStatus === 'success' ? (
        <div className="contact-success-state animate-scale-in">
          <CheckCircle size={36} className="text-cyan animate-pulse" />
          <h3>Message Dispatched!</h3>
          <p>Thank you for reaching out, I will review and respond as soon as possible.</p>
          <button className="btn-solid btn-sm mt-1" onClick={() => setContactStatus('idle')}>
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="contact-grid-form">
          <div className="contact-inputs-col">
            <div className="input-field-wrap">
              <label>Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={contactName}
                onChange={e => setContactName(e.target.value)}
                required
                disabled={contactStatus === 'submitting'}
              />
            </div>
            <div className="input-field-wrap">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="your.email@example.com" 
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
                required
                disabled={contactStatus === 'submitting'}
              />
            </div>
          </div>
          <div className="contact-message-col">
            <div className="input-field-wrap height-full">
              <label>Message</label>
              <textarea 
                placeholder="Hello! Let's discuss a project or internship opportunity..." 
                value={contactMsg}
                onChange={e => setContactMsg(e.target.value)}
                required
                disabled={contactStatus === 'submitting'}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn-solid btn-submit-new"
              disabled={contactStatus === 'submitting'}
            >
              {contactStatus === 'submitting' ? (
                <span className="spinner"></span>
              ) : (
                <>Send Message <Send size={14} /></>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Contact
