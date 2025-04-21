'use client'
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Hero = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const animatedOnce = useRef(false);
  const [elementsVisible, setElementsVisible] = useState(false);
  const loaderDelay = 100;

  const handleButtonClick = () => {
    navigate('/upload');
  };

  const handleLearnMoreClick = () => {
    navigate('/about');
  }

  useEffect(() => {
    if (!animatedOnce.current) {
      setTimeout(() => {
        setElementsVisible(true);
        animatedOnce.current = true;
      }, loaderDelay);
    }

    const loadSplineViewer = async () => {
      if (!window.splineViewer) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
        script.async = true;
        script.onload = () => {
          const viewer = document.querySelector('spline-viewer');
          if (viewer) {
            viewer.setAttribute('url', viewer.getAttribute('url'));
          }
        };
        document.body.appendChild(script);
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    loadSplineViewer();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollFade = Math.max(0, 1 - scrollPosition / 500);
  const heroTransform = `translateY(${scrollPosition * 0.2}px)`;

  return (
    <div className="hero-container">
      <div className="background-animation"></div>

      <div className="hero-content" style={{ opacity: scrollFade, transform: heroTransform }}>
        <div className="hero-inner">
          <div className="text-section">
            <div className={`heading-bar ${elementsVisible ? 'visible' : ''}`}>
              <div className="line"></div>
              <p>AI-POWERED HEALTHCARE</p>
            </div>
            <h1 className={`hero-heading ${elementsVisible ? 'visible' : ''}`}>
              Advanced <span className="glow">Medical Image</span><br />Analysis Platform
            </h1>
            <p className={`hero-subtext ${elementsVisible ? 'visible' : ''}`}>
              Revolutionizing healthcare diagnostics with cutting-edge AI technology. 
              Accurate, fast, and reliable analysis of medical imaging for better patient outcomes.
            </p>
            <div className={`hero-buttons ${elementsVisible ? 'visible' : ''}`}>
              <button className="btn-primary" onClick={handleButtonClick}>Get Started</button>
              <button className="btn-secondary" onClick={handleLearnMoreClick}>Learn More</button>
            </div>
          </div>
          <div className={`model-section ${elementsVisible ? 'visible' : ''}`}>
            <div className="model-bg"></div>
            <spline-viewer url="https://prod.spline.design/xhSDQ6ZARsy54QdM/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
