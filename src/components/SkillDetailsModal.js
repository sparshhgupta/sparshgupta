import React, { useState } from 'react';
import { User, Briefcase, Mail, ArrowLeft, Building, GraduationCap, ExternalLink, Github } from 'lucide-react';

// Skill Details Modal Component
const SkillDetailsModal = ({ skill, onClose, projects, experiences }) => {
  const [activeTab, setActiveTab] = useState('projects');
  
  const relevantProjects = projects.filter(project => 
    project.skills && project.skills.includes(skill)
  );
  
  const relevantExperiences = experiences.filter(exp => 
    exp.skills && exp.skills.includes(skill)
  );

  if (!skill) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center space-x-3">
              <ArrowLeft 
                size={24} 
                className="cursor-pointer hover:bg-white hover:bg-opacity-20 rounded p-1" 
                onClick={onClose}
              />
              <h2 className="text-2xl font-bold">{skill}</h2>
            </div>
            <div className="text-sm opacity-90">
              {relevantProjects.length} Projects • {relevantExperiences.length} Experiences
            </div>
          </div>
          
          {/* Modal Navbar */}
          <div className="bg-gray-50 border-b px-6">
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`py-4 font-medium border-b-2 ${
                  activeTab === 'projects' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Projects ({relevantProjects.length})
              </button>
              <button 
                onClick={() => setActiveTab('experience')}
                className={`py-4 font-medium border-b-2 ${
                  activeTab === 'experience' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                Experience ({relevantExperiences.length})
              </button>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relevantProjects.map(project => (
                  <div key={project.id} className="bg-white rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                    <div className={`h-32 bg-gradient-to-r ${project.gradient} relative rounded-t-xl`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-4xl">{project.icon}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.skills.filter(s => s === skill).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                        {project.skills.filter(s => s !== skill).slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex space-x-2">
                        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                          <Github size={14} />
                          <span>Code</span>
                        </button>
                        <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm">
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div className="space-y-6">
                {relevantExperiences.map(exp => (
                  <div key={exp.point} className="bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={exp.subtitle}
                          className="w-16 h-16 rounded-lg object-contain bg-white border"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <span className="text-sm text-gray-500">{exp.year}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                          {exp.type === 'Work Experience' ? (
                            <Building size={16} className="text-blue-600" />
                          ) : (
                            <GraduationCap size={16} className="text-green-600" />
                          )}
                          <span className="font-medium text-gray-700">{exp.subtitle}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600">{exp.role}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.filter(s => s === skill).map(tag => (
                            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                              {tag}
                            </span>
                          ))}
                          {exp.skills.filter(s => s !== skill).slice(0, 3).map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillDetailsModal;