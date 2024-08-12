import React from 'react';
import contactImage from '../../assets/Billeder/appointment-img.jpg';



const Contact = () => {
  
  return (
    <section className="flex flex-wrap bg-[#FEF7F6] py-20" id='contact'>
      <div className="w-full lg:w-1/2">
        <img src={contactImage} alt="Contact" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full lg:w-1/2 px-8 lg:px-20 py-10 uppercase">
    
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="border-b border-gray-300 p-2 outline-none bg-transparent" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="border-b border-gray-300 p-2 routline-none bg-transparent focus:border-black focus:ring-0" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="service">Select Service</label>
              <input type="text" id="service" className="border-b border-gray-300 p-2 outline-none bg-transparent" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" className="border-b border-gray-300 p-2 outline-none bg-transparent" />
            </div>
            <div className="flex flex-col">
            
              <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2" htmlFor="date"></label>
              <input type="date" id="date" className="border-b border-gray-300 p-2 outline-none bg-transparent" />
            </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-300 mb-2" htmlFor="time"></label>
              <input type="time" id="time" className="border-b border-gray-300 p-2 outline-none bg-transparent" />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm text-gray-400 mb-2 uppercase outline-none bg-transparent" htmlFor="notes"></label>
            <textarea id="notes" rows="4" placeholder='YOUR NOTES' className="border-b border-gray-300 p-3 outline-none bg-transparent mt-4"></textarea>
          </div>
          <button type="submit" className="mt-8 w-64 h-14 py-3 bg-[#F26A6C] text-white text-lg rounded-full hover:bg-black transition-colors uppercase">Make an Appointment</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;