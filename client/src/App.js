import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <div className='h-screen overflow-y-auto scroll-smooth'>
        <Header />
          <div className='h-3/4'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/about'
                element={<About />}
              />
              <Route
                path='/contact'
                element={<Contact />}
              />
              <Route
                path='/portfolio'
                element={<Portfolio />}
              />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
