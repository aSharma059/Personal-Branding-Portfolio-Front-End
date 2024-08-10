import React from 'react';
import '../components/style/SignUpForm.css';

const SignUpForm = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
      </div>
      <div className="inputSignUpData">
        <div className="input">
          <input type="text" placeholder="User Name" />
        </div>
        <div className="input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <input type="password" placeholder="Confirm password" />
        </div>
      </div>
      <button className="btnn"><a href="#">SignUp</a></button>
      <div className="loginlink">
        Already have an account?<a href="#">Click here!</a>
      </div>
      <div>
        <a href="#">Privacy Policy</a><span>|</span><a href="#">Terms and Conditions</a>
      </div>
    </div>
  );
};

export default SignUpForm;
