import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const sectionData = {
  traveling: {
    title: "Traveling",
    icon: "✈️",
    description: "Exploring new places and cultures around the world",
    tag: "Adventure",
    photos: [
      {
        image: "/images/kedarkantha-trek.jpg",
        title: "Kedarkantha Trek",
        description: "An amazing winter trek in Uttarakhand. Reached the summit at 12,500 feet with breathtaking snow-covered peaks all around. The journey through pine forests and meadows was unforgettable."
      },
      {
        image: "/images/goa-beaches.jpg",
        title: "Goa Beaches",
        description: "Relaxing at the pristine beaches of Goa. Enjoyed the golden sunsets, local seafood, and vibrant nightlife. Perfect blend of relaxation and adventure with water sports."
      },
      {
        image: "/images/rajasthan-forts.jpg",
        title: "Rajasthan Forts",
        description: "Explored the magnificent forts of Rajasthan including Amber Fort and Mehrangarh Fort. Rich history, stunning architecture, and vibrant local culture made this trip memorable."
      }
    ]
  },
  volunteering: {
    title: "Volunteering",
    icon: "❤️",
    description: "Making a positive impact in the community",
    tag: "Impact",
    photos: [
      {
        image: "/images/blood-donation.jpg",
        title: "Blood Donation Drive",
        description: "Organized and participated in multiple blood donation camps. Helped save lives by coordinating with local hospitals and encouraging community participation."
      },
      {
        image: "/images/teaching-kids.jpg",
        title: "Teaching Underprivileged Kids",
        description: "Volunteered at local NGOs to teach basic computer skills and mathematics to underprivileged children. Seeing their enthusiasm to learn was truly rewarding."
      },
      {
        image: "/images/environmental-cleanup.jpg",
        title: "Environmental Cleanup",
        description: "Participated in beach and park cleanup drives. Collected plastic waste and planted saplings to contribute towards environmental conservation."
      }
    ]
  },
  sports: {
    title: "Sports",
    icon: "🏃‍♂️",
    description: "Staying active and competitive through various sports",
    tag: "Fitness",
    photos: [
      {
        image: "/images/chess-tournament.jpg",
        title: "Chess Tournaments",
        description: "Regular participant in local and online chess tournaments. Love the strategic thinking and mental challenges that chess provides. Currently rated 1650 on Chess.com."
      },
      {
        image: "/images/badminton-court.jpg",
        title: "Badminton",
        description: "Play badminton regularly at the local sports club. Great cardio workout and helps maintain agility. Participate in weekend doubles tournaments with friends."
      },
      {
        image: "/images/cricket-match.jpg",
        title: "Cricket",
        description: "Weekend cricket matches with college friends. Playing as an all-rounder, I enjoy both batting and bowling. Nothing beats the team spirit and excitement of the game."
      }
    ]
  },
  social_life: {
    title: "Social Life",
    icon: "🎉",
    description: "Well......",
    tag: "",
    photos: [
      {
        image: "/images/404.jpg",
        title: "Error 404",
        description: "Social Life Not Found"
      }
    ]
  }
};

export default function FunSection() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openModal = (sectionKey) => {
    setSelectedSection(sectionKey);
    setCurrentPhotoIndex(0);
  };

  const closeModal = () => {
    setSelectedSection(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedSection) {
      setCurrentPhotoIndex((prev) => 
        (prev + 1) % sectionData[selectedSection].photos.length
      );
    }
  };

  const prevPhoto = () => {
    if (selectedSection) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? sectionData[selectedSection].photos.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50" id="fun">
      <h2 className="text-3xl font-bold text-center mb-10">
        Beyond the Code <span className="text-indigo-600">✨</span>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(sectionData).map(([key, section]) => (
          <div
            key={key}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer overflow-hidden"
            onClick={() => openModal(key)}
          >
            <div className="h-48 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-6xl">{section.icon}</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <span className="inline-block text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                {section.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">{sectionData[selectedSection].icon}</span>
                {sectionData[selectedSection].title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Photo Carousel */}
                <div className="relative">
                  <div className="relative h-64 lg:h-80 bg-gray-200 rounded-xl overflow-hidden">
                    <img
                      src={sectionData[selectedSection].photos[currentPhotoIndex].image}
                      alt={sectionData[selectedSection].photos[currentPhotoIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevPhoto}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Photo Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {sectionData[selectedSection].photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentPhotoIndex 
                            ? 'bg-indigo-600 scale-110' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-indigo-600">
                    {sectionData[selectedSection].photos[currentPhotoIndex].title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {sectionData[selectedSection].photos[currentPhotoIndex].description}
                  </p>
                  
                  {/* Photo counter */}
                  <div className="text-sm text-gray-500">
                    {currentPhotoIndex + 1} of {sectionData[selectedSection].photos.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}