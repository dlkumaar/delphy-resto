import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartItemsSlice = createSlice({
	name: 'cartItems',
	initialState,
	//
	reducers: {
		addItem: (state, action) => {
			return [...state, action.payload];
		},

		removeItem: (state, action) => {
			return state.filter((cartItem) => cartItem.mealName !== action.payload);
		},
	},
});

export const { addItem, removeItem } = cartItemsSlice.actions;

//
export const selectItem = (state) => state.cartItems;

export default cartItemsSlice.reducer;
//
