import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ joinSwarm }) => {
  const [name, setName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const navigate = useNavigate();

  const generateRoomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const handleCreate = () => {
    const newRoomCode = generateRoomCode();
    joinSwarm(name, newRoomCode);
    navigate('/timer', { state: { roomCode: newRoomCode, name } });
  };

  const handleJoin = () => {
    joinSwarm(name, roomCode);
    navigate('/timer', { state: { roomCode, name } });
  };

  return (
    <div>
      <h1>Join or Create a Swarm</h1>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleCreate}>Create Swarm</button>
      <div>
        <input
          type="text"
          id="roomCode"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button type="button" onClick={handleJoin}>Join Swarm</button>
      </div>
    </div>
  );
};

export default UserForm;
