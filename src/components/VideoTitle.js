import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] md:pt-[20%] w-full aspect-video px-4 md:px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-display text-lg md:text-3xl font-semibold md:font-bold">{title}</h1>
      <p className="hidden md:flex w-[43%] md:py-6 md:w-1/3 md:text-lg text-xs">{overview}</p>
      <div className="mt-2 flex gap-2">
        <button className="font-body bg-white text-black px-2 py-1 md:px-12 md:py-2 md:text-xl rounded-lg hover:bg-opacity-60 ">
          <i className="md:mr-2 fa-solid fa-play"></i>Play
        </button>
        <button className="font-body bg-gray-500 px-2 py-1 md:mx-2  md:px-8 md:py-2 md:text-xl rounded-lg bg-opacity-60 hover:bg-opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
