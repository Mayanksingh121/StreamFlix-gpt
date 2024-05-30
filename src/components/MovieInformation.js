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

  return (
    <div className="rounded-lg fixed z-50 h-[90%] md:h-[80%] w-[90%] bg-black mt-20 left-0 right-0 m-auto">
      <div className="flex p-2 md:p-4 justify-between">
        <h2 className="font-display text-red-800 text-lg md:text-2xl font-bold">
          {movieData.title}
        </h2>
        <i
          onClick={handleCrossClick}
          className=" text-lg md:text-xl cursor-pointer text-white fa-solid fa-xmark"
        />
      </div>
      <div className="md:p-4 grid md:grid-cols-12">
        <div className="md:col-span-2 flex justify-center">
          <img
            className="rounded-lg w-28 md:w-44 border border-white"
            alt="Movie card"
            src={IMG_CDN_URL + movieData.poster_path}
          />
        </div>
        <p className="font-body text-white md:text-lg md:col-span-10 px-4 py-4 md:py-0">
          {movieData.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieInformation;
