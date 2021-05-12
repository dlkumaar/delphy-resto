import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import MenuItem from './MenuItem';

function Menu({ addItemToCart }) {
	const [serachBy, setSearchBy] = useState('Miscellaneous');
	const [dishes, setDishes] = useState('');

	useEffect(() => {
		const source = axios.CancelToken.source();

		axios
			.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${serachBy}`)
			.then((data) => setDishes(data.data.meals));
		// .then(console.log(dishes));
		return source.cancel();
	}, [serachBy]);

	const handleMenuChange = (e) => {
		setSearchBy(e.target.value);
	};
	// console.log(serachBy);

	return (
		<div className='p-4'>
			<div className='flex justify-between mb-8'>
				<h2 className='pb-2 text-lg text-gray-600 font-bold'>Menu</h2>
				<div>
					<select
						name='meal'
						id='meal'
						value={serachBy}
						onChange={handleMenuChange}
						className='w-40 border border-gray-400 rounded p-2'>
						<option value='Miscellaneous'>Today's Special</option>
						<option value='Beef'>Beef</option>
						<option value='Breakfast'>Breakfast</option>
						<option value='Chicken'>Chicken</option>
						<option value='Dessert'>Dessert</option>
						<option value='Goat'>Goat</option>
						<option value='Pasta'>Pasta</option>
						<option value='Pork'>Pork</option>
						<option value='Seafood'>Seafood</option>
						<option value='Side'>Side</option>
						<option value='Starter'>Starter</option>
						<option value='Vegan'>Vegan</option>
						<option value='Vegetarian'>Vegetarian</option>
					</select>
				</div>
			</div>

			{!dishes ? (
				<div className='flex justify-center'>
					<Loader
						type='Puff'
						color='#00BFFF'
						height={100}
						width={100}
						timeout={10000} //10 secs
					/>
				</div>
			) : (
				dishes.map(({ idMeal, ...otherMealProps }) => (
					<MenuItem
						key={idMeal}
						{...otherMealProps}
						addItemToCart={addItemToCart}
					/>
				))
			)}
		</div>
	);
}

export default Menu;
