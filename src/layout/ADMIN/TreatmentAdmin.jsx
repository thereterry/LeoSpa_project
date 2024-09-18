import React, { useState, useEffect } from 'react';
import useRequestData from '../../hooks/useRequestData';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';

const TreatmentAdmin = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();

  const [treatments, setTreatments] = useState([]);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Fetch all treatments
    makeRequest('http://localhost:5029/treatment', 'GET');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setTreatments(data);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setFeedbackMessage('All fields are required!');
      setIsError(true);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    // If image is a file object, append it; otherwise, handle it as a string path (if that's what you want)
    if (image instanceof File) {
      formData.append('image', image);
    } else {
      formData.append('image', image); // This might need adjustment based on what the server expects.
    }

    try {
      if (selectedTreatment) {
        // Update treatment
        await makeRequest(`http://localhost:5029/treatment/admin/${selectedTreatment._id}`, 'PUT', formData);
        setFeedbackMessage('Treatment updated successfully!');
        setIsError(false);
      } else {
        // Create new treatment
        await makeRequest('http://localhost:5029/treatment/admin', 'POST', formData);
        setFeedbackMessage('Treatment created successfully!');
        setIsError(false);
      }

      // Clear form and reset states
      setTitle('');
      setContent('');
      setImage('');
      setSelectedTreatment(null);
    } catch (error) {
      setFeedbackMessage('An error occurred while saving the treatment.');
      setIsError(true);
      console.error('Error:', error);  // Log the error to console
    }
  };

  const handleDelete = async (id) => {
    try {
      await makeRequest(`http://localhost:5029/treatment/admin/${id}`, 'DELETE');
      setTreatments((prevTreatments) => prevTreatments.filter((t) => t._id !== id));
      setFeedbackMessage('Treatment deleted successfully!');
      setIsError(false);
    } catch (error) {
      setFeedbackMessage('Failed to delete treatment.');
      setIsError(true);
    }
  };

  const handleEdit = (treatment) => {
    setSelectedTreatment(treatment);
    setTitle(treatment.title);
    setContent(treatment.content);
    setImage(treatment.image);
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading data</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Treatment Admin</h1>

        {/* Link to the Create Treatment page */}
        <div className="mb-6">
        <Link to="/admin/treatment-create" className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition-colors">
          Opret Ny Behandling
        </Link>
      </div>
      {feedbackMessage && (
        <div className={`p-4 mb-4 ${isError ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'} rounded`}>
          {feedbackMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter treatment title"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Image Path</label>
          <input
            type="file" // change to file input for file uploads
            onChange={(e) => setImage(e.target.files[0])} // handle file input
            className="border p-2 w-full rounded"
            placeholder="Enter image path"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
          {selectedTreatment ? 'Update Treatment' : 'Create Treatment'}
        </button>
      </form>
      
      {isLoading ? (
        <p>Loading treatments...</p>
      ) : error ? (
        <p className="text-red-500">Error loading treatments.</p>
      ) : (
        <div>
          <h2 className="text-2xl mb-4">Existing Treatments</h2>
          <ul>
            {Array.isArray(treatments) && treatments.length > 0 ? (
              treatments.map((treatment) => (
                <li key={treatment._id} className="mb-4 border-b pb-4">
                  <h3 className="text-xl font-bold">{treatment.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: treatment.content }} />
                  <img
                    src={`http://localhost:5029/images/treatment/${treatment.image}`}
                    alt={treatment.title}
                    className="w-48 h-auto mt-2 rounded"
                  />
                  <div className="mt-2">
                    <button
                      onClick={() => handleEdit(treatment)}
                      className="bg-yellow-500 text-white p-2 mr-2 rounded hover:bg-yellow-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(treatment._id)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>No treatments available.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TreatmentAdmin;