import { createSelector }  from "reselect";

const selectHabitsReducer = (state) => state.habit; 

export const selectHabits = createSelector(
    [selectHabitsReducer], 
    (habitsSlice) => habitsSlice.habits
)

export const selectHabitsMap = createSelector(
    [selectHabits],
    (habits) =>
      habits.reduce((acc, habit) => {
        const { title, items } = habit;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {})
  );