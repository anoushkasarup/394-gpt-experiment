import React from 'react';

const Queue = ({ queue }) => {
  return (
    <div>
      <h3>Queue:</h3>
      <ul>
        {queue.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default Queue;
