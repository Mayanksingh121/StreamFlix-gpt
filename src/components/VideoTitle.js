import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] w-full aspect-video px-6 md:px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-display text-lg md:text-3xl font-semibold md:font-bold">{title}</h1>
      <p className="hidden md:inline-block w-[43%] md:pt-6 md:w-1/3 md:text-lg text-xs">{overview}</p>
      <div className="mt-2 flex gap-2">
        <button className="font-body bg-white text-black px-3 py-1 md:px-12 md:py-2 md:text-xl rounded-lg hover:bg-opacity-60 ">
          <i className="md:mr-2 fa-solid fa-play"></i>Play
        </button>
        <button className="hidden md:inline-block font-body bg-gray-500 mx-2 px-8 py-2 text-xl rounded-lg bg-opacity-60 hover:bg-opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
