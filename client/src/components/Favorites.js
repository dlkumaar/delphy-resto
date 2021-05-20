import React, { useEffect, useState } from 'react';
import axios from 'axios';

import dishPrice from '../utils/dishPriceGenerator';
import FavoriteMealCard from './FavoriteMealCard';

function Favorites() {
	const [state, setState] = useState([]);

	useEffect(() => {
		const source = axios.CancelToken.source();
		axios
			.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')

			.then((response) =>
				response.data.meals.map((e) => {
					return {
						...e,
						price: dishPrice(),
					};
				})
			)

			.then((data) => setState(data));

		return source.cancel();
	}, []);

	return (
		<div className='p-4 pr-0'>
			<h3 className='pb-2 text-lg text-gray-600 font-bold'>
				Your favorite meals
			</h3>

			<div className='flex overflow-x-scroll overflow-y-hidden'>
				{state[0] &&
					state.map(({ idMeal, ...otherMealProps }) => (
						<FavoriteMealCard key={idMeal} {...otherMealProps} />
					))}
			</div>
		</div>
	);
}

export default Favorites;
