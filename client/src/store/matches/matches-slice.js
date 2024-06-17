import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    matches: []
}

const MatchesSlice = createSlice({
    name:"matches",
    initialState: initialState,
    reducers: {
        addMatches: (state,action) => {
            state.matches = action.payload;
        },
        updateMatches: (state,action) => {
            state.matches = state.matches.map(match => {
                if(match._id === action.payload._id){
                    match = action.payload;
                }
                return match;
            })
        }
    } 
});

export const matchesActions = MatchesSlice.actions;

export default MatchesSlice;