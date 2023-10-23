import React from "react";
import "./index.css";
function MovieCard({ img, name }) {
  return (
    <div className="movie-card">
      <img src={img} alt="" />
      <p className="first">BASE GAME</p>
      <p className="middle">{name}</p>
      <p className="last">
        <span className="discount">-30%</span>
        <span className="before">đ1.000.000</span>
        <span className="after">đ700.000</span>
      </p>
    </div>
  );
}

export default MovieCard;
