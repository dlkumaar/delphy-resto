import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from './features/cartItemsSlice';
import userAuthReducer from './features/userAuthSlice';

export const store = configureStore({
	reducer: {
		cartItems: cartItemsReducer,
		user: userAuthReducer,
	},
});
