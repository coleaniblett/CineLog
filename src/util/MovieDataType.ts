import { TMDB } from "./TMDB/TMDB"

export interface MovieDataType {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: boolean,
  budget: number,
  genres: any[], // type ?
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: any[], // type ?
  production_countries: any[], // type ?
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: any[], // type ?
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export const getMovieDataType = async (movieID: number): Promise<MovieDataType> => {
  console.log("calling getMovieDataType");
  try {
    const result = await TMDB.getMovie(movieID);

    const movieData: MovieDataType = {
      adult: result.adult,
      backdrop_path: result.backdrop_path,
      belongs_to_collection: result.belongs_to_collection,
      budget: result.budget,
      genres: result.genres,
      homepage: result.homepage,
      id: result.id,
      imdb_id: result.imdb_id,
      original_language: result.original_language,
      original_title: result.original_title,
      overview: result.overview,
      popularity: result.popularity,
      poster_path: result.poster_path,
      production_companies: result.production_companies,
      production_countries: result.production_countries,
      release_date: result.release_date,
      revenue: result.revenue,
      runtime: result.runtime,
      spoken_languages: result.spoken_languages,
      status: result.status,
      tagline: result.tagline,
      title: result.title,
      video: result.video,
      vote_average: result.vote_average,
      vote_count: result.vote_count,
    };

    console.log("movieData");
    console.log(movieData);
    return movieData;
  } catch (error) {
    // Handle any errors that occur during the API call
    console.error("Error occurred while getting movie data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};