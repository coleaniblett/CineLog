import React from 'react';
import { MovieButtons } from '../MovieButtons/MovieButtons';
import { MovieDataType } from '../../util/MovieDataType';
import { Card } from 'react-bootstrap';

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>,
  movie: MovieDataType | null;
}

export const Movie: React.FC<Props> = ({ setMovie, movie }: Props) => {

  return (
    <div>
      {movie && <Card className="bg-danger p-2 m-4">
        <Card.Title className="text-center display-2">{movie.title}</Card.Title>
        <Card.Img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} film poster`}
          className="p-4"
        />
        <MovieButtons />
      </Card>}
    </div>
  )
}