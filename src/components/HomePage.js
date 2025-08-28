import React, { useState } from 'react';
import { User, Briefcase, Mail, ArrowLeft, Building, GraduationCap, ExternalLink, Github } from 'lucide-react';
import SkillDetailsModal from './SkillDetailsModal';
import projects from './data/projects_data';
import { experienceData } from './data/timeline_data';
// Sample projects data (using your structure)
// const projects = [
//   {
//     id: 1,
//     title: 'Scalable API Service',
//     description: 'A high-performance RESTful API with PostgreSQL database integration for handling millions of requests.',
//     categories: ['backend', 'databases'],
//     gradient: 'from-blue-500 to-indigo-600',
//     icon: '🗄️',
//     tags: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
//     skills: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
//     fullDescription: 'Built a robust RESTful API service capable of handling millions of concurrent requests with PostgreSQL database integration.',
//     features: [
//       'High-performance request handling',
//       'Database connection pooling',
//       'Auto-scaling capabilities',
//       'Comprehensive monitoring and logging'
//     ],
//     useCases: [
//       { title: 'E-commerce Platform', description: 'Powers high-traffic online stores with real-time inventory management.' },
//       { title: 'Social Media Backend', description: 'Handles user interactions and content delivery for social platforms.' }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Image Recognition Model',
//     description: 'A convolutional neural network trained to identify objects in images with high accuracy.',
//     categories: ['machine_learning', 'deep_learning'],
//     gradient: 'from-green-500 to-teal-500',
//     icon: '🖼️',
//     tags: ['Python', 'TensorFlow', 'PyTorch'],
//     skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
//     fullDescription: 'Advanced CNN model for computer vision tasks with 92% accuracy on benchmark tests.',
//     features: ['Real-time object detection', 'Multi-class classification', 'Transfer learning support'],
//     useCases: [
//       { title: 'Medical Imaging', description: 'Assists in diagnostic imaging and anomaly detection.' },
//       { title: 'Quality Control', description: 'Automated inspection for manufacturing processes.' }
//     ]
//   },
//   {
//     id: 3,
//     title: 'React Dashboard',
//     description: 'Interactive dashboard built with React and TypeScript for data visualization.',
//     categories: ['frontend', 'web_development'],
//     gradient: 'from-purple-500 to-pink-500',
//     icon: '📊',
//     tags: ['React', 'TypeScript', 'MongoDB'],
//     skills: ['React', 'TypeScript', 'MongoDB'],
//     fullDescription: 'Modern dashboard application with real-time data updates and interactive charts.',
//     features: ['Real-time updates', 'Interactive charts', 'Responsive design', 'User authentication'],
//     useCases: [
//       { title: 'Analytics Platform', description: 'Business intelligence and data visualization tool.' },
//       { title: 'Admin Panel', description: 'Content management and system administration interface.' }
//     ]
//   }
// ];

// Sample experience data (using your structure)
const timelineData = [
  {
    point: 1,
    icon: "school",
    year: "2014-2018",
    type: "Education",
    title: "Bachelor of Science in Computer Science",
    subtitle: "Stanford University",
    role: "Undergraduate Student",
    description: "Graduated summa cum laude with a focus on artificial intelligence and machine learning.",
    tags: ["Python", "Java", "Machine Learning", "Algorithms"],
    skills: ["Python", "Java", "Machine Learning"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png"
  },
  {
    point: 2,
    icon: "work",
    year: "2018-2020",
    type: "Work Experience",
    title: "Junior Software Engineer",
    subtitle: "Google",
    role: "Software Engineer",
    description: "Developed and optimized search algorithms that improved query response time by 15%.",
    tags: ["Java", "Python", "Distributed Systems", "Performance Optimization"],
    skills: ["Java", "Python", "Go", "Kubernetes"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
  },
  {
    point: 3,
    icon: "work",
    year: "2020-2022",
    type: "Work Experience",
    title: "Machine Learning Engineer",
    subtitle: "OpenAI",
    role: "ML Engineer",
    description: "Key contributor to language model development and fine-tuning processes.",
    tags: ["PyTorch", "TensorFlow", "Transformer Models", "NLP"],
    skills: ["PyTorch", "TensorFlow", "Python", "Machine Learning"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png"
  },
  {
    point: 4,
    icon: "work",
    year: "2022-Present",
    type: "Work Experience",
    title: "Lead AI Researcher",
    subtitle: "DeepMind",
    role: "Senior Researcher & Team Lead",
    description: "Leading a multidisciplinary team working on next-generation AI systems.",
    tags: ["Research Leadership", "Generative AI", "Team Management"],
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DeepMind_logo.png/1200px-DeepMind_logo.png"
  }
];

// Home Page Component
const HomePage = ({ setCurrentPage }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  
//   const skills = [
//     'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker',
//     'MongoDB', 'PostgreSQL', 'TensorFlow', 'PyTorch', 'Kubernetes', 'Go',
//     'Java', 'Machine Learning'
//   ];

const skills = [
  "AWS",
  "Backend Development",
  "Cloud Computing",
  "Computer Vision",
  "Database Management",
  "Data Mining",
  "Deep Learning",
  "DynamoDB",
  "Express",
  "Generative AI",
  "Grafana",
  "Lambda",
  "Machine Learning",
  "NLP",
  "Node.js",
  "Object Detection",
  "Oracle Cloud",
  "PL/SQL",
  "PostgreSQL",
  "Prometheus",
  "PyTorch",
  "Roboflow",
  "S3",
  "Software Metrics",
  "System Monitoring",
  "Video Processing",
  "YOLOv8",
  "Explainability",
  "Model Fine-Tuning"
];


  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <User size={64} className="text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Sparsh Gupta</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Full Stack Developer & Machine Learning Engineer passionate about building 
                scalable systems and innovative AI solutions
              </p>
                        
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 flex items-center space-x-2"
                >
                  <Briefcase size={20} />
                  <span>View My Projects</span>
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg flex items-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
           
            {/* Quick Stats */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
            </div> */}
           
            {/* Interactive Skills Preview */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Technologies</h2>
              <p className="text-gray-600 mb-6">Click on any skill to see related projects and work experience</p>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((tech, index) => (
                  <button
                    key={index}
                    onClick={() => handleSkillClick(tech)}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Details Modal */}
      <SkillDetailsModal 
        skill={selectedSkill} 
        onClose={() => setSelectedSkill(null)}
        projects={projects}
        experiences={experienceData}
      />
    </div>
  );
};

export default HomePage;