import React, { useEffect, useState } from 'react';
import flowerLeft from '../../assets/Billeder/china-rose.png';
import flowerRight from '../../assets/Billeder/jasmine.png';
import useRequestData from "../../hooks/useRequestData";
import butterflyImage from '../../assets/Billeder/butterfly.png'; //
import massageImg from '../../assets/Billeder/extra_procedures_etc/4.jpg';
import hotStoneImg from '../../assets/Billeder/extra_procedures_etc/5.jpg';
import waxingImg from '../../assets/Billeder/extra_procedures_etc/6.jpg';
import facialImg from '../../assets/Billeder/extra_procedures_etc/7.jpg';
import Icon from '../../assets/Billeder/icons/1.png'
 import { NavLink } from 'react-router-dom';


const About = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();

  const [aboutData, setAboutData] = useState({ title: '', content: '' });

  const [isExpanded, setIsExpanded] = useState(false);


  useEffect(() => {
    makeRequest('http://localhost:5029/about');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setAboutData(data);
    }
  }, [data]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (isLoading) return <p>Loading...</p>;
  
  if (error) return <p>Error loading data</p>;

  return (
    <section className="relative py-20 bg-white text-center" id='about'>
      <img src={flowerLeft} alt="Flower" className="absolute left-60 top-20 w-24 h-24" />
      <div className="container mx-auto px-4">
        <img src={butterflyImage} alt="Butterfly" className='mx-auto mb-6' />
        <h2 className="text-custom-gray font-medium text-lg uppercase mb-4 ">About Our Spa Center</h2>
        <h3 className="text-4xl font-medium mb-4 font-display">{aboutData.title}</h3>
        <p
  className="text-sm mb-6 text-custom-gray font-thin leading-8"
  dangerouslySetInnerHTML={{
    __html: `
      It's the end of summer, the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights.<br />
      The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets <br />darker and darker.
    `,
  }}
></p>
{/* 
        <button className="px-10 py-3 bg-[#F26A6C] text-white text-lg uppercase rounded-full hover:text-black">Read More</button>
      </div>
      <img src={flowerRight} alt="Flower" className="absolute right-10 top-40 w-24 h-24" />
      <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[massageImg, hotStoneImg, waxingImg, facialImg].map((img, index) => (
            <div key={index} className="relative group">
              <img src={img} alt="Procedure" className="w-full h-auto" />
              <div className="absolute inset-0  bg-[#F26A6C] bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={Icon} alt="Icon" className="text-white text-4xl mb-2" />
                <p className="text-white  font-display">Body Treatment</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    

    </section> */}
     <button 
          onClick={toggleReadMore} 
          className="px-10 py-3 bg-[#F26A6C] text-white text-lg uppercase rounded-full hover:text-black">
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
        <div className="mt-6">
            <NavLink to="/feature" className="text-lg text-blue-500 hover:text-blue-700">
                Learn more about our Features
          </NavLink>
        </div>
      </div>
      <img src={flowerRight} alt="Flower" className="absolute right-10 top-40 w-24 h-24" />
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[massageImg, hotStoneImg, waxingImg, facialImg].map((img, index) => (
            <div key={index} className="relative group">
              <img src={img} alt="Procedure" className="w-full h-auto" />
              <div className="absolute inset-0 bg-[#F26A6C] bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={Icon} alt="Icon" className="text-white text-4xl mb-2" />
                <p className="text-white font-display">Body Treatment</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default About;