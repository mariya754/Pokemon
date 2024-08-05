
import React from 'react';
import './DisplayPage.css';

const DisplayPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className='title-text'>Search For Pokemon!</h1>
        <input type="text" className="text-box" />
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default DisplayPage;