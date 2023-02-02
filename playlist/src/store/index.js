import { configureStore, createSlice } from '@reduxjs/toolkit';

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
    }
});

// can debug the store with:
    // store.dispatch({ type: 'songs/addSong' });
    // OR store.getState();
// the store is where we edit top level state
const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong('Cool song'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store };

// export addSong function action creator
export const { addSong, removeSong } = songsSlice.actions;