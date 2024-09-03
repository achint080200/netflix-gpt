import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../utils/moviesSlice';
import gptReducer from '../utils/gptSlice';
import configReducer from '../utils/config'

import  userReducer  from "../utils/userSlice";
export const appStore  = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer
    }
})