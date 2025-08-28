import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
// Contact Page Component
const ContactPage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h1>
        
        <p className="text-gray-600 text-center mb-8">
          I'm always interested in new opportunities and interesting projects. 
          Feel free to reach out!
        </p>

        <div className="space-y-6">
          {/* Email */}
          <a
            href="mailto:sparsh105gupta@gmail.com"
            className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Mail size={24} className="text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">sparsh105gupta@gmail.com</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sparshhgupta/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Github size={24} className="text-gray-700" />
            <div>
              <p className="font-medium text-gray-900">GitHub</p>
              <p className="text-gray-600">@sparshhgupta</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 ml-auto" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sparshgupta7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Linkedin size={24} className="text-blue-700" />
            <div>
              <p className="font-medium text-gray-900">LinkedIn</p>
              <p className="text-gray-600">Sparsh's Professional Profile</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 ml-auto" />
          </a>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setCurrentPage('projects')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View My Projects
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default ContactPage;