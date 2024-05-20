import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onWarn, onEnd }) => {
  const [time, setTime] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      onEnd();
      clearInterval(timer);
    }

    if (time === 120) {
      onWarn();
    }

    return () => clearInterval(timer);
  }, [isActive, time, onWarn, onEnd]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(duration);
  };

  return (
    <div>
      <div>Time: {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}</div>
      <button onClick={handleStartPause}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
