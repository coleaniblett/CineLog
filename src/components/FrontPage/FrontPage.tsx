import React, { useState, useEffect } from 'react';

import { MovieCarousel } from './MovieCarousel/MovieCarousel';
import { MovieDataType, getMovieDataType } from '../../util/MovieDataType';
import { TMDB } from '../../util/TMDB/TMDB';

interface Props {
  setMovie: any,
  featuredMovies: MovieDataType[],
  savedMovies: MovieDataType[],
  reviewedMovies: MovieDataType[],
  setSavedMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>, 
  setFeaturedMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>,
  setReviewedMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>;
}

export const FrontPage: React.FC<Props> = ({ setMovie, featuredMovies, savedMovies, reviewedMovies, setFeaturedMovies, setSavedMovies, setReviewedMovies }: Props) => {

  useEffect(() => {
    let randNum: number | null = null;

    for (let i: number = 0; i < 4; i++) {

      randNum = Math.floor(Math.random() * 500);
      getMovieDataType(randNum)
      .then(response => {
        if (!featuredMovies.some(movie => {
          return movie.id === response.id;
        })) {
          setFeaturedMovies(prev => {
            return [...prev, response];
          }
        )}
      })
      .catch(error => console.error(error));
      randNum = Math.floor(Math.random() * 500);
      getMovieDataType(randNum)
      .then(response => {
        if (!savedMovies.some(movie => {
          return movie.id === response.id;
        })) {
          setSavedMovies(prev => {
            return [...prev, response];
          }
        )}
      })
      .catch(error => console.error(error));
      randNum = Math.floor(Math.random() * 500);
      getMovieDataType(randNum)
      .then(response => {
        if (!reviewedMovies.some(movie => {
          return movie.id === response.id;
        })) {
          setReviewedMovies(prev => {
            return [...prev, response];
          }
        )}
      })
      .catch(error => console.error(error));
    }
  }, []);

  return (
    <div className="h-100 w-100 d-inline-block bg-danger">
      <MovieCarousel movies={featuredMovies} setMovie={setMovie} />
      <MovieCarousel movies={savedMovies} setMovie={setMovie} />
      <MovieCarousel movies={reviewedMovies} setMovie={setMovie} />
    </div>
  );
}