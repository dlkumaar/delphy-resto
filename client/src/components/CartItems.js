import React from 'react';
// import { useDispatch } from 'react-redux';

function CartItems({ strMealThumb, strMeal, mealPrice, mealCount }) {
	// const dispatch = useDispatch();

	return (
		<div className='flex justify-between mb-3 relative'>
			<div className='w-10/12 flex'>
				<img src={strMealThumb} alt={strMeal} className='w-12 mr-3' />
				<div>
					<h2 className=' font-medium'>{strMeal}</h2>
					<div>${mealPrice}</div>
				</div>
			</div>
			<div>x {mealCount}</div>
		</div>
	);
}

export default CartItems;
