import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY
const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;



// TODO: add type safety
export const TMDB = {

  async getMovies(searchTerm: string) {
    const response = await axios.get(`${apiURL}&query=${searchTerm}`);
    const data = response.data.results;
    return data.filter((movie: { title: any; }) => {
      return movie.title.substring(0, searchTerm.length) == searchTerm;
    })

    
  }

};