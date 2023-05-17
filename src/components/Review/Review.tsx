import React from 'react';
import { Header } from '../Header/Header';
import { MovieDataType } from '../../util/MovieDataType';

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>,
  movie: MovieDataType | null;
}

export const Review: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div>
      <Header setMovie={setMovie} />
      <h3></h3>
    </div>
  );
}