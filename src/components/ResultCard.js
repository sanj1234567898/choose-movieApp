import React from "react";
import { useDispatch } from "react-redux";
import { addMovieToWatchList } from "../features/add/movieSlice";

const ResultCard = ({ id, title, image, description }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const movie = {
      title,
      image,
      description,
      id,
    };
    dispatch(addMovieToWatchList(movie));
  };

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img src={image} alt={`${title} poster`} />
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{title}</h3>
          <h4 className="description">{description ? description : "-"}</h4>
        </div>
        <div className="controls">
          <button className="btn" onClick={onClickAdd}>
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
