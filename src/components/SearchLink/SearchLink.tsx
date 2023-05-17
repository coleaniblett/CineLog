import React from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from '../../util/MovieType';
import { MovieDataType, getMovieDataType } from '../../util/MovieDataType';

interface Props {
  movie: MovieType,
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const SearchLink: React.FC<Props> = ({ movie, setMovie }: Props) => {

  const handleClick = () => {
    console.log("inside SearchLink");
    let newMoviePromise: Promise<MovieDataType> = getMovieDataType(movie.id);
    let newMovie = newMoviePromise.then(result => { setMovie(result); });
  }

  return (
    <Link to="/movie">
      <option 
        label={movie.title} 
        value={movie.title} 
        className="dropdown-item bg-white border w-75 m-auto"
        onClick={handleClick}
        >
      </option>
    </Link>
  )
}