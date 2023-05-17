import React from "react";
import { Header } from "../Header/Header";
import { FrontPage } from "../FrontPage/FrontPage";
import { MovieDataType } from "../../util/MovieDataType";

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const Home: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div className="home" >
      <Header setMovie={setMovie} />
      <FrontPage />
    </div>
  );
}