import React from "react";
import { Header } from "../Header/Header";
import { MainContent } from "../MainContent/MainContent";

export const Home: React.FC = () => {
  return (
    <div className="home w-100" >
      <Header />
      <MainContent />
    </div>
  );
}