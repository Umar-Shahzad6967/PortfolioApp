import React, { useEffect } from 'react';
import './App.css';
import About from './Component/About/About.js';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Component/Home/Home';
import Expence from './Component/Expence/Expence.js';
import Navbar from './Component/Navbar/Navbar.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Services from './Component/Services/Services.js';
import Edu from './Component/Edu/Edu.js';
import Contact from './Component/Contact/Contact.js';
import Footer from './Component/Footer/Footer.js';
import Project from './Component/Project/Project.js';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <Expence />
      <About />
      <Services />
      <Edu />
      <Project />
      <Contact />
      <Footer />



    </>
  );
}

export default App;
