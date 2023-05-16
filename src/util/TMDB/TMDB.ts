import axios, { AxiosResponse } from 'axios';
import { MovieType } from '../MovieType';

const apiKey: string | undefined = process.env.REACT_APP_TMDB_API_KEY
const apiURL: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
const apiURLAlt: string = `https://api.themoviedb.org/3/movie/`;


// TODO: add type safety
export const TMDB = {

  async getMovies(searchTerm: string): Promise<MovieType[]> {
    const response: AxiosResponse = await axios.get(`${apiURL}&query=${searchTerm}`);
    const data: any[] = response.data.results;
    return data
      .filter((movie: MovieType) => movie.title.startsWith(searchTerm))
      .map((movie: MovieType) => ({
        title: movie.title,
        id: movie.id,
        posterPath: movie.posterPath
      }));
  },

  async getMovie(movieID: number): Promise<any> {
    console.log("calling getMovie: " + movieID);
    console.log(`${apiURLAlt}${movieID}?api_key=${apiKey}`);
    let response = await axios.get(`${apiURLAlt}${movieID}?api_key=${apiKey}`);
    return response.data;
    //const data = response.data.results;
  }

};