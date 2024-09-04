import React, { useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import contactImage from '../../assets/Billeder/appointment-img.jpg';

const Contact = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      email,
      phone,
      treatment: service,
      date,
      time,
      notes,
    };

    makeRequest('http://localhost:5029/appointment', 'POST', appointmentData);
  };

  return (
    <section className="flex flex-wrap bg-[#FEF7F6] py-20" id="contact">
      <div className="w-full lg:w-1/2">
        <img src={contactImage} alt="Contact" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full lg:w-1/2 px-8 lg:px-20 py-10 uppercase">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="border-b border-gray-300 p-2 outline-none bg-transparent" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="border-b border-gray-300 p-2 routline-none bg-transparent focus:border-black focus:ring-0" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="service">Select Service</label>
              <input 
                type="text" 
                id="service" 
                value={service} 
                onChange={(e) => setService(e.target.value)} 
                className="border-b border-gray-300 p-2 outline-none bg-transparent" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2" htmlFor="phone">Phone Number</label>
              <input 
                type="text" 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="border-b border-gray-300 p-2 outline-none bg-transparent" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2" htmlFor="date">Date</label>
              <input 
                type="date" 
                id="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                className="border-b border-gray-300 p-2 outline-none bg-transparent" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-300 mb-2" htmlFor="time">Time</label>
              <input 
                type="time" 
                id="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                className="border-b border-gray-300 p-2 outline-none bg-transparent" 
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm text-gray-400 mb-2 uppercase outline-none bg-transparent" htmlFor="notes"></label>
            <textarea 
              id="notes" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              rows="4" 
              placeholder='YOUR NOTES' 
              className="border-b border-gray-300 p-3 outline-none bg-transparent mt-4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="mt-8 w-64 h-14 py-3 bg-[#F26A6C] text-white text-lg rounded-full hover:bg-black transition-colors uppercase"
          >
            Make an Appointment
          </button>
        </form>
        
  
        {isLoading && <p>Loading...</p>}


        {data && <p className="text-green-500">Appointment created successfully!</p>}
        {error && (
        <div>
          <p className="text-red-500">Failed to create appointment.</p>
          <pre>{JSON.stringify(error, null, 2)}</pre> 
        </div>
        )}
      </div>
    </section>
  );
};

export default Contact;