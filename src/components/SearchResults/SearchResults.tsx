import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

type Props = {
  movies: string[]
}

export const SearchResults: React.FC<Props> = ({movies}: Props) => {


  useEffect(() => {
    //console.log("search results rendering")
  }, []);


  return (
    <div id="myDropdown" className="dropdown-content position-absolute w-100" style={{zIndex: 10}}>
      {movies.map(movie => {
        return (
          <a className="dropdown-item bg-white border w-75 m-auto">
            {movie}
          </a>
        )
      })}
    </div>
  );
}