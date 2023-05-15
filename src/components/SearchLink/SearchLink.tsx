import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

type Props = {
  title: string;
}

export const SearchLink: React.FC<Props> = ({ title }: Props) => {
  return (
    /*<a className="dropdown-item bg-white border w-75 m-auto">
      {title}
    </a>*/
    /*<Nav.Link className="dropdown-item bg-white border w-75 m-auto" onClick={event => console.log("Test")}>
      <Link to="/movie" onClick={event => console.log("Test")}>
        {title}
      </Link>
    </Nav.Link>*/
    <Link to="/movie" onClick={event => console.log("Test")}>
      <option 
        label={title} 
        value={title} 
        className="dropdown-item bg-white border w-75 m-auto"
        >
      </option>
    </Link>
  )
}