// src/CheckOut.js
import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { initFacebookSdk } from './fbInit';

const CheckOut = ({ isAuthenticated, handleLogin }) => {
  const navigate = useNavigate();
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);

  useEffect(() => {
    initFacebookSdk().then(() => {
      setIsSdkLoaded(true);
      window.FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          handleLogin(); // Use handleLogin
          navigate('/checkout');
        }
      });
    });
  }, [navigate, handleLogin]);

  const handleFacebookLogin = () => {
    if (isSdkLoaded) {
      window.FB.login(response => {
        if (response.authResponse) {
          handleLogin(); // Use handleLogin
          navigate('/checkout');
        }
      }, { scope: 'email' });
    }
  };

  return (
    <Container className="mt-5">
      <h2>Sign In</h2>
      <p>Please login using one of the following:</p>
      <Form>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input type="text" name="name" id="name" placeholder="Your name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="email" name="email" id="email" placeholder="Your Email" />
        </FormGroup>
        <Button color="success">Login</Button>
        <Button color="primary" onClick={handleFacebookLogin} className="ml-2">
          <i className="fab fa-facebook-f mr-2"></i> LOGIN WITH FACEBOOK
        </Button>
      </Form>
    </Container>
  );
};

export default CheckOut;
