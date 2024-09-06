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
        const errorData = await response.json();
        console.error('Failed to create appointment:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await fetch('http://localhost:5029/appointment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(appointmentData),
  //     });

  //     if (response.ok) {
  //       console.log('Appointment created successfully');
  //       setAppointmentData({
  //         name: '',
  //         email: '',
  //         phone: '',
  //         treatment: '',
  //         date: '',
  //         time: '',
  //         notes: ''
  //       });
  //     } else {
  //       console.error('Failed to create appointment');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a New Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input
            type="text"
            name="name"
            value={appointmentData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="email"
            name="email"
            value={appointmentData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Phone:</span>
          </label>
          <input
            type="text"
            name="phone"
            value={appointmentData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Treatment:</span>
          </label>
          <input
            type="text"
            name="treatment"
            value={appointmentData.treatment}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Date:</span>
          </label>
          <input
            type="date"
            name="date"
            value={appointmentData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Time:</span>
          </label>
          <input
            type="time"
            name="time"
            value={appointmentData.time}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Notes:</span>
          </label>
          <textarea
            name="notes"
            value={appointmentData.notes}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Create Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;