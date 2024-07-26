// src/SignIn.js
import React from 'react';
import FacebookLogin from 'react-facebook-login';

const SignIn = ({ onLogin }) => {
  const responseFacebook = (response) => {
    console.log(response);
    onLogin(response);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <FacebookLogin
        appId="your-facebook-app-id" // replace with your Facebook app ID
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default SignIn;
