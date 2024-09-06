// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminAppointment = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedTreatmentId, setSelectedTreatmentId] = useState('');
//   const [dateRange, setDateRange] = useState({ start: '', end: '' });

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get('http://localhost:5029/appointment/admin');
//         const data = response.data;
//         setAppointments(data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const handleTreatmentChange = (event) => {
//     setSelectedTreatmentId(event.target.value);
//   };

//   const handleDateRangeChange = (event) => {
//     const { name, value } = event.target;
//     setDateRange(prevRange => ({ ...prevRange, [name]: value }));
//   };

//   // Filter and sort appointments
//   const filteredAppointments = appointments
//     .filter(appointment => {
//       const appointmentDate = new Date(appointment.dateandtime);
//       const today = new Date();
//       const startDate = dateRange.start ? new Date(dateRange.start) : new Date(0);
//       const endDate = dateRange.end ? new Date(dateRange.end) : new Date(8640000000000000); 

//       return appointmentDate >= today &&
//         (appointment.treatment?._id === selectedTreatmentId || selectedTreatmentId === '') &&
//         appointmentDate >= startDate &&
//         appointmentDate <= endDate;
//     })
//     .sort((a, b) => new Date(a.dateandtime) - new Date(b.dateandtime));

//   // Group appointments by date
//   const groupedAppointments = filteredAppointments.reduce((groups, appointment) => {
//     const date = new Date(appointment.dateandtime).toDateString();
//     if (!groups[date]) groups[date] = [];
//     groups[date].push(appointment);
//     return groups;
//   }, {});

//   const treatments = [
//     { id: '607b505b2bb5b518589e4d1f', title: 'SPA Massage' },
//     { id: '607b4f522bb5b518589e4d1e', title: 'Massage' },
//     { id: '607b52832bb5b518589e4d20', title: 'Hydrafacials' },
//     { id: '607b4e662bb5b518589e4d1d', title: 'Waxing' },
//   ];

// //(evt.Print)
//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Appointments</h1>
      
//       {/* Dropdown for selecting treatment */}
//       <label htmlFor="treatment-select" className="block mb-2">Select Treatment:</label>
//       <select id="treatment-select" onChange={handleTreatmentChange} value={selectedTreatmentId} className="mb-4 p-2 border border-gray-300 rounded">
//         <option value="">All Treatments</option>
//         {treatments.map(treatment => (
//           <option key={treatment.id} value={treatment.id}>
//             {treatment.title}
//           </option>
//         ))}
//       </select>
      
//       {/* Print button */}
//       <button
//         onClick={() => window.print()}
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Print
//       </button>
      
//       {/* Display filtered appointments */}
//       <ul className="print:block">
//         {filteredAppointments.map(appointment => (
//           <li key={appointment._id} className="mb-4 p-4 border border-gray-300 rounded print:border-none print:p-0">
//             <p><strong>Name:</strong> {appointment.name}</p>
//             <p><strong>Email:</strong> {appointment.email}</p>
//             <p><strong>Phone:</strong> {appointment.phone}</p>
//             <p><strong>Treatment:</strong> {appointment.treatment?.title || 'N/A'}</p>
//             <p><strong>Date and Time:</strong> {new Date(appointment.dateandtime).toLocaleString()}</p>
//             <p><strong>Notes:</strong> {appointment.notes}</p>
//           </li>
//         ))}
//       </ul>

//       {/* Print-specific styles */}
//       <style jsx global>{`
//         @media print {
//           .print\\:block {
//             display: block !important;
//           }
//           .print\\:hidden {
//             display: none !important;
//           }
//           .print\\:border-none {
//             border: none !important;
//           }
//           .print\\:p-0 {
//             padding: 0 !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AdminAppointment;
// //   return (
    
// //     <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
// //       <h2 className="text-2xl font-bold mb-6 text-center">Appointments Overview</h2>

// //       {/* Treatment Filter */}
// //       <div className="mb-4">
// //         <label htmlFor="treatment-select">Select Treatment:</label>
// //         <select id="treatment-select" onChange={handleTreatmentChange} value={selectedTreatmentId}>
// //           <option value="">All Treatments</option>
// //           {treatments.map(treatment => (
// //             <option key={treatment.id} value={treatment.id}>
// //               {treatment.title}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* Date Range Filter */}
// //       <div className="mb-4">
// //         <label htmlFor="start-date">Start Date:</label>
// //         <input
// //           type="date"
// //           id="start-date"
// //           name="start"
// //           value={dateRange.start}
// //           onChange={handleDateRangeChange}
// //         />
// //         <label htmlFor="end-date">End Date:</label>
// //         <input
// //           type="date"
// //           id="end-date"
// //           name="end"
// //           value={dateRange.end}
// //           onChange={handleDateRangeChange}
// //         />
// //       </div>

