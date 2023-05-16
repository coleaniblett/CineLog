import React from 'react';
import { Header } from '../Header/Header';

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Reviews: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div>
      <Header setMovie={setMovie} />
    </div>
  );
}