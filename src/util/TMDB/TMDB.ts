import axios from 'axios';
import { MovieType } from '../MovieType';

const apiKey: string | undefined = process.env.REACT_APP_TMDB_API_KEY
const apiURL: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
const apiURLAlt: string = `https://api.themoviedb.org/3/movie/`;

const getMovies = (searchTerm: string): Promise<any> => {
  return axios.get(`${apiURL}&query=${searchTerm}`)
    .then(result => {
      const movies: any[] = result.data.results;
      return movies
        .filter((movie: MovieType) => movie.title.startsWith(searchTerm))
        .map((movie: MovieType) => ({
          title: movie.title,
          id: movie.id,
          posterPath: movie.posterPath
        }));
    })
    .catch(error => {
      console.error(error);
    })
}

// TODO: add type safety
export const TMDB = {
  getMovies,

  async getMovie(movieID: number): Promise<any> {
    let response = await axios.get(`${apiURLAlt}${movieID}?api_key=${apiKey}`);
    return response.data;
  }

};