import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import Home          from './pages/Home';
import About         from './pages/About';
import Projects      from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact       from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/about"             element={<About />} />
          <Route path="/projects"          element={<Projects />} />
          <Route path="/projects/:id"      element={<ProjectDetail />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="*"                  element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
