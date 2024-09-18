import React, {useEffect,useState } from 'react';
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { Link } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';

import { MdEdit} from "react-icons/md";



const AboutAdmin = () => {

  const { makeRequest,isLoading, data, error } = useRequestData()  
  const { makeRequest: makeRequestEdit, isLoading: isLoadingEdit, data: dataEdit, error: errorEdit } = useRequestData();
  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  

  

  useEffect(()=> {
    makeRequest("http://localhost:5029/about", "GET")
}, [  ]) 

useEffect(() => {
  if (data) {
    setTitle(data.title || '');
    setContent(data.content || '');
  }
}, [data]);


const handleSubmit = (e) => {
  e.preventDefault();
  const aboutData = { title, content };

  // PUT request to update the about section
  makeRequestEdit('http://localhost:5029/about/admin/', 'PUT', aboutData);
};


return (
  <div>
    <h1 className='text-5xl mb-6'>Administrer "About" sektionen</h1>
    

    {(isLoading || isLoadingEdit) && <Loader />}
    {(error || errorEdit) && <Error />}

    <table className='table border table-lg'>
      <thead>
        <tr>
          <td colSpan="3">
            <Link to="/admin/aboutcreate" className='btn btn-success'>
              Opret Ny Sektion
            </Link>
          </td>
        </tr>
        <tr className='bg-base-200'>
          <th>Titel</th>
          <th>RET</th>
        </tr>
      </thead>
      <tbody>
        {data && (
          <tr className='bg-base-200'>
            <td>{data.title}</td>
            <td>
              <MdEdit
                onClick={() => setIsEditing(true)}
                color='green'
                size="1.5em"
              />
            </td>
          </tr>
        )}
      </tbody>
    </table>

    {/* edit form if in editing mode */}
    {isEditing && (
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
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full rounded"
            rows="8"
            placeholder="Enter about content"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
          Update About Section
        </button>
      </form>
    )}
  </div>
);
};

export default AboutAdmin;
