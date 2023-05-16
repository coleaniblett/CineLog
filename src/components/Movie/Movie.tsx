import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { TMDB } from '../../util/TMDB/TMDB';

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
      {movieData && movieData.title}
    </div>
  )
}