import React, { useState, useEffect } from 'react';
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

  // Fetch all heroes on component mount
  useEffect(() => {
    makeRequest('http://localhost:5029/hero', 'GET');
  }, [makeRequest]);

  // Update heroes state when data changes
  useEffect(() => {
    if (data) {
      setHeroes(data);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title1 || !title2 || !content || !link) {
      setFeedbackMessage('All fields are required!');
      return;
    }

    const heroData = { title1, title2, content, link };

    try {
      if (selectedHero) {
        // Update hero
        await makeRequest(`http://localhost:5029/hero/admin/${selectedHero._id}`, 'PUT', heroData);
        setFeedbackMessage('Hero updated successfully!');
      } else {
        // Create new hero
        await makeRequest('http://localhost:5029/hero/admin', 'POST', heroData);
        setFeedbackMessage('Hero created successfully!');
      }

      // Clear form and reset states
      setTitle1('');
      setTitle2('');
      setContent('');
      setLink('');
      setSelectedHero(null);
    } catch (error) {
      setFeedbackMessage('An error occurred while saving the hero.');
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await makeRequest(`http://localhost:5029/hero/admin/${id}`, 'DELETE');
      setHeroes((prevHeroes) => prevHeroes.filter((h) => h._id !== id));
      setFeedbackMessage('Hero deleted successfully!');
    } catch (error) {
      setFeedbackMessage('Failed to delete hero.');
    }
  };

  const handleEdit = (hero) => {
    setSelectedHero(hero);
    setTitle1(hero.title1);
    setTitle2(hero.title2);
    setContent(hero.content);
    setLink(hero.link);
  };

  const handleSetShow = async (id) => {
    try {
      await makeRequest(`http://localhost:5029/hero/admin/${id}`, 'PATCH');
      setFeedbackMessage('Hero set to display on homepage!');
      // Refetch heroes to update the UI
      makeRequest('http://localhost:5029/hero', 'GET');
    } catch (error) {
      setFeedbackMessage('Failed to set hero to show.');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Hero Admin</h1>
      {feedbackMessage && (
        <div className={`p-4 mb-4 ${error ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'} rounded`}>
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
            placeholder="Enter first title"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Title 2</label>
          <input
            type="text"
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter second title"
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

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors">
          {selectedHero ? 'Update Hero' : 'Create Hero'}
        </button>
      </form>
      
      {isLoading ? (
        <p>Loading heroes...</p>
      ) : error ? (
        <p className="text-red-500">Error loading heroes.</p>
      ) : (
        <div>
          <h2 className="text-2xl mb-4">Existing Heroes</h2>
          <ul>
            {Array.isArray(heroes) && heroes.map((hero) => (
              <li key={hero._id} className="mb-4 border-b pb-4">
                <h3 className="text-xl font-bold">{hero.title1}</h3>
                <p>{hero.title2}</p>
                <p>{hero.content}</p>
                <a href={hero.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {hero.link}
                </a>
                <div className="mt-2">
                  <button
                    onClick={() => handleEdit(hero)}
                    className="bg-yellow-500 text-white p-2 mr-2 rounded hover:bg-yellow-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(hero._id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                  {!hero.show && (
                    <button
                      onClick={() => handleSetShow(hero._id)}
                      className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition-colors"
                    >
                      Set as Main Hero
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeroAdmin;