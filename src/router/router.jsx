import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chatbot from '../components/chatbot/chatbot';
import About from '../components/about/about';
import Home from '../components/homePage/Home';
import Upload from '../components/imageAnalysis/upload/upload';
import Hero from '../components/imageAnalysis/heroPage/hero';

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to= 'home' />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
        <Route path="/image-analysis" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
    </Routes>
  );
};

export default Router;
