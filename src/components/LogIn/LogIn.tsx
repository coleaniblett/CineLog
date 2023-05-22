import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { userInfo } from 'os';

export const LogIn: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(document.createElement("input"));
  const passwordRef = useRef<HTMLInputElement>(document.createElement("input"));
  const { login, currentUser } = useAuth(); // type?
  const [headline, setHeadline] = useState<string>("");
  const [form, setForm] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // type?

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in.");
    }
    setLoading(false);
  }

  useEffect(() => {
    setHeadline(!currentUser ? "Log in" : "You're Already Logged In");
    setForm(!currentUser ? (<Form onSubmit={handleSubmit}>
      <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required></Form.Control>
      </Form.Group>
      <Form.Group id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} required></Form.Control>
      </Form.Group>
      <Button type="submit" className="w-100 text-center mt-2" disabled={loading}>Log In</Button>
    </Form>) : (<Button type="submit" className="w-100 text-center mt-2" disabled={loading}>Log Out</Button>));
  }, [])
  

  return (
  <Container 
      className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "75vh", minWidth: "100vw"}}
  >
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{headline}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {form}
        </Card.Body>
      </Card>
      {!currentUser ? <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> : (<div></div>) }
    </div>
    </ Container>
  );
}