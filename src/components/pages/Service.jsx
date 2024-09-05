import React, { useEffect, useState } from 'react';
import flowerLeft from '../../assets/Billeder/china-rose.png';
import flowerRight from '../../assets/Billeder/jasmine.png';
import useRequestData from "../../hooks/useRequestData";
import butterflyImage from '../../assets/Billeder/butterfly.png';
import Icon from '../../assets/Billeder/icons/1.png';

const Service = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();
  const [services, setServices] = useState([]);

  useEffect(() => {
    makeRequest('http://localhost:5029/treatment');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setServices(data);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="relative py-20 bg-white text-center" id='service'>
      <img src={flowerLeft} alt="Flower" className="absolute left-1/2 transform -translate-x-1/2 top-4 md:top-20 w-16 h-16 md:left-60 md:w-24 md:h-24" />
      <div className="container mx-auto px-4">
        <img src={butterflyImage} alt="Butterfly" className='mx-auto mb-6 hidden md:block' />
        <h2 className="text-custom-gray font-medium text-lg uppercase mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service._id} className="relative group">
              <img src={`http://localhost:5029/images/treatment/${service.image}`} alt={service.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-[#F26A6C] bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={Icon} alt="Icon" className="text-white text-4xl mb-2" />
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                {/* <p className="text-white text-sm">{service.content.slice(0, 100)}...</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={flowerRight} alt="Flower" className="absolute right-10 top-40 w-24 h-24 hidden md:block" />
    </section>
  );
};

export default Service;
