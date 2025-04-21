import React from 'react'
import './hero.css';
import Upload from '../upload/upload';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h1>Image Analysis</h1>
        <p>Upload an image to analyze its content and get insights. Our advanced AI-powered system will help you understand the contents of your image, detect objects, identify text, and provide detailed analysis.</p>
      </div>
      <Upload />
    </div>
  )
}

export default Hero
