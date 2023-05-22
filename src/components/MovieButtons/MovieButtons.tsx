import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// TODO: remove .visited effect from buttons
export const MovieButtons: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <Button className="m-3" variant="outline-warning"><Link to="/review">Review</Link></Button>
      <Button className="m-3" variant="outline-warning"><Link to="/review">Save</Link></Button>
    </div>
  );
}