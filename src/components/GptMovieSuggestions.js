import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector(store=>store.gpt);
  const {movieResults,gptMovies} = gpt;

  if(!gptMovies) return null;
 
  return (
    <div className='text-white bg-black m-4 bg-opacity-80'>
      <div>
        {gptMovies.map((movieName,index)=>{
          return (<MovieList key={movieName} title={movieName} movies={movieResults[index]}></MovieList>);
        })} 
      </div>
    </div>
    
  )
}

export default GptMovieSuggestions