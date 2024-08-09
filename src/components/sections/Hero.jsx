import React, { useState } from 'react';
import heroImage from '../../assets/Billeder/spa.png';
import leafImage from '../../assets/Billeder/leaf.png';
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  
  // Mock data as a placeholder
  const mockData = {
    title1: "SPA & Beauty Center",
    title2: "Beauty and success starts here",
    content: "Choose the perfect spa treatment for you or that special someone today. Or book in for your regular beauty therapy needs.",
    link: "https://www.youtube.com/watch?v=QWUPm0ND7HY"
  };

  const [data, setData] = useState(mockData);
  
  const [isVideoVisible, setIsVideoVisible] = useState(false); // State to manage video visibility

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  const handleCloseClick = () => {
    setIsVideoVisible(false);
  }

  return (
    <section className="relative flex items-center p-10" style={{ height: '100vh' }}>
      <img src={leafImage} alt="Leaf" className="absolute left-0 top-15" />
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 ml-20">
          <h2 className="text-xl font-medium text-red-400 mb-10 uppercase">{data.title1}</h2>
          <h1 className="text-6xl mb-4">{data.title2}</h1>
          <p
            className="text-lg mb-6 text-gray-500 font-thin"
            dangerouslySetInnerHTML={{
              __html: `
               Together creeping heaven upon third dominion be upon won't darkness rule behold<br />
              it created good saw after she'd Our set living.
              `,
            }}
          ></p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-[#F26A6C] text-white text-lg hover:text-black">
              RESERVE NOW
            </button>
            <div 
              onClick={handlePlayClick} 
              className="flex items-center space-x-2 text-lg text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-full">
                <CiPlay1 className="text-pink-400" style={{ fontSize: '0.80rem' }} />
              </div>
              <span>Watch our story</span>
            </div>
          </div>
          {isVideoVisible && (
            <div className="relative mt-4 w-full flex justify-center">
              <button
                onClick={handleCloseClick}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-2 z-20"
              >
                X
              </button>
              <iframe
                width="960"
                height="540"
                src="https://www.youtube.com/embed/QWUPm0ND7HY?autoplay=1" // Replace with your video link
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <div className="flex-1 text-right hidden md:block">
          <img 
            src={heroImage} 
            alt="Beauty treatment" 
            className="absolute top-[-80px] right-0 h-90 w-auto rounded-lg object-cover z-10 md:block hidden" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;