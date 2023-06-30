import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    highScore : 0,
    lastScore : 0
}

const scoreSlice = createSlice({
    name : 'score',
    initialState,
    reducers : {
        highScoreSet : (state, action)=>{
            state.highScore = action.payload;
        },
        lastScoreSet : (state, action)=>{
            state.lastScore = action.payload;
        }
    },
})
export const {highScoreSet, lastScoreSet} = scoreSlice.actions
export const getHighScore = state => state.highScore;
export const getLastScore = state => state.lastScore;
export default scoreSlice.reducer