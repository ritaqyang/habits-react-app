import { createSlice } from "@reduxjs/toolkit";

export const HABIT_INITIAL_STATE = {
    habits: [],  
}; 

export const habitsSlice = createSlice({
    name: 'habits', 
    initialState: HABIT_INITIAL_STATE,
    reducers: {
        setHabits(state,action) {
            state.habits = action.payload; 
        }
    },
}); 

export const { setHabits } = habitsSlice.actions; 

export const habitsReducer = habitsSlice.reducer; 