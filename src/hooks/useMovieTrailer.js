import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.title === "Trailer"
    );
    let trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
