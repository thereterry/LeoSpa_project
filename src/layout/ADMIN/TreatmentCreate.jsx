import React, { useEffect, useRef } from 'react';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import useRequestData from '../../hooks/useRequestData';

const TreatmentCreate = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  
  // Form reference for resetting after successful submission
  const formRef = useRef(null);

  // Reset the form when data is successfully submitted
  useEffect(() => {
    if (data) {
      formRef.current.reset(); // Reset form after new treatment is created
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Create a FormData object for handling multipart form data
    const formData = new FormData(e.target); // Automatically map form fields

    // Send POST request to create a new treatment
    makeRequest('http://localhost:5029/treatment/admin', 'POST', formData);
  };

  return (
    <div className='min-h-96'>
      <h1 className='text-5xl mb-6'>Opret Ny Behandling (Create New Treatment)</h1>

    
      {isLoading && <Loader />}
      {error && <Error />}

  
      {data && (
        <h2 className='p-5 mt-10 text-2xl rounded border border-green-700'>
          Ny behandling er oprettet: {data.title}
        </h2>
      )}

      {/* Form for creating a new treatment */}
      <form onSubmit={handleSubmit} ref={formRef} className='form-control m-10 w-2/3'>
        <label className='block mb-2'>
          Navn (Title):
          <input
            type="text"
            name="title"
            placeholder='Behandlingens navn her...'
            className='input-bordered input w-full'
            required
          />
        </label>

        <label className='block mb-2'>
          Beskrivelse (Content):
          <textarea
            name="content"
            placeholder='Behandlingens beskrivelse her...'
            className='textarea-bordered textarea w-full'
            rows="6"
            required
          />
        </label>

        <label className='block mb-4'>
          Billede (Image):
          <input
            type="file"
            name="image"
            className='input-bordered input w-full'
          />
        </label>

        <button type='submit' className='btn btn-success mt-10 w-1/2'>
          Opret Behandling
        </button>
      </form>
    </div>
  );
};

export default TreatmentCreate;
