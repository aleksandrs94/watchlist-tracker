import React from "react";
import "./CategoryComponent.css";

import { MoviePoster } from "./MoviePoster";

export const CategoryComponent = (props) => {
  const { items, type, title } = props;

  const Posters = items.map((item, index) => {
    return item && <MoviePoster movie={item} type={type} index={index} key={index} />;
  });

  return (
    <div className={`category ${type}`}>
      <h2>{title}:</h2>

      <div className="poster-list">{Posters}</div>
    </div>
  );
};
