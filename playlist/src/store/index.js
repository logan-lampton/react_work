import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';

// can debug the store with:
    // store.dispatch({ type: 'songs/addSong' });
    // OR store.getState();
// the store is where we edit top level state
const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong('Cool song'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store };
export { addSong, removeSong, addMovie, removeMovie };
