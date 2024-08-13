import React, { useState, useEffect } from 'react';
import useRequestData from '../../hooks/useRequestData';

const FooterAdmin = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();

  const [footerData, setFooterData] = useState({
    name: '',
    cvr: '',
    address: '',
    zipncity: '',
    phone: '',
    email: '',
    openinghours: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    // Fetch the footer data on component mount
    makeRequest('http://localhost:5029/footer', 'GET');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setFooterData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFooterData({
      ...footerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await makeRequest('http://localhost:5029/footer/admin', 'PUT', footerData);
      setFeedbackMessage('Footer updated successfully!');
    } catch (error) {
      setFeedbackMessage('An error occurred while updating the footer.');
      console.error('Error:', error);  // Log the error to console
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Footer Admin</h1>
      {feedbackMessage && (
        <div className={`p-4 mb-4 ${error ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'} rounded`}>
          {feedbackMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={footerData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">CVR</label>
          <input
            type="text"
            name="cvr"
            value={footerData.cvr}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter CVR"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={footerData.address}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter address"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Zip and City</label>
          <input
            type="text"
            name="zipncity"
            value={footerData.zipncity}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter zip and city"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={footerData.phone}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter phone number"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={footerData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Opening Hours</label>
          <textarea
            name="openinghours"
            value={footerData.openinghours}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            placeholder="Enter opening hours"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
          Update Footer
        </button>
      </form>
    </div>
  );
};

export default FooterAdmin;