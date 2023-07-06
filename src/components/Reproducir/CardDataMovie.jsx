import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardDataMovie = () => {
  const [movieData, setMovieData] = useState(null);

  const URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = "?api_key=14e4b022e185e0d7da5d814d71c2996c";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  

  // get id from url
  const urlPath = window.location.pathname;
  const movie_id = urlPath.substring(urlPath.lastIndexOf('/') + 1);

  //gets movie data

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}${movie_id}${API_KEY}`);
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
    
//     <div>
//       {movieData && (
//         <table className="table table-striped table-hover mt-5 shadow-lg">
//           <thead>
//             <tr className="bg-curso text-white">
             
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{movieData.title}</td>
//               <td>{movieData.overview}</td>
//               <div>{genreElements}</div>
//               <td>              
             
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };



<div>
{movieData && (
 

      <div className="container  m-0 p-0">
        <div className="">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-8 ">
            <div className="card m-5 shadow-lg rounded" >
              <img
                className="card-img-top"
                src={`${URL_IMAGE + movieData.poster_path}`}
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex flex-column">
                  <ul className="list-group list-group-flush list-unstyled  text-center ">
                    <li className="list-group-item fs-2">{movieData.name}</li>
                    <li className="list-group-item">{movieData.overview}</li>
                    <li className="list-group-item"> <span className='fw-bold m-4 mb-0'>Generos: </span>{genreElements}</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  


</div>


)}
</div>
);};
export default CardDataMovie;
