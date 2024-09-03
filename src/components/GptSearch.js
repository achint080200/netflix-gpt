import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import {BG_URL} from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='relative top-[100px] bg-white'>
        <img className="absolute top-[-100px] "src={BG_URL} alt='no render'/>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        
    </div>
  )
}

export default GptSearch