import React, { useEffect } from 'react';
import { SearchLink } from '../SearchLink/SearchLink';

type Props = {
  movies: string[]
}

// TODO:
// - Limit results to 5
// - Prevent text runoff
// - Prioritize results where search term matches beginning
// - Styling

export const SearchResults: React.FC<Props> = ({movies}: Props) => {

  return (
    <div id="myDropdown" className="dropdown-content position-absolute w-100" style={{zIndex: 10}}>
      {movies.map(movie => {
        return (
          <SearchLink title={movie} />
        )
      })}
    </div>
  );
}