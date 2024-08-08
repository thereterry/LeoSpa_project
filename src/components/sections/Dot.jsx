import React from 'react';

const Dots = () => {

  return (
    <div className="flex justify-center space-x-2 mt-6 gap-2">
      <div className="relative flex justify-center items-center">
        <div className="w-2 h-2 bg-red-200 rounded-full cursor-pointer transition-all duration-300 relative">
          <div className="absolute top-1/2 left-1/2 w-6 h-8 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border border-transparent hover:border-black transition-all duration-300 rounded"></div>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="w-2 h-2 bg-red-200 rounded-full cursor-pointer transition-all duration-300 relative">
          <div className="absolute top-1/2 left-1/2 w-6 h-8 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border border-transparent hover:border-black transition-all duration-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Dots;