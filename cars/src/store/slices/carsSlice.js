import { createSlice, nanoid } from '@reduxjs/toolkit';
// nanoid is a built in random ID generator from redux toolkit

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        // assumption: action.payload === {name: 'x', cost: x, id: x}
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        // 1. filter the cars array/assign to a new variable; 2. return an array without the car matching the id of the car; 3. make state.cars the updated variable that stands for the array without the car searched for
        removeCar(state, action) {
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;