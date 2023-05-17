import React from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from '../../util/MovieType';


interface Props {
  movie: MovieType,
  setMovie: React.Dispatch<React.SetStateAction<number | null>>;
}

export const SearchLink: React.FC<Props> = ({ movie, setMovie }: Props) => {

  const handleClick = () => {
    setMovie(movie.id);
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