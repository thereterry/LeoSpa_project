import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/Billeder/spa.png';
import leafImage from '../../assets/Billeder/leaf.png';
import { CiPlay1 } from "react-icons/ci";
import useRequestData from '../../hooks/useRequestData';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();

  const [heroData, setHeroData] = useState(null);

  const navigate = useNavigate();

  const handleReserveNow = () => {
    navigate('/reserve'); // Navigate to the reserve page
  };


  useEffect(() => {
    makeRequest('http://localhost:5029/hero');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      const filteredData = data.find(item => item.show === true);
      setHeroData(filteredData);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (!heroData) return <p>No data available</p>;

  return (
    <section className="relative flex items-center p-10" style={{ height: '100vh' }}>
      <img src={leafImage} alt="Leaf" className="absolute left-0 top-15 w-24 md:w-48" /> 
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 ml-20">
          <h2 className="text-xl font-medium text-red-400 mb-10 uppercase">
            {heroData.title1.replace("Beuty", "Beauty")}
          </h2>
          <h1 className="text-2xl md:text-6xl mb-4">
            {heroData.title2.split(' ').slice(0, 3).join(' ')} <br />
            {heroData.title2.split(' ').slice(3).join(' ')}.
          </h1>
          <p
            className="text-lg mb-6 text-gray-500 font-thin"
            dangerouslySetInnerHTML={{ __html: heroData.content }}
          ></p>

          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              {/*Hero component code */}
              <button onClick={handleReserveNow} className="px-6 py-2 bg-[#F26A6C] text-white text-lg hover:text-black">
              RESERVE NOW
              </button>
  
            <a
              href={`https://www.youtube.com/watch?v=${heroData.link.split('?v=')[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lg text-gray-700 hover:text-gray-900"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-full">
                <CiPlay1 className="text-pink-400" style={{ fontSize: '0.80rem' }} />
              </div>
              <span>Watch our story</span>
            </a>
          </div>
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
