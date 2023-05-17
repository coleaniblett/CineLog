import React, { useState, useEffect } from "react";
import { TMDB } from "../../util/TMDB/TMDB";

// TODO: fix type
interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Searchbar: React.FC<Props> = ({ setSearchTerm, setSearch }: Props) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setSearchTerm(text);
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