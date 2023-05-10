import React from 'react';
import { Carousel } from 'react-bootstrap';
import FillerImage from '../../assets/Everything_Everywhere_All_at_Once.jpg';
import FillerImage2 from '../../assets/The Whale.jpg';
import { MovieCarousel } from './MovieCarousel/MovieCarousel';

export const FrontPage: React.FC = () => {

  const fillerData = [
    {
      name: "Everything Everywhere All At Once",
      image: FillerImage
    },
    {
      name: "The Whale",
      image: FillerImage2
    }
  ]

  return (
    <div className="h-100 w-100 d-inline-block bg-danger">
      {/* Featured movies */}
      <MovieCarousel movies={fillerData} />
      {/* Saved movies */}
      <MovieCarousel movies={fillerData} />
      {/* Reviewed movies */}
      <MovieCarousel movies={fillerData} />
    </div>
  );
}