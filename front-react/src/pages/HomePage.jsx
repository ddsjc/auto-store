import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const handleOrganizationClick = () => {
    history.push('/login?type=organization');
  };

  const handleUserClick = () => {
    history.push('/login?type=user');
  };

  return (
    <div className="home-page">
      <h1>Welcome to My App</h1>
      <button onClick={handleOrganizationClick}>Организация</button>
      <button onClick={handleUserClick}>Пользователь</button>
    </div>
  );
};

export default HomePage;