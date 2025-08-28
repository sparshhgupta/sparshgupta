
// About Page Component
const AboutPage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            I'm a passionate software developer with expertise in full-stack development, 
            machine learning, and cloud computing. With over 5 years of experience, I've 
            worked on projects ranging from distributed systems to AI applications.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Background</h2>
          <p className="text-gray-700 mb-6">
            My journey started with a Computer Science degree, and I've since expanded 
            my expertise through hands-on projects and continuous learning. I specialize 
            in building scalable backend systems, designing efficient databases, and 
            implementing machine learning solutions.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Full-stack web development with modern frameworks</li>
            <li>Backend API design and microservices architecture</li>
            <li>Database design and optimization</li>
            <li>Machine learning model development and deployment</li>
            <li>Cloud infrastructure and DevOps practices</li>
            <li>Open source contributions and technical writing</li>
          </ul>
          
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage('projects')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              See My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;