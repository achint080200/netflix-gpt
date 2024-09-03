import React from 'react'
import MovieLlist from './MovieLlist'
import { useDispatch, useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'

const SecondaryContainer = () => {
    const movieData = useSelector(state => state.movies?.nowPlayingMovies)
   
    usePopularMovies()
    const popularMovieData = useSelector(state => state.movies?.addPopularMovies)
    
    
    
  return (
    <div className='bg-black'>
        <div className=' space-y-0 sm:-mt-[150px] -top-[600px] sm:top-0 ml-[10px] sm:ml-[50px] relative z-1000'>
        <MovieLlist title={"Now Playing"} movies={movieData}/>
        <MovieLlist title={"Trending"} movies={movieData}/>
        <MovieLlist title={"Popular"} movies={popularMovieData}/>
        <MovieLlist title={"Upcoming"} movies={movieData}/>
        <MovieLlist title={"Horror"} movies={movieData}/>
        </div>

    </div>
    
  )
}

export default SecondaryContainer