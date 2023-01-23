import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieControls from "./MovieControls";

const WatchList = () => {
  const watchlist = useSelector((state) => state.movieReducer.watchlist);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(watchlist);
      localStorage.setItem("watchlist", json);
    }

    isMounted.current = true;
  }, [watchlist]);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1>My watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map(({ title, image, id }) => {
              return (
                <div key={id} className="movie-card">
                  <div className="overlay"></div>
                  <div className="poster-wrapper">
                    <img src={image} alt={`${title} poster`} />
                  </div>
                  <MovieControls id={id} title={title} image={image} />
                </div>
              );
            })}
          </div>
        ) : (
          <h2>No movie in your list ADD SOME</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
