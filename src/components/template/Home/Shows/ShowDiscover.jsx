import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "../SearchComponent/SearchResults";
import { URL_DISCOVER as URL, LANGUAGE } from "../Constants/constantsApi";

const API_KEY = "14e4b022e185e0d7da5d814d71c2996c";

const ShowDiscover = () => {
  const [moviesArray, setMoviesArray] = useState([]);

  const getMoviesInfo = async () => {
    try {
      const response = await axios.get(`${URL}${API_KEY}${LANGUAGE}`);
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

  return <SearchResults results={moviesArray} />;
};

export default ShowDiscover;
