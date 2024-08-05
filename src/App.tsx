import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import DisplayPage from './DisplayPage';
import "./App.css";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<LandingPage />} />
       
      </Routes>
    </Router>
  );
};

export default App;
