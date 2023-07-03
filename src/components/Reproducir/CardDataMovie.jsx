import React, { useState, useEffect } from 'react';

const CardDataMovie = () => {
  const [movieData, setMovieData] = useState(null);

  const URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = "?api_key=14e4b022e185e0d7da5d814d71c2996c";
  

  // get id from url
  const urlPath = window.location.pathname;
  const movie_id = urlPath.substring(urlPath.lastIndexOf('/') + 1);

  //gets movie data
  const fetchData = async () => {
    const response = await fetch(`${URL}${movie_id}${API_KEY}`);
    const info = await response.json();
    setMovieData(info);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

//   generos de peliculas
  let genreElements = null;
  if (movieData && movieData.genres) {
    genreElements = [];
    for (const genre of movieData.genres) {
      genreElements.push(<p key={genre.id}>{genre.name}</p>);
    }
    }
    
    

  return (
    
    <div>
      {movieData && (
        <table className="table table-striped table-hover mt-5 shadow-lg">
          <thead>
            <tr className="bg-curso text-white">
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{movieData.title}</td>
              <td>{movieData.overview}</td>
              <div>{genreElements}</div>
              <td>              
             
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CardDataMovie;
