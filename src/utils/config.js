import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
    name : "config",
    initialState : {
        language : "English"
    },
    reducers : {
        changeLanguage : (state,action) => {
            state.language=action.payload
        }
    }
})
export const {changeLanguage} = config.actions
export default config.reducer