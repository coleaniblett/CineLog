import React from 'react';
import { Header } from '../Header/Header';
import { MovieDataType } from '../../util/MovieDataType';

type Props = {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const Settings: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div>
      <Header setMovie={setMovie} />
    </div>
  );
}