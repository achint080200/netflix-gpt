import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        ToggleView : false
    },
    reducers : {
        toggleGptSearchView :(state,action) => {
             state.ToggleView = !state.ToggleView
        }
    }
});
export const {toggleGptSearchView} = gptSlice.actions
export default gptSlice.reducer