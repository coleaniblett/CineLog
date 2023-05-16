import React from "react";
import { Header } from "../Header/Header";
import { FrontPage } from "../FrontPage/FrontPage";

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Home: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div className="home" >
      <Header setMovie={setMovie} />
      <FrontPage />
    </div>
  );
}