import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/Billeder/spa.png';
import leafImage from '../../assets/Billeder/leaf.png';
import { CiPlay1 } from "react-icons/ci";
import useRequestData from '../../hooks/useRequestData';

const Hero = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();
  const [heroData, setHeroData] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false); 

  useEffect(() => {
    makeRequest('http://localhost:5029/hero');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      // Filter the data to find the one with "show": true
      const filteredData = data.find(item => item.show === true);
      setHeroData(filteredData);
    }
  }, [data]);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  const handleCloseClick = () => {
    setIsVideoVisible(false);
  };

  // Show loading or error state if needed
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (!heroData) return <p>No data available</p>;

  return (
    <section className="relative flex items-center p-10" style={{ height: '100vh' }}>
      <img src={leafImage} alt="Leaf" className="absolute left-0 top-15" />
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 ml-20">
          <h2 className="text-xl font-medium text-red-400 mb-10 uppercase">{heroData.title1}</h2>
          <h1 className="text-6xl mb-4">
            {heroData.title2.split(' ')[0]} <br />
            {heroData.title2.split(' ').slice(1).join(' ')}
          </h1>
          <p
            className="text-lg mb-6 text-gray-500 font-thin"
            dangerouslySetInnerHTML={{ __html: heroData.content }}
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
                src={`${heroData.link}?autoplay=1`}
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
