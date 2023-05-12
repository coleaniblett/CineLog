import React, { useState, useEffect } from "react";
import { TMDB } from "../../util/TMDB/TMDB";

// TODO: fix type
type Props = {
  setSearchTerm: any,
  setSearch: any;
};

export const Searchbar: React.FC<Props> = ({ setSearchTerm, setSearch }: Props) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    //console.log(TMDB.getMovies(text));
    setSearchTerm(text);
  }, [text]);

  return (
    <div className="searchbar d-flex">
      <input 
        className="m-auto form-control form-control-lg w-75 rounded-pill" 
        placeholder="Search for movies"
        onChange={e => setText(e.target.value)}
        onFocus={e => setSearch(true)}
        onBlur={e=> setSearch(false)}
      >
      </input>
    </div>
  );
}