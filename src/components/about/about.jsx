import React from 'react'
import './about.css'

const about = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-title">About Our Vision</h1>
        <p className="about-subtitle">Transforming ideas into digital realities</p>
      </div>

      {/* Section 1 - Image Left, Text Right */}
      <div className="about-section">
        <div className="section-image">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Team collaboration" 
            className="image-style"
          />
        </div>
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to creating innovative solutions that bridge the gap between 
            technology and human needs. Our platform empowers users to achieve their goals 
            through cutting-edge tools and intuitive design.
          </p>
          <div className="highlight-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Text Left, Image Right */}
      <div className="about-section reverse">
        <div className="section-content">
          <h2>Innovation at Heart</h2>
          <p>
            Our team consists of passionate developers, designers, and innovators who 
            believe in the power of technology to make a positive impact. We constantly 
            evolve our platform to meet the changing needs of our users.
          </p>
          <ul className="feature-list">
            <li>✨ User-friendly interface</li>
            <li>🚀 Lightning-fast performance</li>
            <li>🔒 Secure and reliable</li>
            <li>📱 Mobile responsive design</li>
          </ul>
        </div>
        <div className="section-image">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1215&q=80" 
            alt="Innovation and technology" 
            className="image-style"
          />
        </div>
      </div>

      {/* Section 3 - Image Left, Text Right */}
      <div className="about-section">
        <div className="section-image">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
            alt="Future technology" 
            className="image-style"
          />
        </div>
        <div className="section-content">
          <h2>Building the Future</h2>
          <p>
            We envision a world where technology seamlessly integrates with daily life, 
            making complex tasks simple and accessible to everyone. Join us on this 
            journey as we continue to push boundaries and explore new possibilities.
          </p>
          <div className="cta-section">
            <button className="cta-button">Get Started Today</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-footer">
        <h3>Ready to Transform Your Ideas?</h3>
        <p>Join thousands of users who trust our platform for their digital needs</p>
      </div>
    </div>
  )
}

export default about
