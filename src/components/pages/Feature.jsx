import React from 'react';
import eventImage1 from '../../assets/beauty/beauty1.jpg';
import eventImage2 from '../../assets/beauty/beauty2.jpg';
import eventImage3 from '../../assets/beauty/beauty3.jpg';

const Feature = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-medium mb-8 font-playfair">Upcoming Events</h1>
        <p className="text-sm text-center mb-12 text-custom-gray font-thin leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex flex-wrap -mx-2">
          {/* Event 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex">
            <div className="bg-white shadow-md border overflow-hidden h-full flex flex-col w-full">
              <img src={eventImage1} alt="Event 1" className="h-64 object-cover" />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h2 className="text-2xl font-playfair mt-4">Spa Evening Extravaganza</h2>
                <p className="text-sm font-thin text-gray-700 mb-6 flex-grow mt-4 leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                 <div className="flex justify-center">
                  <a href="#" className="px-4 py-2 bg-[#242A2C] w-40 text-white text-base rounded-full hover:bg-[#F26A6C] uppercase">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex">
            <div className="bg-white shadow-md border overflow-hidden h-full flex flex-col w-full">
              <img src={eventImage2} alt="Event 2" className="h-64 object-cover" />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h2 className="text-2xl font-playfair mt-4">Beauty Product Showcase</h2>
                <p className="text-sm font-thin text-gray-700 mb-6 flex-grow mt-4 leading-6">
                  Join us for an exclusive showcase of the latest beauty products. Meet industry experts, try out new products, and enjoy special discounts.
                </p>
                <div className="flex justify-center">
                  <a href="#" className="px-4 py-2 bg-[#242A2C] w-40 text-white text-base rounded-full hover:bg-[#F26A6C] uppercase">Learn More</a>
                </div>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex">
            <div className="bg-white shadow-md border overflow-hidden h-full flex flex-col w-full">
              <img src={eventImage3} alt="Event 3" className="h-64 object-cover" />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <h2 className="text-2xl font-playfair mt-4">Exclusive Beauty Night</h2>
                <p className="text-sm font-thin text-gray-700 mb-6 flex-grow mt-4 leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-center">
                  <a href="#" className="px-4 py-2 bg-[#242A2C] w-40 text-white text-base rounded-full hover:bg-[#F26A6C] uppercase">Learn More</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feature;

