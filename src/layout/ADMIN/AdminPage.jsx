import React from 'react';
import Appointment from '../../layout/ADMIN/Appointment';
import TreatmentAdmin from './TreatmentAdmin';
import AboutAdmin from './AboutAdmin';
import HeroAdmin from './HeroAdmin';
const AdminPage = () => {
  return (
    <div>
       <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Manage Appointments</h2>
        <Appointment />
      </section>
  
      
      <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Manage Treatments</h2>
        <TreatmentAdmin />
      </section>

      <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Manage About</h2>
        <AboutAdmin />
      </section>
      {/* Add more admin features/components as needed */}

      <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <h2>Manage Hero</h2>
        <HeroAdmin />
      </section>
    </div>
  );
};

export default AdminPage;