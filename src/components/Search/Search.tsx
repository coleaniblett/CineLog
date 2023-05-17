import React, { useState, useEffect, MouseEvent } from 'react';
import { TMDB } from '../../util/TMDB/TMDB';
import { Searchbar } from '../Searchbar/Searchbar';
import { SearchResults } from '../SearchResults/SearchResults';
import { MovieType } from '../../util/MovieType';
import { MovieDataType } from '../../util/MovieDataType';

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const Search: React.FC<Props> = ({ setMovie }: Props) => {
  const [searchTerm, setSearchterm] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    let newMovies = TMDB.getMovies(searchTerm);
    newMovies.then(result => setMovies(result));
    //newMovies.then(result => setMovies(result.map((movie: { title: any; }) => {})));
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
      {search && <SearchResults movies={movies} setMovie={setMovie} />}
    </div>
  );
}