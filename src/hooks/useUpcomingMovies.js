import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const isUpcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    !isUpcomingMovies && getUpcomingMovies();
  }, []);

  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
