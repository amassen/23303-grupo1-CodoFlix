import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reproductor = () => {
  const [movieData, setMovieData] = useState(null);

  const URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = "?api_key=14e4b022e185e0d7da5d814d71c2996c";
   
  {/* insertar youtube player aca */}

  // get id from url
  const urlPath = window.location.pathname;
  const movie_id = urlPath.substring(urlPath.lastIndexOf('/') + 1);

 
  
  const getInfo = async () => {
    try {
      const response = await axios.get(`${URL}${movie_id}${API_KEY}`);
      const info = response.data;
      setMovieData(info);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>

    </div>
  );
};

export default Reproductor;
