import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowPopular = () => {
  const [moviesArray, setMoviesArray] = useState([]);

  const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
  const API_KEY = "14e4b022e185e0d7da5d814d71c2996c";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  
  //gets all top rated movies
    
const getMoviesInfo = async () => {
  try {
    const response = await axios.get(`${URL}${API_KEY}`);
    const info = response.data;
    const moviesArray = info.results;
    setMoviesArray(moviesArray);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    getMoviesInfo();
  }, []);

  return (
    <div>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
          </tr>
        </thead>
        <tbody>
          {moviesArray.map((el) => (
            <tr key={el.id}>
              <td>
                <a href={`/reproducir/${el.id}`} target="_blank" rel="noopener noreferrer">
                  {el.original_title}
                </a>
                {el.release_date}
                <img src={`${URL_IMAGE + el.poster_path}`} alt="" height={600} width="100%" />
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowPopular;
