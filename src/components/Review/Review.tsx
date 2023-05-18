import React, { useState, useEffect } from 'react';
import { MovieDataType } from '../../util/MovieDataType';

// TODO: replace rating-section radio with highlight-on-hoven star buttons

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>,
  movie: MovieDataType | null;
}

const getYear = () => {
  return new Date().getFullYear();
}

const getMonth = () => {
  return new Date().getMonth();
}

const getDay = () => {
  return new Date().getDate();
}

const getOptions = (start: number, range: number, selected: number) => {
  let nums: (number | string)[] = new Array();
  nums.push("?");
  for (let i: number = start; i < start + range; i++) {
    nums.push(i);
  }
  return nums.map((num) => {
    return (
      <option value={`${num}`}>{num}</option>
    )
  });
}

export const Review: React.FC<Props> = ({ setMovie, movie }: Props) => {
  // group date states together?
  const [day, setDay] = useState<number>();
  const [month, setmonth] = useState<number>();
  const [year, setYear] = useState<number>();
  const [reviewText, setReviewText] = useState<string>("");

  useEffect(() => {
    setDay(getDay());
    setmonth(getMonth());
    setYear(getYear());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)  => {
    setReviewText(e.currentTarget.value);
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setmonth(Number(e.target.value));
  }

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(Number(e.target.value));
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(e.target.value));
  }

  return (
    <div>
      {movie && <div className="p-3 d-flex flex-column">
        <h3 className="display-4 text-center">{movie.title}</h3>
        <img 
          className="p-2 w-75 m-auto"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        />
        <form>
          <label>Watch date: </label>
          <br/>
          <select defaultValue={getMonth()} onChange={handleMonthChange}>
            { getOptions(1, 12, getMonth()) }
          </select>
          <select defaultValue={getDay()} onChange={handleYearChange}>
            { getOptions(1, 31, getDay()) }
          </select>
          <select defaultValue={getYear()} onChange={handleYearChange}>
            { getOptions((getYear() - 24), 25, getYear()) }
          </select>
          <br/><br/>
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