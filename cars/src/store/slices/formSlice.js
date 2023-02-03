import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload; 
        },
        changeCost(state, action) {
            state.cost = action.payload; 
        }
    }
});

// exporting the actions that redux will generate based on our slice
export const { changeName, changeCost } = formSlice.actions;
// exporting the combined reducer
export const formReducer = formSlice.reducer;