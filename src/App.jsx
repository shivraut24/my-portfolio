
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import '../src/App.css'
 const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}
export default App
