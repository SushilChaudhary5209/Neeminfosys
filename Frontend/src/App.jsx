


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Career from './pages/Career';
import WebDevelopmentPackage from './pages/WebDevelopmentPackage';
import SEOPackage from './pages/SEOPackage';




const AppContent = () => {


  return (
    <div>
      <NavBar className='' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/pricing/webdevelopmentpackage" element={<WebDevelopmentPackage />} />
        <Route path="/pricing/seopackage" element={<SEOPackage />} />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
