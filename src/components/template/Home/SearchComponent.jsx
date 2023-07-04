import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [movies, setmovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = "14e4b022e185e0d7da5d814d71c2996c";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";



const showData = async () => {
  try {
    const response = await axios.get(`${URL}${API_KEY}&query=${searchInput}`);
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
    <div>
      <input
        value={searchInput}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      />
      <button onClick={handleSearch}>Search</button>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
        
          </tr>
        </thead>
        <tbody>
          {results.map((el) => (
            <tr key={el.id}>
             <td>  <a href={`/reproducir/${el.id}`} target="_blank" rel="noopener noreferrer">
                  {el.original_title}
                </a>
               {el.release_date} <img
                src={`${URL_IMAGE + el.poster_path}`}
                alt=""
                height={600}
                width="100%"
              /></td>

              <td>{el.overview}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
