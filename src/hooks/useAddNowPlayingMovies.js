import { useDispatch} from "react-redux";
import { useEffect } from "react";
import {addNowPlayingMovies} from '../utils/moviesSlice'
import {API_Options} from '../utils/constants'

const useAddNowPlayingMovies  = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options);
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results))
    }
    
    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}
export default useAddNowPlayingMovies 