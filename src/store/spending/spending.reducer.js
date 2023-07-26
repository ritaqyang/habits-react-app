import { createSlice } from '@reduxjs/toolkit';

export const SPENDING_INITIAL_STATE = {
  spendArray: [20,20,20,20,20,20],
};

export const spendingSlice = createSlice({
  name: 'spending',
  initialState: SPENDING_INITIAL_STATE,
  reducers: {
    setSpending(state, action) {
      state.spendArray = action.payload;
    },
  },
});
export const { setSpending } = spendingSlice.actions; 

export const spendingReducer = spendingSlice.reducer; 
