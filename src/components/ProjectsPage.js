import React, { useState } from 'react';
import {Github, ExternalLink } from 'lucide-react';
import projects from './data/projects_data';

// Projects Page Component  
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('description');



  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'backend', name: 'Backend' },
    { id: 'databases', name: 'Databases' },
    { id: 'core_concepts', name: 'Core Concepts' },
    { id: 'machine_learning', name: 'Machine Learning' },
    { id: 'deep_learning', name: 'Deep Learning' },
    { id: 'generative_ai', name: 'Generative AI' },
    { id: 'cloud_computing', name: 'Cloud Computing' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            
            {/* Modal Navbar */}
            <div className="bg-gray-50 border-b px-6">
              <div className="flex space-x-8">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`py-4 font-medium border-b-2 ${
                    activeTab === 'description' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('use-cases')}
                  className={`py-4 font-medium border-b-2 ${
                    activeTab === 'use-cases' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Use Cases
                </button>
                <button 
                  onClick={() => setActiveTab('links')}
                  className={`py-4 font-medium border-b-2 ${
                    activeTab === 'links' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Links
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <p className="mb-4">{project.fullDescription}</p>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8">Technical Details</h3>
                  <p className="mb-4">The architecture follows modern best practices with scalability and maintainability in mind. Built using industry-standard tools and frameworks.</p>
                </div>
              )}
              
              {activeTab === 'use-cases' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Applications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.useCases.map((useCase, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-3">{useCase.title}</h4>
                        <p>{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'links' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Links</h3>
                  <div className="space-y-4">
                    <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <Github size={24} />
                      <div>
                        <p className="font-medium">GitHub Repository</p>
                        <p className="text-gray-600">View source code</p>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 ml-auto" />
                    </a>
                    <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <ExternalLink size={24} />
                      <div>
                        <p className="font-medium">Live Demo</p>
                        <p className="text-gray-600">Try it out</p>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 ml-auto" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans transition-colors duration-300">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-3xl mx-auto transition-colors duration-300">
            Explore my portfolio of projects across various domains of software development, machine learning, and cloud computing.
          </p>
        </header>

        {/* Categories Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors shadow-sm ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-6xl">{project.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveTab('description');
                  }}
                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center group"
                >
                  View Details
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};
export default ProjectsPage;