import React, { useState, useEffect } from 'react';
import useRequestData from '../../hooks/useRequestData';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AboutAdmin = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();
  const [title, setTitle] = useState(''); // Ensure these are initialized as empty strings
  const [content, setContent] = useState(''); 
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    makeRequest('http://localhost:5029/about', 'GET');
  }, [makeRequest]);

  useEffect(() => {
    if (data) {
      setTitle(data.title || ''); // Ensure title and content are strings
      setContent(data.content || '');
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setFeedbackMessage('All fields are required!');
      return;
    }

    const aboutData = { title, content };

    try {
      await makeRequest('http://localhost:5029/about/admin', 'PUT', aboutData);
      setFeedbackMessage('About section updated successfully!');
    } catch (error) {
      setFeedbackMessage('An error occurred while updating the About section.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">About Admin</h1>
      {feedbackMessage && (
        <div className={`p-4 mb-4 ${error ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'} rounded`}>
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
            placeholder="Enter about title"
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

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
          Update About
        </button>
      </form>
    </div>
  );
};

export default AboutAdmin;