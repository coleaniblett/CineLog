import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MovieDataType, getMovieDataType } from '../../util/MovieDataType';

interface Props {
  movies: MovieDataType[],
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const MovieCarousel: React.FC<Props> = ({movies, setMovie}: Props) => {

  const handleClick = (movieID: number): void => {
    getMovieDataType(movieID).then(result => {
      setMovie(result);
    });
  }

  return (
    <Carousel className="border-top border-warning">
      {movies.map(movie => {
        return (
          <Carousel.Item 
            key={movie.title} 
            onClick={event => {
              handleClick(movie.id);
            }}
          >
            <Link 
              to="/movie"
            >
              <img
                className="d-block w-75 p-3 m-auto"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />       
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
}