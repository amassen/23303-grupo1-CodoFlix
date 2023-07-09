import React, { useState, useEffect } from "react";
import axios from "axios";
import InputMoviesSearch from "./SearchInput";
import SearchResults from "./SearchResults";
import { URL_SEARCH as URL, LANGUAGE } from "../Constants/constantsApi";

const API_KEY = "14e4b022e185e0d7da5d814d71c2996c";

const SearchComponent = () => {
  const [movies, setmovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const showData = async () => {
    try {
      const response = await axios.get(
        `${URL}${API_KEY}&query=${searchInput}${LANGUAGE}`
      );
      const data = response.data;
      const moviesArray = data.results;
      setmovies(moviesArray);
      // console.log(moviesArray);
    } catch (error) {
      console.error(error);
    }
  };

  const searcher = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearch(searchInput);
    showData();
  };

  useEffect(() => {
    showData();
  }, []);

  const results = movies.filter((el) =>
    el.original_title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <InputMoviesSearch
        searchInput={searchInput}
        searcher={searcher}
        handleSearch={handleSearch}
      />

      <SearchResults results={results} />
    </>
  );
};

export default SearchComponent;
