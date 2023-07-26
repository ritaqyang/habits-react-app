import { createSelector } from 'reselect';

const selectSpendingReducer = (state) => state.spending;

export const selectSpending = createSelector(
  [selectSpendingReducer],
  (spendingSlice) => spendingSlice.spendArray
);
