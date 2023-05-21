import React from 'react';
import { Carousel } from 'react-bootstrap';
import { MovieDataType, getMovieDataType } from '../../../util/MovieDataType';
import { Link } from 'react-router-dom';

type tempMovieType = {
  image: any,
  name: string
}

interface Props {
  movies: MovieDataType[],
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const MovieCarousel: React.FC<Props> = ({movies, setMovie}: Props) => {

  // TODO: better typing
  const handleClick = (movieID: number): any => {
    let newMoviePromise: Promise<MovieDataType> = getMovieDataType(movieID);
    let newMovie = newMoviePromise.then(result => { setMovie(result); });
  }

  return (
    <Carousel className="border-top border-warning">
      {movies.map(movie => {
        return (
          <Carousel.Item key={movie.title} onClick={event => {handleClick(movie.id)}}>
            <Link to="/movie">
              <img
                className="d-block w-75 p-3 m-auto"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <div className="position-absolute w-100 h-100 bg-primary" style={{zIndex: 200}}>
              <h1>Test</h1>
            </div>
            {/* TODO: add a dark transparent background to title */}
            <Carousel.Caption>
              <h3>{movie.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
}