import React from 'react';
import "./lib/font-awesome/css/card.css"

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

export const Card = ({ movie }) => {
  // return (
  //   <div class="card" style="width: 18rem;">
  //   <div class="card-img-top">
  //   {movie.poster_path ? (
  //       <img
  //        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  //         alt={`${movie.title} Poster`} 
  //        /> 
  //        ) : (
  //        <div className = "filler-poster" >
            
  //       </div>
  //   </div> )}
  // <div class="card-body">
  //   <h2 class="card-title">{movie.title}</h2>
  //   <p class="card-text">{movie.release_date?.substring(0,4)}</p>
  //   <button type="button" class="btn btn-secondary">Add to Watchlist</button>
  //   <button type="button" class="btn btn-secondary">Add to Watchlist</button>
  // </div>
  // </div>
  // )

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-img-top">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-text">{movie.release_date?.substring(0, 4)}</p>
        <button type="button" className="btn btn-secondary">
          Add to Watchlist
        </button>
        <button type="button" className="btn btn-secondary">
          Add to Watchlist
        </button>
      </div>
    </div>
  );

}
