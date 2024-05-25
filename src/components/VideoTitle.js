import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] md:pt-[20%] w-screen aspect-video px-4 md:px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-lg md:text-3xl font-semibold md:font-bold">{title}</h1>
      <p className="w-[43%] md:py-6 md:w-1/4 md:text-lg text-xs">{overview}</p>
      <div className="">
        <button className="bg-white text-black md:px-12 md:py-2 md:text-xl rounded-lg hover:bg-opacity-60 text-sm">
          <i className="md:mr-2 fa-solid fa-play"></i>Play
        </button>
        <button className="text-sm md:mx-2 bg-gray-500 text-white md:px-8 md:py-2 md:text-xl rounded-lg bg-opacity-60 hover:bg-opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
