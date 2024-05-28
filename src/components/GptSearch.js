import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import LOGIN_BG_IMAGE from "../utils/assets/background-image.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-full object-cover" src={LOGIN_BG_IMAGE} alt="bg" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;