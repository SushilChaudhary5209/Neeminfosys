
// import './App.css'
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Button from './components/Button';

// function App() {

//   return (
//     <>
//       {/* <Navbar /> */}
//       {/* <Footer /> */}
//       <Button />
//     </>
//   )
// }

// export default App;
















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
