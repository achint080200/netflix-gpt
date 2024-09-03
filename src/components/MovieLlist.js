import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  

  // Guard clause to check if movies array is not empty
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies to display.</p>;
  }

  return (
    <div className=' mt-[300px] sm:mt-0'>
        <h1 className='text-3xl py-3 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll h-[200px] '>
       
        <div className='flex  space-x-2 '>
          {/* 
          Iterating over the movies array correctly using map 
          */}
          {movies.map((movie, index) => (
            <MovieCard key={index} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;