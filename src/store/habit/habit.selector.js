import { createSelector }  from "reselect";

const selectHabitsReducer = (state) => state.habits; 

export const selectHabits = createSelector(
    [selectHabitsReducer], 
    (habitsSlice) => habitsSlice.habits
)

