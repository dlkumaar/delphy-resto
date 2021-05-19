import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { useSelector } from 'react-redux';

import './App.css';

import { user } from './redux/features/userAuthSlice';

import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import CheckoutPage from './pages/CheckoutPage';

function App() {
	const userState = useSelector(user);
	const [loggedInState, setLoggedInState] = useState(userState.isLoggedIn);

	useEffect(() => {
		setLoggedInState(userState.isLoggedIn);
	}, [userState]);

	return (
		<div className='max-w-xl m-auto shadow'>
			<Route path='/' exact>
				{!loggedInState ? <Login /> : <HomePage />}
			</Route>

			<Route path='/checkout' exact component={CheckoutPage} />
			<Route path='/register' exact>
				<Register />
			</Route>
		</div>
	);
}

export default App;
