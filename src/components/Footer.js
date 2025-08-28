import { Mail, Github, Linkedin } from 'lucide-react';
// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2025 Sparsh Gupta. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/sparshhgupta/" className="hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/sparshgupta7" className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sparsh105gupta@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;