import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from './../redux/features/cartItemsSlice.js';

function MenuItem({
	strMeal,
	strMealThumb,
	addItemToCart,
	removeFromCart,
	removeItemFromCart,
}) {
	const dispatch = useDispatch();

	const handleAddItemToCart = () => {
		addItemToCart();

		dispatch(
			addItem({
				mealName: strMeal,
				mealImage: strMealThumb,
			})
		);
	};

	const handleRemoveItemFromCart = () => {
		removeItemFromCart();
		dispatch(removeItem(strMeal));
	};

	return (
		<div className='flex justify-between mb-3'>
			<div className='w-10/12 flex'>
				<img src={strMealThumb} alt={strMeal} className='w-20 mr-3' />
				<div>
					<h2 className='text-xl font-normal'>{strMeal}</h2>
					<h3 className=' text-gray-600'>$300</h3>
				</div>
			</div>

			<span
				onClick={
					removeFromCart ? handleRemoveItemFromCart : handleAddItemToCart
				}
				className={` text-white cursor-pointer 
				${
					removeFromCart
						? 'border border-white text-2xl rounded-full pb-1 pt-0 pl-3 pr-3 hover:bg-yellow-500 hover:border-yellow-500'
						: 'bg-yellow-500 text-4xl rounded-full  pb-1 pl-2 pr-2 hover:bg-green-500 '
				}
				 flex self-center justify-center`}>
				{removeFromCart ? 'x' : '+'}
			</span>
		</div>
	);
}

export default MenuItem;
