import React from 'react';

const Reserve = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Reserve Your Spot</h1>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="date">
            Reservation Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="time">
            Reservation Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#F26A6C] text-white rounded-md font-semibold hover:bg-red-500 transition-colors"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default Reserve;