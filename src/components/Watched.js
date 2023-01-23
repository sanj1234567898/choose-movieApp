import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Watched = () => {
  const watched = useSelector((state) => state.movieReducer.watched);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(watched);
      localStorage.setItem("watched", json);
    }

    isMounted.current = true;
  }, [watched]);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1>My watched</h1>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map(({ title, image, id }) => {
              return <MovieCard key={id} image={image} title={title} />;
            })}
          </div>
        ) : (
          <h2>No movie in your list ADD SOME</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
