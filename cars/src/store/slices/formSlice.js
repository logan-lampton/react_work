import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

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
    },
    // extraReducer to make the form state reset after the car is submitted
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        })
    }
});

// exporting the actions that redux will generate based on our slice
export const { changeName, changeCost } = formSlice.actions;
// exporting the combined reducer
export const formReducer = formSlice.reducer;