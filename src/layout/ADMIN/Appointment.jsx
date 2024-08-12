import React, { useState } from 'react';

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5029/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        console.log('Appointment created successfully');
        // Reset form or handle success as needed
        setAppointmentData({
          name: '',
          email: '',
          phone: '',
          treatment: '',
          date: '',
          time: '',
          notes: ''
        });
      } else {
        console.error('Failed to create appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={appointmentData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={appointmentData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={appointmentData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Treatment:</label>
          <input type="text" name="treatment" value={appointmentData.treatment} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={appointmentData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" value={appointmentData.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Notes:</label>
          <textarea name="notes" value={appointmentData.notes} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Create Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;