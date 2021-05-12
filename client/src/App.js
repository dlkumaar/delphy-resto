import React from 'react';
import { Route } from 'react-router';
import './App.css';

import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className='max-w-xl m-auto shadow'>
			<Route path='/' exact component={HomePage} />

			<Route path='/checkout' exact component={CheckoutPage} />
		</div>
	);
}

export default App;
