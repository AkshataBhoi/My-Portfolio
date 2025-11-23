import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import AllProjects from './pages/AllProjects';
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer';

const App: React.FC = () => {
  useTheme(); // Initialize theme

  return (
    <Router>
      <div className="min-h-screen bg-main-bg text-text-primary font-sans selection:bg-accent-1/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
