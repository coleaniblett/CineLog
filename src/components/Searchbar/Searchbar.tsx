import React, { useState, useEffect } from "react";
import { TMDB } from "../../util/TMDB/TMDB";

export const Searchbar: React.FC = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    console.log(TMDB.getMovies(text));
  }, [text]);

  return (
    <div className="searchbar d-flex">
      <input 
        className="m-auto form-control form-control-lg w-75 rounded-pill" 
        placeholder="Search for movies"
        onChange={e => setText(e.target.value)}
      >
      </input>
    </div>
  );
}