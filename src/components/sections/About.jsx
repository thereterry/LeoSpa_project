import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import flowerLeft from '../../assets/Billeder/china-rose.png';
import flowerRight from '../../assets/Billeder/jasmine.png';
import useRequestData from "../../hooks/useRequestData";
import butterflyImage from '../../assets/Billeder/butterfly.png';
import massageImg from '../../assets/Billeder/extra_procedures_etc/4.jpg';
import hotStoneImg from '../../assets/Billeder/extra_procedures_etc/5.jpg';
import waxingImg from '../../assets/Billeder/extra_procedures_etc/6.jpg';
import facialImg from '../../assets/Billeder/extra_procedures_etc/7.jpg';
import Icon from '../../assets/Billeder/icons/1.png';

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
      <img src={flowerLeft} alt="Flower" className="absolute left-1/2 transform -translate-x-1/2 top-4 md:top-20 w-16 h-16 md:left-60 md:w-24 md:h-24 " />
      <div className="container mx-auto px-4">
        <img src={butterflyImage} alt="Butterfly" className='mx-auto mb-6 hidden md:block' />
        <h2 className="text-custom-gray font-medium text-lg uppercase mb-4 ">About Our Spa Center</h2>
        <h3 className="text-4xl font-medium mb-4 font-playfair">{aboutData.title}</h3>
        <p
          className={`text-sm mb-6 text-custom-gray font-thin leading-8 ${isExpanded ? '' : 'line-clamp-3'}`}
          dangerouslySetInnerHTML={{ __html: aboutData.content }}
        ></p>
          <Link to="/feature">
          <button 
            className="px-10 py-3 bg-[#F26A6C] text-white text-lg uppercase rounded-full hover:text-black">
            Read More
          </button>
        </Link>
        {/* <button 
          onClick={toggleReadMore} 
          className="px-10 py-3 bg-[#F26A6C] text-white text-lg uppercase rounded-full hover:text-black">
          {isExpanded ? 'Show Less' : 'Read More'}
        </button> */}
      </div>
      <img src={flowerRight} alt="Flower" className="absolute right-10 top-40 w-24 h-24 hidden md:block" />
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative group">
            <img src={massageImg} alt="Massage" className="w-full h-auto" />
            <div className="absolute inset-0 bg-[#F26A6C] bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-playfair">
              <img src={Icon} alt="Icon" className="text-white text-4xl mb-2" />
              <p className="text-white">Body Treatment</p>
            </div>
          </div>
          <div className="relative group">
            <img src={hotStoneImg} alt="Hot Stone" className="w-full h-auto" />
            <div className="absolute inset-0 bg-[#F26A6C] bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-playfair">
              <img src={Icon} alt="Icon" className="text-white text-4xl mb-2" />
              <p className="text-white">Body Treatment</p>
            </div>
          </div>
          <div className="relative group">
            <img src={waxingImg} alt="Waxing" className="w-full h-auto" />
            <div className="absolute inset-0 bg-[#F26A6C] bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-playfair">
              <img src={Icon} alt="Icon" className="text-white text-4xl mb-2" />
              <p className="text-white">Body Treatment</p>
            </div>
          </div>
          <div className="relative group">
            <img src={facialImg} alt="Facial" className="w-full h-auto" />
            <div className="absolute inset-0 bg-[#F26A6C] bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img src={Icon} alt="Icon" className="text-white text-4xl mb-2" />
              <p className="text-white font-playfair">Body Treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;