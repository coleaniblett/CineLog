import React from "react";

export const Searchbar: React.FC = () => {
  return (
    <div className="searchbar d-flex">
      <input className="m-auto form-control form-control-lg w-75 rounded-pill" placeholder="Search for movies"></input>
    </div>
  );
}