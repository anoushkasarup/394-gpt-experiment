import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TimerPage from './components/TimerPage';
import './App.css';

const App = () => {
  const [swarm, setSwarm] = useState(null);

  const joinSwarm = (name, roomCode) => {
    setSwarm({ name, roomCode });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage joinSwarm={joinSwarm} />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </Router>
  );
};

export default App;