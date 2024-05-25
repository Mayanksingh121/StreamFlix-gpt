import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) {
    return;
  }
  return (
    <div className="p-4 bg-black">
      <h1 className="font-display py-4 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-auto hide-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
