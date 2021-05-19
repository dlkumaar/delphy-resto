import { createSlice, current } from '@reduxjs/toolkit';

const initialState = { isLoggedIn: true };

export const userAuth = createSlice({
	name: 'user',
	initialState,
	//
	reducers: {
		login: (state, action) => {
			const userState = true;
			state.isLoggedIn = userState;
		},

		logout: (state, action) => {
			const userState = false;
			state.isLoggedIn = userState;
		},
	},
});

export const { login, logout } = userAuth.actions;

//
export const user = (state) => state.user;

export default userAuth.reducer;
//
