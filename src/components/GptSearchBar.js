import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import fetchGptSearchMovieData from "../utils/fetchGptSearchMovieData";
import getGptResult from "../utils/getGptResult";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchResult = useRef();
  const dispatch = useDispatch();

  const handleSearchItem = async () => {
    const result = await getGptResult(searchResult.current.value);

    const gptMovies =
      result.response?.candidates[0]?.content?.parts[0]?.text.split(",");

    const promiseArray = gptMovies.map((movie) =>
      fetchGptSearchMovieData(movie)
    );

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 bg-opacity-50"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchResult}
          className="col-span-9 p-4 m-4"
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          onClick={handleSearchItem}
          className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
