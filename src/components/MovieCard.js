import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCard = ({posterPath}) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className="cursor-pointer w-36 pr-4 hover:scale-110 duration-150">
        <img className="rounded-lg" alt='Movie card' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;