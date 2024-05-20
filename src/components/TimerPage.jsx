import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Queue from './Queue';
import { useLocation } from 'react-router-dom';

const TimerPage = () => {
  const location = useLocation();
  const { roomCode, name } = location.state;
  const [durationMinutes, setDurationMinutes] = useState(5);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [currentMember, setCurrentMember] = useState(name);
  const [queue, setQueue] = useState([name]); // Initial queue

  useEffect(() => {
    // Fetch or update queue based on roomCode
  }, [roomCode]);

  const handleWarn = () => {
    alert('2-minute warning!');
  };

  const handleEnd = () => {
    alert('Time is up!');
    const updatedQueue = [...queue];
    const nextMember = updatedQueue.shift();
    setCurrentMember(nextMember);
    setQueue(updatedQueue);
  };

  // Convert minutes and seconds to total seconds
  const durationInSeconds = durationMinutes * 60 + durationSeconds;

  return (
    <div>
      <h1>Swarm Rotation Timer</h1>
      <p>Room Code: {roomCode}</p>
      <div>
        <label htmlFor="minutes">Minutes:</label>
        <input
          type="number"
          id="minutes"
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="seconds">Seconds:</label>
        <input
          type="number"
          id="seconds"
          value={durationSeconds}
          onChange={(e) => setDurationSeconds(parseInt(e.target.value))}
        />
      </div>
      <Timer duration={durationInSeconds} onWarn={handleWarn} onEnd={handleEnd} />
      <div>
        <h2>Current Member: {currentMember}</h2>
        <Queue queue={queue} />
      </div>
    </div>
  );
};

export default TimerPage;
