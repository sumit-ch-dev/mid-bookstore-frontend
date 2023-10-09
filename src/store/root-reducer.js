import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user/user.reducer';
// import { categoriesReducer } from './categories/category.reducer';
import  {cartReducer}  from './cart/cart.reducer';
import bookReducer from './books/book.reducer';

export const rootReducer = combineReducers({
    book: bookReducer,
    user: userReducer,
    cart: cartReducer,
});