import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../utils/movieSlice";
import { IMG_CDN_URL } from "../utils/constants";

const MovieInformation = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movies.modalData);

  const handleCrossClick = () => {
    dispatch(toggleModal());
  };

  console.log(movieData);

  return (
    <div className="rounded-lg fixed z-50 h-[80%] w-[90%] bg-black mt-20 left-0 right-0 m-auto">
      <div className="flex p-4 justify-between">
        <h2 className="font-display text-red-800 text-2xl font-bold">
          {movieData.title}
        </h2>
        <i
          onClick={handleCrossClick}
          className="text-xl cursor-pointer text-white fa-solid fa-xmark"
        />
      </div>
      <div className="p-4 grid grid-cols-12">
        <div className="col-span-2">
          <img
            className="rounded-lg w-44 border border-white"
            alt="Movie card"
            src={IMG_CDN_URL + movieData.poster_path}
          />
        </div>
        <p className="text-white text-lg col-span-10 px-4 row-span-10">
          {movieData.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieInformation;
