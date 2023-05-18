import React from "react";
import { FrontPage } from "../FrontPage/FrontPage";
import { MovieDataType } from "../../util/MovieDataType";

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const Home: React.FC<Props> = ({ setMovie }: Props) => {
  return (
    <div className="home" >
      <FrontPage />
    </div>
  );
}