import React from 'react';
import'../components/style/login.css';

const LoginForm = () => {
  return (
    <div className="L-form">
      <h2>Login Here</h2>
      <input type="email" name="email" placeholder="Email Address" />
      <input type="password" name="password" placeholder="Password" />
      <p className="res">
        Reset password? <a href="#">Click Here</a>
      </p>
      <button className="L-btnn">
        <a href="#">Login</a>
      </button>
      <p className="link">
        <span>Don't have an account</span><br />
        <a href="signUp">Sign up</a> Here
      </p>
    </div>
  );
};

export default LoginForm;
