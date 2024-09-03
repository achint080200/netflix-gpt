import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 max-h-full  pr-2'> 
        <img className=""src={IMG_CDN + poster_path } alt="no render"/>

    </div>
  )
}

export default MovieCard