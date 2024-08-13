// import React from 'react';
// import Appointment from '../../layout/ADMIN/Appointment';
// import TreatmentAdmin from './TreatmentAdmin';
// import AboutAdmin from './AboutAdmin';
// import HeroAdmin from './HeroAdmin';
// import FooterAdmin from './FooterAdmin';

// const AdminPage = () => {
//   return (
//     <div>
//        <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
//         <h2>Manage Appointments</h2>
//         <Appointment />
//       </section>
  
      
//       <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
//         <h2>Manage Treatments</h2>
//         <TreatmentAdmin />
//       </section>

//       <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
//         <h2>Manage About</h2>
//         <AboutAdmin />
//       </section>
//       {/* Add more admin features/components as needed */}

//       <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
//         <h2>Manage Hero</h2>
//         <HeroAdmin />
//       </section>


//       <section style={{ padding: '1rem', border: '1px solid #ccc' }}>
//         <h2>Manage Footer</h2>
//         <FooterAdmin />
//       </section>
//     </div>
//   );
// };

// export default AdminPage;
import React from 'react';
import Appointment from '../../layout/ADMIN/Appointment';
import TreatmentAdmin from './TreatmentAdmin';
import AboutAdmin from './AboutAdmin';
import HeroAdmin from './HeroAdmin';
import FooterAdmin from './FooterAdmin';

const AdminPage = () => {
  return (
    <div className="space-y-8 p-6 bg-base-200">
      <section className="card bg-base-100 shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage Appointments</h2>
        <Appointment />
      </section>

      <section className="card bg-base-100 shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage Treatments</h2>
        <TreatmentAdmin />
      </section>

      <section className="card bg-base-100 shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage About</h2>
        <AboutAdmin />
      </section>

      <section className="card bg-base-100 shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage Hero</h2>
        <HeroAdmin />
      </section>

      <section className="card bg-base-100 shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Manage Footer</h2>
        <FooterAdmin />
      </section>
    </div>
  );
};

export default AdminPage;