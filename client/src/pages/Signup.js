import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Form, Button } from 'semantic-ui-react'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>
      
      <h2>Signup</h2>
      <Form onSubmit={handleFormSubmit}>

        <Form.Group>
          <label htmlFor="firstName">First Name:</label>
          <Form.Input width={6}
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
          </Form.Group>
        
        <div className="flex-row space-between my-2">
        <Form.Group>
          <label htmlFor="lastName">Last Name:</label>
          <Form.Input width={6}
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
          </Form.Group>
        </div>

        <div className="flex-row space-between my-2">
          <Form.Group>
          <label htmlFor="email">Email:</label>
          <Form.Input width={6}
            placeholder="fakeEmail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          </Form.Group>
        </div>
        <div className="flex-row space-between my-2">
        <Form.Group>
          <label htmlFor="pwd">Password:</label>
          <Form.Input width={6}
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          <Button fluid type="submit">Submit</Button>
          </Form.Group>
        </div>
        <div className="flex-row flex-end">
          
        </div>
      </Form>
    </div>
  );
}

export default Signup;
