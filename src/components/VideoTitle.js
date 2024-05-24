import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="flex md:block pt-[15%] md:pt-[20%] w-screen aspect-video px-12 md:absolute md:bg-gradient-to-r from-black md:text-white">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="w-[60%] md:py-6 md:w-1/4 md:text-lg">{overview}</p>
      <div className="">
        <button className="bg-white text-black md:px-12 md:py-2 md:text-xl rounded-lg hover:bg-opacity-60">
          <i className="md:mr-2 fa-solid fa-play"></i>Play
        </button>
        <button className="md:mx-2 bg-gray-500 text-white md:px-8 md:py-2 md:text-xl rounded-lg bg-opacity-60 hover:bg-opacity-100">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
