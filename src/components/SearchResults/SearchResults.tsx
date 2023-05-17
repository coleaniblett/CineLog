import React from 'react';
import { SearchLink } from '../SearchLink/SearchLink';
import { MovieType } from '../../util/MovieType';
import { MovieDataType } from '../../util/MovieDataType';

interface Props {
  movies: MovieType[],
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}


// TODO:
// - Limit results to 5
// - Prevent text runoff
// - Prioritize results where search term matches beginning
// - Styling

export const SearchResults: React.FC<Props> = ({ movies, setMovie }: Props) => {
  return (
    <div id="myDropdown" className="dropdown-content position-absolute w-100" style={{zIndex: 10}}>
      {movies.map(movie => {
        return (
          <SearchLink movie={movie} setMovie={setMovie} />
        )
      })}
    </div>
  );
}