// //       {/* Display appointments grouped by date */}
// //       {Object.keys(groupedAppointments).map(date => (
// //         <div key={date} className="mb-6">
// //           <h3 className="text-xl font-bold mb-2">{date}</h3>
// //           <ul>
// //             {groupedAppointments[date].map(appointment => (
// //               <li key={appointment._id} className={`border p-4 mb-2 rounded-lg ${getColorForTreatment(appointment.treatment?._id)}`}>
// //                 <p>Name: {appointment.name}</p>
// //                 <p>Email: {appointment.email}</p>
// //                 <p>Phone: {appointment.phone}</p>
// //                 <p>Treatment: {appointment.treatment?.title || 'N/A'}</p>
// //                 <p>Date and Time: {new Date(appointment.dateandtime).toLocaleString()}</p>
// //                 <p>Notes: {appointment.notes}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };


// // const getColorForTreatment = (treatmentId) => {
// //   const colorMap = {
// //     '607b505b2bb5b518589e4d1f': 'bg-blue-100',  // SPA Massage
// //     '607b4f522bb5b518589e4d1e': 'bg-green-100', // Massage
// //     '607b52832bb5b518589e4d20': 'bg-yellow-100', // Hydrafacials
// //     '607b4e662bb5b518589e4d1d': 'bg-red-100',   // Waxing
// //   };
// //   return colorMap[treatmentId] || 'bg-gray-100';
// // };

// // export default AdminAppointment;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5029/appointment/admin');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleTreatmentChange = (event) => {
    setSelectedTreatmentId(event.target.value);
  };

  const handleDateRangeChange = (event) => {
    const { name, value } = event.target;
    setDateRange(prevRange => ({ ...prevRange, [name]: value }));
  };

  const filteredAppointments = appointments
    .filter(appointment => {
      const appointmentDate = new Date(appointment.dateandtime);
      const today = new Date();
      const startDate = dateRange.start ? new Date(dateRange.start) : new Date(0);
      const endDate = dateRange.end ? new Date(dateRange.end) : new Date(8640000000000000);

      return appointmentDate >= today &&
        (appointment.treatment?._id === selectedTreatmentId || selectedTreatmentId === '') &&
        appointmentDate >= startDate &&
        appointmentDate <= endDate;
    })
    .sort((a, b) => new Date(a.dateandtime) - new Date(b.dateandtime));

  const groupedAppointments = filteredAppointments.reduce((groups, appointment) => {
    const date = new Date(appointment.dateandtime).toDateString();
    if (!groups[date]) groups[date] = [];
    groups[date].push(appointment);
    return groups;
  }, {});

  const treatments = [
    { id: '607b505b2bb5b518589e4d1f', title: 'SPA Massage' },
    { id: '607b4f522bb5b518589e4d1e', title: 'Massage' },
    { id: '607b52832bb5b518589e4d20', title: 'Hydrafacials' },
    { id: '607b4e662bb5b518589e4d1d', title: 'Waxing' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Appointments</h1>
      
      <label htmlFor="treatment-select" className="block mb-2">Select Treatment:</label>
      <select id="treatment-select" onChange={handleTreatmentChange} value={selectedTreatmentId} className="mb-4 p-2 border border-gray-300 rounded">
        <option value="">All Treatments</option>
        {treatments.map(treatment => (
          <option key={treatment.id} value={treatment.id}>
            {treatment.title}
          </option>
        ))}
      </select>

      <div className="mb-4">
        <label htmlFor="start-date" className="block">Start Date:</label>
        <input
          type="date"
          id="start-date"
          name="start"
          value={dateRange.start}
          onChange={handleDateRangeChange}
          className="p-2 border border-gray-300 rounded"
        />
        <label htmlFor="end-date" className="block mt-2">End Date:</label>
        <input
          type="date"
          id="end-date"
          name="end"
          value={dateRange.end}
          onChange={handleDateRangeChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Print
      </button>
      
      {Object.keys(groupedAppointments).map(date => (
        <div key={date} className="mb-6">
          <h3 className="text-xl font-bold mb-2">{date}</h3>
          <ul>
            {groupedAppointments[date].map(appointment => (
              <li key={appointment._id} className="mb-4 p-4 border border-gray-300 rounded">
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Email:</strong> {appointment.email}</p>
                <p><strong>Phone:</strong> {appointment.phone}</p>
                <p><strong>Treatment:</strong> {appointment.treatment?.title || 'N/A'}</p>
                <p><strong>Date and Time:</strong> {new Date(appointment.dateandtime).toLocaleString()}</p>
                <p><strong>Notes:</strong> {appointment.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <style jsx global>{`
        @media print {
          .print\\:block {
            display: block !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminAppointment;

