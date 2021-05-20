import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartItemsSlice = createSlice({
	name: 'cartItems',
	initialState,
	//
	reducers: {
		addItem: (state, action) => {
			if (state.some((e) => e.mealName === action.payload.mealName)) return;
			return [...state, action.payload];
		},

		removeItem: (state, action) => {
			return state.filter((cartItem) => cartItem.mealName !== action.payload);
		},
		addMealCountByOne: (state, action) => {
			const updatedState = state.map((cartItem) =>
				cartItem.mealName === action.payload.mealName
					? { ...cartItem, mealCount: cartItem.mealCount + 1 }
					: cartItem
			);

			return updatedState;
		},

		removeMealCountByOne: (state, action) => {
			const updatedState = state.map((cartItem) =>
				cartItem.mealName === action.payload.mealName
					? { ...cartItem, mealCount: cartItem.mealCount - 1 }
					: cartItem
			);

			return updatedState;
		},
	},
});

export const { addItem, removeItem, addMealCountByOne, removeMealCountByOne } =
	cartItemsSlice.actions;

//
export const selectItem = (state) => state.cartItems;

export default cartItemsSlice.reducer;
//
