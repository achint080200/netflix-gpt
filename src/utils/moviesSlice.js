import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        addPopularMovies : null,
        trailer:null
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addTrailerOfMovie : (state,action) => {
            state.trailer = action.payload;
        }
    }
});
export const {addNowPlayingMovies ,addTrailerOfMovie ,addPopularMovies} = moviesSlice.actions
export default moviesSlice.reducer
