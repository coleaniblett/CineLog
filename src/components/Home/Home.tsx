import React from "react";
import { FrontPage } from "../FrontPage/FrontPage";
import { MovieDataType } from "../../util/MovieDataType";

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>,
  featuredMovies: any,
  savedMovies: any,
  reviewedMovies: any,
  setSavedMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>, 
  setFeaturedMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>,
  setReviewedMovies: React.Dispatch<React.SetStateAction<MovieDataType[]>>;
}

export const Home: React.FC<Props> = ({ setMovie, featuredMovies, savedMovies, reviewedMovies, setFeaturedMovies, setSavedMovies, setReviewedMovies }: Props) => {
  return (
    <div className="home" >
      <FrontPage setMovie={setMovie} featuredMovies={featuredMovies} savedMovies={savedMovies} reviewedMovies={reviewedMovies} setSavedMovies={setSavedMovies} setFeaturedMovies={setFeaturedMovies} setReviewedMovies={setReviewedMovies} />
    </div>
  );
}