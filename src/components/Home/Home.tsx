import React from "react";
import { Header } from "../Header/Header";
import { FrontPage } from "../FrontPage/FrontPage";

export const Home: React.FC = () => {
  return (
    <div className="home" >
      <Header />
      <FrontPage />
    </div>
  );
}