import React from 'react';
import Navbar from '../navbar';
import SignUpForm from '../SignUpForm';

const MainContent = () => {
  return (
    <div className="main">
      <Navbar/>
      <SignUpForm />
    </div>
  );
};

export default MainContent;
