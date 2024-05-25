import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-44 pr-4 hover:scale-110 duration-150">
        <img className="rounded-lg" alt='Movie card' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard