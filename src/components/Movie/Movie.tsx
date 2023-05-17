import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { TMDB } from '../../util/TMDB/TMDB';
import { MovieButtons } from '../MovieButtons/MovieButtons';
import { MovieDataType } from '../../util/MovieDataType';

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>,
  movie: MovieDataType | null;
}

export const Movie: React.FC<Props> = ({ setMovie, movie }: Props) => {

  useEffect(() => {
    console.log("Here");
    console.log(movie);
  }, [movie]);

  return (
    <div>
      <Header setMovie={setMovie} />
      {movie && <div className="d-flex flex-column justify-content-center">
        <h1
          className="display-1 text-center"
        >
          {movie.title}
        </h1>
        <img 
          className="p-4"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        />
      </div>}
      <MovieButtons />
    </div>
  )
}