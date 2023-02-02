import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

// edit initial state here
// reducers is like a mega-reducer that includes all of our reducers inside it
// uses immer library, so we can update state directly
const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            // the state in each reducer is referring only to the state managed by that reducer
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1)
        }
    },
    // to reset array, alongside movies array
    extraReducers(builder) {
        // builder.addCase() takes two arguments
        //     movie/reset accesses the movie/reset in moviesSlice
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;