import React, { useState } from 'react';
import FillerImage from '../../assets/Everything_Everywhere_All_at_Once.jpg';
import FillerImage2 from '../../assets/The Whale.jpg';
import { MovieCarousel } from './MovieCarousel/MovieCarousel';
import { MovieDataType, getMovieDataType } from '../../util/MovieDataType';
import { TMDB } from '../../util/TMDB/TMDB';

export const FrontPage: React.FC = () => {
  const [featuredMovies, setFeaturedMovies] = useState<MovieDataType[]>([]);

  getMovieDataType(111)
    .then(response => {
      setFeaturedMovies(prev => {
        return [...prev, response];
      })
    })
  
  getMovieDataType(222)
  .then(response => {
    setFeaturedMovies(prev => {
      return [...prev, response];
    })
  })

  getMovieDataType(333)
  .then(response => {
    setFeaturedMovies(prev => {
      return [...prev, response];
    })
  })

  getMovieDataType(444)
  .then(response => {
    setFeaturedMovies(prev => {
      return [...prev, response];
    })
  })

  return (
    <div className="h-100 w-100 d-inline-block bg-danger">
      {/* Featured movies */}
      <MovieCarousel movies={featuredMovies} />
      {/* Saved movies */}
      <MovieCarousel movies={featuredMovies} />
      {/* Reviewed movies */}
      <MovieCarousel movies={featuredMovies} />
    </div>
  );
}