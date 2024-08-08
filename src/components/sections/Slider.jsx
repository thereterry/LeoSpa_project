import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import quoteIcon from '../../assets/Billeder/quote.png'; // Add a quote icon
import useRequestData from '../../hooks/useRequestData';
import client1 from '../../assets/Billeder/customers/client-1.png';
import client3 from '../../assets/Billeder/customers/client-3.png';
import client4 from '../../assets/Billeder/customers/client-4.png';
import client5 from '../../assets/Billeder/customers/client-5.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = {
  'client-1.png': client1,
  'client-3.png': client3,
  'client-4.png': client4,
  'client-5.png': client5,
  
  // Add all other image mappings here
};

const RecommendationSlider = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();

  const [recommendations, setRecommendations] = useState([]);

  // const [pageIndex, setPageIndex] = useState(0); // For tracking which recommendation to display


  useEffect(() => {
    makeRequest('http://localhost:5029/recommendation');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data); // Log fetched data
      setRecommendations(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error fetching data:', error); // Log the error
    return <div>Error loading data</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: i => (
      <div className="relative flex items-center justify-center">
        <div className="w-2 h-2 bg-red-300 rounded-full cursor-pointer transition-all duration-300 relative">
          <div className="absolute top-1/2 left-1/2 w-4 h-6 transform -translate-x-1/2 -translate-y-1/2  bg-transparent border-2 border-transparent hover:border-black transition-all duration-300 rounded">
          </div>
        </div>
      </div>
    ),

    appendDots: dots => (
      <div className="flex justify-center space-x-2 mt-6 gap-2">
         {/* {dots.slice(0, 4)} Show only the first four dots */}
         {dots.slice(0, 4)} 
      </div>
    ),
    // beforeChange: (current, next) => setPageIndex(next % 2) // Reset page index to loop through only two dots
  };

  return (
    <section className="bg-[#FEF7F6] py-20 text-center">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {recommendations && recommendations.map((recommendation, index) => (
            <div key={index} className="mb-12">
              <img src={quoteIcon} alt="Quote Icon" className="mx-auto mb-6 w-12 h-12" />
              <p
          className="text-base text-gray-700 mb-6 font-display max-w-4xl mx-auto leading-8"
          dangerouslySetInnerHTML={{
            __html: `
              First i beast be fruitful open all Won't can't likeness and you're have whales creature seed to two grass
              <br />
              life blessed you meat shall you winged under from their there he That you're one called gather make much red,<br />
              wherein set fourth green bearing fifth replenish given she had.
            `,
          }}
        ></p>
              <div className="flex justify-center items-center flex-col">
                <img
                  src={images[recommendation.image]} // Use the images object to get the image path
                  alt={recommendation.name}
                  className="rounded-full w-24 h-24 mb-4"
                />
               <p className="text-2xl text-gray-600 font-thin font-display">
                  {recommendation.name},
                  <span className="text-gray-600 text-base font-sans ml-3">{recommendation.title}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecommendationSlider;