import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    matches: []
}

const MatchesSlice = createSlice({
    name:"matches",
    initialState: initialState,
    reducers: {
        addMatches: (state,action) => {
            console.log('add matches');
            console.log('matches slice add',action.payload);
            state.matches = action.payload;
        }
    } 
});

export const matchesActions = MatchesSlice.actions;

export default MatchesSlice;