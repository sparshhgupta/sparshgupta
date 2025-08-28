import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ExperiencePage from './components/ExperiencePage';
import FunSection from './components/FunSection';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'experience':
        return <ExperiencePage setCurrentPage={setCurrentPage} />;
      case 'fun':
        return <FunSection setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <NavigationBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;