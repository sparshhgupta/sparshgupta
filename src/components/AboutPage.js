
// About Page Component
const AboutPage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            I'm a passionate software engineer who loves solving real-world problems through technology. 
            With expertise in full-stack development, cloud computing, and machine learning, I enjoy 
            building impactful applications that combine clean code, scalability, and user-focused design. 
            Over the course of my academic journey and professional internships, I've worked on projects 
            ranging from intelligent AI systems to robust backend platforms and interactive web applications.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Background</h2>
          <p className="text-gray-700 mb-6">
            My journey began with a strong foundation in Computer Science, where I developed a curiosity 
            for both software engineering and data-driven decision making. Since then, I've expanded my 
            skill set through diverse projects in areas like natural language processing, software fault 
            prediction, and scalable web systems. I thrive at the intersection of research and development— 
            taking ideas from concept to working solutions while continuously learning new technologies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Design and develop full-stack web applications using modern frameworks</li>
            <li>Architect and implement RESTful APIs and microservices</li>
            {/* <li>Optimize databases for scalability and performance</li> */}
            <li>Build, train, and deploy machine learning models for real-world tasks</li>
            <li>Leverage cloud infrastructure (AWS, OCI) for deployment and DevOps</li>
            <li>Collaborate in cross-functional teams using Agile methodologies</li>
            <li>Develop and experiment with deep learning architectures for computer vision and NLP</li>
            <li>Continuously learn and adapt to emerging technologies and best practices</li>

            
            {/* <li>Gain hands on experience through projects and share knowledge through technical writing</li> */}
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