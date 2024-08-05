
import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
        <div className="container">
        <h1 className='title-text'>Search For Pokemon!</h1>
        <input type="text" className="text-box" />
        <button className="btn">Search</button>
        </div>
    </div>
  );
};

export default LandingPage;