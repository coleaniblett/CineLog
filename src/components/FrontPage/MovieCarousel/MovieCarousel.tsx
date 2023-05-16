import React from 'react';
import { Carousel } from 'react-bootstrap';

type tempMovieType = {
  image: any,
  name: string
}

interface Props {
  movies: tempMovieType[]
}

export const MovieCarousel: React.FC<Props> = ({movies}: Props) => {
  return (
    <Carousel className="featured-movies border-top border-warning">
      {movies.map(movie => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-75 p-3 m-auto"
              src={movie.image}
              alt={movie.name}
            />
            <Carousel.Caption>
              <h3>{movie.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  )
}