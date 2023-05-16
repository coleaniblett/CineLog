import React from 'react';
import { Header } from '../Header/Header';

type Props = {
  setMovie: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Settings: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div>
      <Header setMovie={setMovie} />
    </div>
  );
}