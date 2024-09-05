import React, { useState, useEffect, useCallback } from 'react';
import useRequestData from '../../hooks/useRequestData';

const HeroAdmin = () => {
  const { makeRequest, data, error, isLoading } = useRequestData();
  const [heroes, setHeroes] = useState([]); 
  const [selectedHero, setSelectedHero] = useState(null);
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    makeRequest('http://localhost:5029/hero', 'GET');
  }, [makeRequest]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setHeroes(data);
    } else {
      console.error('Data is not an array:', data);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const heroData = { title1, title2, content, link };
    setIsSubmitting(true);

    try {
      if (selectedHero) {
        setHeroes((prevHeroes)=>
          prevHeroes.map((hero)=>
          hero._id === selectedHero._id ? { ...hero, ...heroData }: hero )
        );
        
        // Update existing hero
       await makeRequest(`http://localhost:5029/hero/admin/${selectedHero._id}`, 'PUT', heroData);
        setFeedbackMessage('Hero updated successfully!');
      } else {
        // Create new hero
        const response = await makeRequest('http://localhost:5029/hero/admin', 'POST', heroData);
        setHeroes((prevHeroes) => [...prevHeroes, response.data]); 
        setFeedbackMessage('Hero created successfully!');
      }
 
    } catch (error) {
      setFeedbackMessage(error.message || 'An error occured while saving the hero.');
    } finally {
      setIsSubmitting(false); 
      resetForm();
    }
  };
// handle setting/hero data editing
  const handleEdit = (hero) => {
    setSelectedHero(hero);
    setTitle1(hero.title1);
    setTitle2(hero.title2);
    setContent(hero.content);
    setLink(hero.link);
  };
//handle deletion of a hero
  const handleDelete = async (id) => {

    const confirmed = window.confirm (
      "Are you sure you want to delete this item? This action cannot be undone"
    );
    if (!confirmed) {
      setFeedbackMessage('Deletion canceled.');
      return;
    }

    setIsSubmitting(true);

    try {
      await makeRequest(`http://localhost:5029/hero/admin/${id}`, 'DELETE');
      setHeroes((prevHeroes) => prevHeroes.filter((hero) => hero._id !== id));
      setFeedbackMessage('Hero deleted successfully!');
    } catch (error) {
      setFeedbackMessage('Failed to delete hero.');
    }
  };
//handle setting for a hero active
  const handleSetShow = async (id) => {
    try {
      await makeRequest(`http://localhost:5029/hero/admin/${id}`, 'PATCH');
      setFeedbackMessage('Hero set as active successfully!');
      setHeroes((prevHeroes) =>
        prevHeroes.map((hero) =>
          hero._id === id ? { ...hero, show: true } : { ...hero, show: false }
        )
      ); 
    } catch (error) {
      setFeedbackMessage('Failed to set hero as active.');
    } finally {
      setIsSubmitting(false)
    }
  };
  
//reset form fields & selected hero
  const resetForm = () => {
    setTitle1('');
    setTitle2('');
    setContent('');
    setLink('');
    setSelectedHero(null);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Hero Admin</h1>
      {feedbackMessage && (
      <div className={`p-4 mb-4 ${feedbackMessage.includes('Failed') || feedbackMessage.includes('Error') ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'} rounded`}>
      {feedbackMessage}
      </div>
    )}

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block mb-2">Title 1</label>
          <input
            type="text"
            value={title1}
            onChange={(e) => setTitle1(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter title 1"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Title 2</label>
          <input
            type="text"
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter title 2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter content"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter link"
          />
        </div>

        <button type="submit" 
         disabled={isSubmitting}className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
          {selectedHero ? 'Update Hero' : 'Create Hero'}
        </button>
      </form>

      <div>
        <h2 className="text-2xl mb-4">Existing Heroes</h2>
        <ul>
          {heroes.map((hero) => (
            <li key={hero._id} className="mb-4 border-b pb-4">
              <h3 className="text-xl font-bold">{hero.title1}</h3>
              <p>{hero.title2}</p>
              <p className="text-sm text-gray-500">{hero.content}</p>
              <a href={hero.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Watch Video</a>
              <div className="mt-2">
                <button
                  onClick={() => handleEdit(hero)}
                  className="bg-yellow-500 text-white p-2 mr-2 rounded hover:bg-yellow-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(hero._id)}
                  disabled={isSubmitting}
                  className="bg-red-500 text-white p-2 mr-2 rounded hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleSetShow(hero._id)}
                  className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition-colors"
                >
                  Set as Active
                </button>
                {hero.show && <span className="ml-2 text-green-600 font-bold">(Active)</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroAdmin;