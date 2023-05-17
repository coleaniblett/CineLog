import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { MovieDataType } from '../../util/MovieDataType';

// TODO: replace rating-section radio with highlight-on-hoven star buttons

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>,
  movie: MovieDataType | null;
}

const getDate = () => {
  let curDate = new Date();
  let curFullYear = curDate.getFullYear().toString(),
    curMonth = curDate.getMonth().toString(),
    curDay = curDate.getDate().toString();
  return `${curMonth}-${curDay}-${curFullYear}`
}

export const Review: React.FC<Props> = ({ setMovie, movie }: Props) => {
  const [reviewText, setReviewText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)  => {
    setReviewText(e.currentTarget.value);
  }

  return (
    <div>
      <Header setMovie={setMovie} />
      {movie && <div className="p-3 d-flex flex-column">
        <h3 className="display-4 text-center">{movie.title}</h3>
        <img 
          className="p-2 w-50 m-auto"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        />
        <form>
          <label>Watch date: </label>
          <p>{getDate()}</p>
          <label htmlFor="rating-section">Rating: </label>
          <div className="rating" id="rating-section">
            <input type="radio" id="one-star"></input>
            <label htmlFor="one-star">One star</label>
            <input type="radio" id="two-star"></input>
            <label htmlFor="two-star">Two star</label>
            <input type="radio" id="three-star"></input>
            <label htmlFor="three-star">Three star</label>
            <input type="radio" id="four-star"></input>
            <label htmlFor="four-star">Four star</label>
            <input type="radio" id="five-star"></input>
            <label htmlFor="five-star">Five star</label>
            <br/><br/>
          </div>
          <div className="review-notes">
            <label htmlFor="review-notes-input">Notes:</label>
            <br/>
            <textarea className="w-100" id="review-notes-input" onChange={handleChange}></textarea>
          </div>
          <button type="submit" >Submit review</button>
        </form>
      </div>}
    </div>
  );
}