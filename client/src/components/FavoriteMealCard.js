import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/features/cartItemsSlice';

function FavoriteMealCard({ strMeal, strMealThumb, addItemToCart }) {
	const dispatch = useDispatch();

	const handleClick = () => {
		addItemToCart();

		dispatch(
			addItem({
				mealName: strMeal,
				mealImage: strMealThumb,
			})
		);
	};

	return (
		<div className='flex flex-col transform hover: transition duration-300 hover:-translate-y-1'>
			<div className='cursor-pointer w-72 bg-primary flex-shrink-0 flex-grow mr-4 relative '>
				<img src={strMealThumb} alt='' className='w-full h-44 rounded' />

				<div className='bg-imaginary h-full absolute bottom-0 flex w-full items-end'>
					<h1 className='text-white text-2xl font-medium pl-4 pb-4 '>
						{strMeal}
					</h1>
				</div>
			</div>
			<div className='text-base border border-gray-300 w-72 p-2 pl-3 pr-3 flex justify-between rounded'>
				<h3>$300</h3>
				<button
					onClick={handleClick}
					className='text-base text-yellow-500 font-medium cursor-pointer'>
					Add+
				</button>
			</div>
		</div>
	);
}

export default FavoriteMealCard;
