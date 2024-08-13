import React from 'react';
import Appointment from '../../layout/ADMIN/Appointment';
import TreatmentAdmin from './TreatmentAdmin';

const AdminPage = () => {
  return (
    <div>
       <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Manage Appointments</h2>
        <Appointment />
      </section>
      <TreatmentAdmin />
      
      <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Manage Treatments</h2>
        <TreatmentAdmin />
      </section>
      {/* Add more admin features/components as needed */}
    </div>
  );
};

export default AdminPage;