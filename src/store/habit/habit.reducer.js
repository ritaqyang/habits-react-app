import { createSlice } from "@reduxjs/toolkit";

export const HABIT_INITIAL_STATE = {
    habits: [],  
    isHabitsChanged: '', 
}; 

export const habitsSlice = createSlice({
    name: 'habits', 
    initialState: HABIT_INITIAL_STATE,
    reducers: {
        setHabits(state,action) {
            state.habits = action.payload; 
        },
        setIsHabitsChanged(state,action) {
            state.isHabitsChanged = action.payload;  
        }
    },
}); 

export const { setHabits, setIsHabitsChanged } = habitsSlice.actions; 

export const habitsReducer = habitsSlice.reducer; 