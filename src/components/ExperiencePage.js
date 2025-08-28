import { useState } from 'react';
import timelineData from './data/timeline_data';

const TimelineItem = ({ point, icon, year, type, title, subtitle, description, tags, isVisible, onClick, isExpanded, onHover, isHovered, logo, role }) => {
  if (!isVisible) return null;

  return (
    <div className={`flex items-start mb-8 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} min-h-[100px]`}>
      {/* Left side - Company/University name */}
      <div className="flex-1 text-right pr-8 pt-2">
        <div className={`inline-block px-4 py-2 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer
                        ${type === "Education" 
                          ? "text-blue-700 hover:bg-blue-50" 
                          : "text-purple-700 hover:bg-purple-50"}
                        ${isHovered ? 'transform scale-105' : ''}`}
          onMouseEnter={() => onHover(point)}
          onMouseLeave={() => onHover(null)}
          onClick={onClick}
        >
          {subtitle}
        </div>
        <div className={`text-sm font-medium mt-1 transition-all duration-300
                        ${type === "Education" 
                          ? "text-blue-600" 
                          : "text-purple-600"}`}>
          {year}
        </div>
        <div className="text-sm text-gray-600 italic mt-1">
          {role}
        </div>
      </div>

      {/* Center - Logo */}
      <div className="relative flex-shrink-0 mt-2">
        <button
          className={`z-20 w-16 h-16 rounded-full bg-white shadow-lg border-4 transition-all duration-300 group relative overflow-hidden
                     ${type === "Education" 
                       ? "border-blue-500 hover:border-blue-600" 
                       : "border-purple-500 hover:border-purple-600"}
                     ${isHovered || isExpanded ? 'scale-110 shadow-2xl' : 'hover:scale-105'}`}
          onClick={onClick}
          onMouseEnter={() => onHover(point)}
          onMouseLeave={() => onHover(null)}
        >
          {/* Logo background */}
          <div className="absolute inset-2 rounded-full bg-gray-50 flex items-center justify-center">
            {logo ? (
              <img src={logo} alt={subtitle} className="w-8 h-8 object-contain" />
            ) : (
              <span className={`text-2xl font-bold
                               ${type === "Education" ? "text-blue-600" : "text-purple-600"}`}>
                {subtitle.charAt(0)}
              </span>
            )}
          </div>

          {/* Pulse animation for hovered item */}
          {(isHovered || isExpanded) && (
            <div className={`absolute inset-0 rounded-full animate-ping opacity-30
                            ${type === "Education" ? "bg-blue-400" : "bg-purple-400"}`}></div>
          )}
        </button>
      </div>

      {/* Right side - Details */}
      <div className="flex-1 pl-8 pt-2 min-h-[80px]">
        {(isHovered || isExpanded) && (
          <div className={`bg-white rounded-xl shadow-xl p-6 border-l-4 max-w-md transition-all duration-500
                          ${type === "Education" ? "border-blue-500" : "border-purple-500"} 
                          ${isExpanded ? 'animate-expandIn' : 'animate-fadeInUp'}`}>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3
              ${type === "Education" 
                ? "bg-blue-100 text-blue-800" 
                : "bg-purple-100 text-purple-800"}`}>
              {type}
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            
            {isExpanded && (
              <>
                <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default
                                 ${type === "Education" 
                                   ? "bg-blue-50 text-blue-700 border border-blue-200" 
                                   : "bg-purple-50 text-purple-700 border border-purple-200"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onClick}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm font-medium"
                >
                  Click to collapse ▲
                </button>
              </>
            )}
            
            {!isExpanded && (
              <p className="text-sm text-gray-500 mt-2">
                Click for more details →
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showWork, setShowWork] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredData = timelineData.filter(item => {
    if (showEducation && showWork) return true;
    if (showEducation && item.type === "Education") return true;
    if (showWork && item.type === "Work Experience") return true;
    return false;
  });

  const handleItemClick = (point) => {
    setExpandedItem(expandedItem === point ? null : point);
  };

  const getStats = () => {
    const educationCount = timelineData.filter(item => item.type === "Education").length;
    const workCount = timelineData.filter(item => item.type === "Work Experience").length;
    return { educationCount, workCount, total: timelineData.length };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandIn {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
        
        .animate-expandIn {
          animation: expandIn 0.5s ease-out;
        }
      `}</style>

      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore my educational background and professional experience that have shaped my career in technology and AI.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.educationCount}</div>
              <div className="text-sm text-gray-600">Education</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.workCount}</div>
              <div className="text-sm text-gray-600">Work Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Milestones</div>
            </div>
          </div>
        </header>

        {/* Enhanced Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">Filter Timeline</h3>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={showEducation}
                  onChange={(e) => setShowEducation(e.target.checked)}
                  className="sr-only"
                />
                <div className={`relative w-5 h-5 rounded border-2 transition-all duration-200 mr-3
                               ${showEducation 
                                 ? 'bg-blue-500 border-blue-500' 
                                 : 'bg-white border-gray-300 group-hover:border-blue-400'}`}>
                  {showEducation && (
                    <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm font-medium transition-colors duration-200 
                               ${showEducation ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'}`}>
                  🎓 Education ({stats.educationCount})
                </span>
              </label>

              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={showWork}
                  onChange={(e) => setShowWork(e.target.checked)}
                  className="sr-only"
                />
                <div className={`relative w-5 h-5 rounded border-2 transition-all duration-200 mr-3
                               ${showWork 
                                 ? 'bg-purple-500 border-purple-500' 
                                 : 'bg-white border-gray-300 group-hover:border-purple-400'}`}>
                  {showWork && (
                    <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm font-medium transition-colors duration-200 
                               ${showWork ? 'text-purple-700' : 'text-gray-600 group-hover:text-purple-600'}`}>
                  💼 Work Experience ({stats.workCount})
                </span>
              </label>
            </div>
            
            {!showEducation && !showWork && (
              <p className="text-amber-600 text-sm mt-3 text-center font-medium">
                ⚠️ Select at least one category to view timeline
              </p>
            )}
          </div>
        </div>

        {/* Timeline Container */}
        {(showEducation || showWork) && (
          <div className="max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 
                              bg-gradient-to-b from-blue-400 via-purple-400 to-pink-500 rounded-full shadow-sm"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {filteredData.map((item, i) => (
                  <TimelineItem
                    key={item.point}
                    {...item}
                    isVisible={true}
                    onClick={() => handleItemClick(item.point)}
                    isExpanded={expandedItem === item.point}
                    onHover={setHoveredItem}
                    isHovered={hoveredItem === item.point}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Helpful Instructions */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">How to Navigate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🖱️</span>
                <span><strong>Hover</strong> over company/university names for preview</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">👆</span>
                <span><strong>Click</strong> for full details on the right</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Filter</strong> using checkboxes above</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🏷️</span>
                <span><strong>Logos</strong> represent each institution</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;