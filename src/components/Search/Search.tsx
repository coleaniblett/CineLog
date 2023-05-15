import React, { useState, useEffect, MouseEvent } from 'react';
import { TMDB } from '../../util/TMDB/TMDB';
import { Searchbar } from '../Searchbar/Searchbar';
import { SearchResults } from '../SearchResults/SearchResults';

type Movie = {
  title: string;
};

export const Search: React.FC = () => {
  const [searchTerm, setSearchterm] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const [movies, setMovies] = useState([]);

  // temp test data for searchResults
  const moviesData = [ "Star Wars I", "Star Wars II", "Star Wars III", "Star Wars IV", "Star Wars V"];

  useEffect(() => {
    let newMovies = TMDB.getMovies(searchTerm);
    newMovies.then(result => setMovies(result.map((movie: { title: any; }) => movie.title)));
  }, [searchTerm])

  const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSearch(true);
  }
  const handleMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSearch(false);
  }

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Searchbar setSearchTerm={setSearchterm} setSearch={setSearch} />
      {search && <SearchResults movies={movies} />}
    </div>
  );
}