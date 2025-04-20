import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
