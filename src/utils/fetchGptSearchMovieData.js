import { API_OPTIONS } from "./constants";

const fetchGptSearchMovieData = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" + movie,
    API_OPTIONS
  );
  const dataInJSON = await data.json();
  return dataInJSON.results;
};

export default fetchGptSearchMovieData;
