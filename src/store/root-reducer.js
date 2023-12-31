import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { habitsReducer } from './habit/habit.reducer';
import { spendingReducer } from './spending/spending.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  habit: habitsReducer,
  spending: spendingReducer, 
});
