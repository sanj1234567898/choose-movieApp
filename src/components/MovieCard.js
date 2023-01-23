import React from "react";

const MovieCard = ({ image, title }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      <div className="poster-wrapper">
        <img src={image} alt={`${title} poster`} />
      </div>
    </div>
  );
};

export default MovieCard;
