import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from './features/cartItemsSlice';

export const store = configureStore({
	reducer: {
		cartItems: cartItemsReducer,
	},
});
