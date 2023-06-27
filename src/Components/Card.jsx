import React from 'react';

export const Card = ({ movie }) => {
  return (
    <div className="card">
    <div className="card-img" >
    {movie.poster_path ? (
        <img
         src={`https.//image.tmdb.org/t/p/w500${movie.poster_path}`}
         alt={`${movie.title} Poster`} 
         /> 
         ) : (
        <div className = "filler-poster" >
            
        </div>
    )}
    </div>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-date">{movie.release_date.substring(0,4)}</p>
        <div className="card-buttons">
          <button className="card-button">Add to Wishlist</button>
          <button className="card-button">Watched</button>
        </div>
      </div> 
    </div>
  );
};