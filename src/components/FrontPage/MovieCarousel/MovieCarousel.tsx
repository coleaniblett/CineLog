import React from 'react';
import { Carousel } from 'react-bootstrap';
import { MovieDataType } from '../../../util/MovieDataType';

type tempMovieType = {
  image: any,
  name: string
}

interface Props {
  movies: MovieDataType[];
}

export const MovieCarousel: React.FC<Props> = ({movies}: Props) => {
  return (
    <Carousel className="border-top border-warning">
      {movies.map(movie => {
        return (
          <Carousel.Item key={movie.title}>
            <img
              className="d-block w-75 p-3 m-auto"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
}