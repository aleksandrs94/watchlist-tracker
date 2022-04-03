import React from "react";
import "./MoviePoster.css";

import {
  addAllMovie,
  removeAllMovie,
  addWatchedMovie,
  removeWatchedMovie,
} from "../index.js";

export const MoviePoster = (props) => {
  const { type, movie, index } = props;
  const { title, image, comment } = movie;
  const defaultUri = "assets/images/default.jpg";

  const getCallbackByType = () => {
    switch (type) {
      case "movies":
        addWatchedMovie(movie);
        removeAllMovie(index);
        break;
      case "watched":
        addAllMovie(movie);
        removeWatchedMovie(index);
        break;
      default:
        return;
    }
  };

  const handleImageError = (target) => {
    target.onerror = null;
    target.style.opacity = 0;
  };

  return (
    <div className={`poster ${type}`}>
      <div className="image-container" onClick={getCallbackByType}>
        <img
          src={image || defaultUri}
          alt={title}
          onError={(e) => handleImageError(e.currentTarget)}
        />
        <span className="comment">{comment}</span>
      </div>
      <span className="title">{title}</span>
    </div>
  );
};
