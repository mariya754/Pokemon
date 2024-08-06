
import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LandingPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const doSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      setError('');
      // Navigate to DisplayPage with Pokémon data
      navigate('/display', { state: { pokemon: response.data } });
    } catch (error) {
      setError('This Pokémon was not found. Please try again.');
    }
  };

  return (
    <div className="landing-page">
        <div className="container">
        <h1 className='title-text'>Search For Pokemon!</h1>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="text-box" />
        {error && <p className='error'>{error}</p>}
        <button onClick={doSearch} className="btn">Search</button>
        </div>
    </div>
  );
};

export default LandingPage;
