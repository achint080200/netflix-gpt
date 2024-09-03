import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerOfMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
        const data =  await fetch("https://api.themoviedb.org/3/movie/"
            +id+ "/videos?language=en-US", API_Options);
        const json = await data.json()
        const trailerData = json.results.filter(video => video.type === "Trailer");
        const trailer = trailerData.length ?trailerData[1] : json.results[0];
        dispatch(addTrailerOfMovie(trailer))
        
    };
    useEffect(()=>{
        getMovieVideos()
    },[])

};
export default  useMovieTrailer