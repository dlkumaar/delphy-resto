import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const order = createSlice({
	name: 'order',
	initialState,
	//
	reducers: {
		addItem: (state, action) => {
			if (state.some((e) => e.mealName === action.payload.mealName)) return;
			return [...state, action.payload];
		},
	},
});

export const { finalOrder } = order.actions;

//
export const selectItem = (state) => state.cartItems;

export default order.reducer;
//
