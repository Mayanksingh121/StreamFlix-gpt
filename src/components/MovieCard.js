import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addModalData, toggleModal } from "../utils/movieSlice";

const MovieCard = ({ posterPath,movie}) => {
  const dispatch = useDispatch();
  if (!posterPath) {
    return null;
  }

  const handleCardClick = () => {
    dispatch(addModalData(movie));
    dispatch(toggleModal());
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer w-24 md:w-36 pr-4 hover:scale-110 duration-150"
    >
      <img
        className="rounded-lg"
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
