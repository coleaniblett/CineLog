import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { TMDB } from '../../util/TMDB/TMDB';
import { MovieButtons } from '../MovieButtons/MovieButtons';

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<number | null>>,
  movieID: number | null;
}

export const Movie: React.FC<Props> = ({ setMovie, movieID }: Props) => {
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    if (movieID != null) {
      TMDB.getMovie(movieID).then((result) => {
        console.log(result);
        setMovieData(result);
      })
    }
    console.log(movieData);
  }, [movieID])

  return (
    <div>
      <Header setMovie={setMovie} />
      {movieData && <div className="d-flex flex-column justify-content-center">
        <h1
          className="display-1 text-center"
        >
          {movieData.title}
        </h1>
        <img 
          className="p-4"
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} 
        />
      </div>}
      <MovieButtons />
    </div>
  )
}