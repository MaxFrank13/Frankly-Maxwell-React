import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'about':
        return (
          <About />
        )
      case 'contact':
        return (
          <Contact />
        )
      case 'portfolio':
        return (
          <Portfolio />
        )
      default:
        console.log('page request unknown');
        break;
    };
  };

  const navToPage = () => {

  }

  return (
    <>
      <Header />
      {renderCurrentPage()}
      <Footer />
    </>
  );
}

export default App;
