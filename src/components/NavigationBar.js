import { Briefcase } from 'lucide-react';
// Navigation Component
const NavigationBar = ({ currentPage, setCurrentPage }) => (
  <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo/Name */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900">Sparsh Gupta</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => setCurrentPage('home')}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'home'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('experience')}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'experience'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'projects'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'about'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'contact'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setCurrentPage('fun')}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              currentPage === 'fun'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Fun
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setCurrentPage(currentPage === 'home' ? 'projects' : 'home')}
            className="text-gray-500 hover:text-gray-700"
          >
            <Briefcase size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          <button
            onClick={() => setCurrentPage('home')}
            className={`px-3 py-2 text-sm font-medium ${
              currentPage === 'home' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className={`px-3 py-2 text-sm font-medium ${
              currentPage === 'projects' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`px-3 py-2 text-sm font-medium ${
              currentPage === 'about' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`px-3 py-2 text-sm font-medium ${
              currentPage === 'contact' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </nav>
);
export default NavigationBar;