import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./CardDataFile";
import Reproductor from "./Reproductor";
import {
  URL_CARD_MOVIE as URL,
  LANGUAGE,
} from "../template/Home/Constants/constantsApi";

const API_KEY = "14e4b022e185e0d7da5d814d71c2996c";

const CardDataMovie = () => {
  const [movieData, setMovieData] = useState(null);

  // get id from url
  const urlPath = window.location.pathname;
  const movie_id = urlPath.substring(urlPath.lastIndexOf("/") + 1);

  //gets movie data

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${URL}${movie_id}?api_key=${API_KEY}${LANGUAGE}`
      );
      const info = response.data;
      setMovieData(info);
    } catch (error) {
      console.error(error);
    }
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
    <>
      <CardData showData={movieData} genreElements={genreElements} />;
      <Reproductor />
    </>
  );
};
export default CardDataMovie;
