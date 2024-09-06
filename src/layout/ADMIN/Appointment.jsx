import React, { useState, useEffect } from 'react';

const Appointment = () => {
  //  minDate and maxDate
  const [minDateString, setMinDateString] = useState('');
  const [maxDateString, setMaxDateString] = useState('');
  
  useEffect(() => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 1);
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 6);

    setMinDateString(minDate.toISOString().split('T')[0]);
    setMaxDateString(maxDate.toISOString().split('T')[0]);
  }, []);

  const [appointmentData, setAppointmentData] = useState({
    id: '', 
    name: '',
    email: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    notes: ''
  });

  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  const validateDateTime = (date, time) => {
    const selectedDate = new Date(`${date}T${time}`);
    const openingStart = new Date(`${date}T08:00`);
    const openingEnd = new Date(`${date}T16:00`);




    if (new Date(date) < new Date(minDateString) || new Date(date) > new Date(maxDateString)) {
      return `Date must be between ${minDateString} and ${maxDateString}.`;
    }

    // 8-16 åbningstider
    if (selectedDate < openingStart || selectedDate > openingEnd) {
      return 'Tider kan kun aftales mellem 08.00 og 16.00.';
    }

    // weekend
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return 'Umuligt at booke tid om weekenden:)';
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value
    });

    if ((name === 'date' || name === 'time') && appointmentData.date && appointmentData.time) {
      const errorMessage = validateDateTime(appointmentData.date, appointmentData.time);
      setError(errorMessage);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = validateDateTime(appointmentData.date, appointmentData.time);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    try {
      const response = await fetch('http://localhost:5029/appointment/myappointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: appointmentData.email,
          phone: appointmentData.phone
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
        setError(null);
      } else {
        setError('Failed to fetch appointments');
      }
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  const handleUpdate = async (appointmentId) => {
    const errorMessage = validateDateTime(appointmentData.date, appointmentData.time);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5029/appointment/admin/${appointmentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        const updatedAppointment = await response.json();
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment._id === appointmentId ? updatedAppointment.updated : appointment
          )
        );
        setError(null);
      } else {
        setError('Failed to update appointment');
      }
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Opret & Overblik Appointments</h2>
      <form onSubmit={handleSubmit} className="mb-8">
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
        <button type="submit" className="btn btn-primary w-full">Fetch Appointments</button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      <div>
        <h3 className="text-xl font-semibold mb-4">Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment._id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Email:</strong> {appointment.email}</p>
                <p><strong>Phone:</strong> {appointment.phone}</p>
                <p><strong>Treatment ID:</strong> {appointment.treatment}</p>
                <p><strong>Date & Time:</strong> {new Date(appointment.dateandtime).toLocaleString()}</p>
                <p><strong>Notes:</strong> {appointment.notes}</p>

                <button
                  onClick={() => handleUpdate(appointment._id)}
                  className="btn btn-warning mt-2"
                >
                  Update Appointment
                </button>
             

              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Appointment;

