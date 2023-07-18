import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  userId: 2,
  docs: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setUserDocs(state, action) {
      state.docs = action.payload; 
    }
    
  },
});

export const { setCurrentUser, setUserDocs  } = userSlice.actions;

export const userReducer = userSlice.reducer; 