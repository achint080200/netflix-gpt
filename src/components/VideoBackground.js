import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ id }) => {
    useMovieTrailer(id);
    
    const trailerId = useSelector(state => state.movies.trailer?.key);
  
    return (
        <div className="  sm:mt-0  sm:relative sm:w-full  h-screen overflow-hidden">
            <iframe
                className="absolute top-0 left-0 w-screen md:w-full h-full"
                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&cc_load_policy=0&playsinline=1&start=3`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube video player"
                style={{  width: '100vw', 
                    height: '100vh', 
                    objectFit: 'cover',
                    transform: 'scale(1.2)', 
                    transformOrigin: 'center' 
                }}
            >
            </iframe>
        </div>
    );
};

export default VideoBackground;