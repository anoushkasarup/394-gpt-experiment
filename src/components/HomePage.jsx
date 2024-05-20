import React from 'react';
import UserForm from './UserForm';

const HomePage = ({ joinSwarm }) => {
  return (
    <div>
      <UserForm joinSwarm={joinSwarm} />
    </div>
  );
};

export default HomePage;
