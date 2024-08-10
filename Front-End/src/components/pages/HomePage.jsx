import React from 'react';
import Navbar from '../navbar';
import LoginForm from '../login';
import ContentSection from '../content';

const Home = () => {
  return (
    <div className="main">
      <Navbar/>
      <ContentSection/>
      <LoginForm/>
    </div>
  );
};

export default Home;