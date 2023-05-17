import React from 'react';
import { Header } from '../Header/Header';
import { MovieType } from '../../util/MovieType';

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<number | null>>
}

export const Review: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div>
      <Header setMovie={setMovie} />
    </div>
  );
}