import React, { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
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
    <div className="container">
    <div id="carousel2" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {moviesArray.map((show, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="row">
              {moviesArray.slice(index, index + 4).map((movieItem) => (
                <div className="col-md-3 p-2 d-flex align-items-stretch" key={movieItem.id}>
                  <div className="card m-6" style={{ width: "18rem" }}>
                   
                      <img className="card-img-top .img-fluid .img-thumbnail" src={`${URL_IMAGE + movieItem.poster_path}`} alt="Card image cap" />
                      <div className="card-body">
                        <div className="d-flex flex-column">
                          <ul className="list-group list-group-flush">
                          <Link to={`/reproducir/${movieItem.id}`} style={{ textDecoration: "none" }}>     <li className="list-group-item fs-2">{movieItem.original_title}</li></Link>
                            <li className="list-group-item fs-6">Fecha de estreno: {movieItem.release_date}</li>
                          </ul>
                        </div>
                      </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-yellow" aria-hidden="true"style={{ fontSize: "2rem" }}></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-yellow" aria-hidden="true" style={{ fontSize: "2rem" }}></span>
      </button>
    </div>
  </div>



  );
};


export default ShowPopular;
