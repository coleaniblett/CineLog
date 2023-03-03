import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

export const Signup = () => {
  //const emailRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef(document.createElement("input"));
  const passwordRef = useRef(document.createElement("input"));
  const passwordConfirmRef = useRef(document.createElement("input"));
  const { signup } = useAuth();

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" ref={passwordRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="email" ref={passwordConfirmRef} required></Form.Control>
            </Form.Group>
          </Form>
          <Button type="submit" className="w-100">Sign Up</Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </div>
  )
}