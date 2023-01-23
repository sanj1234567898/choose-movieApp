import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovieToWatched,
  deleteMovieFromWatchList,
} from "../features/add/movieSlice";

const MovieControls = ({ id, image, title }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.movieReducer.watchlist);

  const removeMovie = () => {
    dispatch(deleteMovieFromWatchList(id));
  };

  const onClickAdd = () => {
    const movie = {
      title,
      image,
      id,
    };
    dispatch(addMovieToWatched(movie));
  };

  return (
    <div className="inner-card-controls">
      {watchlist && (
        <>
          <button className="ctrl-btn" onClick={onClickAdd}>
            <i className="fa-fw fa fa-eye"></i>
          </button>
          <button className="ctrl-btn" onClick={removeMovie}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
