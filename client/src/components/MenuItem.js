import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	addItem,
	removeItem,
	addMealCountByOne,
	removeMealCountByOne,
} from './../redux/features/cartItemsSlice.js';

import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';

function MenuItem({
	strMeal,
	strMealThumb,
	removeFromCart,
	cartItem,
	mealPrice,
}) {
	let [mealCount, setMealCount] = useState(1);

	const dispatch = useDispatch();

	const handleAddItemToCart = () => {
		dispatch(
			addItem({
				mealName: strMeal,
				mealImage: strMealThumb,
				mealPrice: mealPrice,
				mealCount: mealCount,
			})
		);
	};

	const handleRemoveItemFromCart = () => {
		dispatch(removeItem(strMeal));
	};

	const handleAddMealCount = () => {
		setMealCount(mealCount + 1);
		dispatch(
			addMealCountByOne({
				mealName: strMeal,
				mealCount: mealCount,
			})
		);
	};

	const handleSubtractMealItemCount = () => {
		if (mealCount === 1) return;
		setMealCount(mealCount - 1);
		dispatch(
			removeMealCountByOne({
				mealName: strMeal,
				mealCount: mealCount,
			})
		);
	};

	return (
		<div className='flex justify-between mb-3 relative'>
			<div className='w-10/12 flex'>
				<img src={strMealThumb} alt={strMeal} className='w-20 mr-3' />
				<div>
					<h2 className={`text-xl font-normal ${cartItem && 'text-gray-50'} `}>
						{strMeal}
					</h2>
					<h3 className={`${cartItem && 'text-gray-50'} `}>${mealPrice}</h3>
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

			{cartItem && (
				<div className='absolute flex right-16 top-1/2 items-center justify-between'>
					<PlusCircleIcon
						className=' text-base w-5 mr-2 cursor-pointer gr'
						onClick={handleAddMealCount}
					/>
					<input value={mealCount} disabled className='w-20 h-6 border pl-2' />
					<MinusCircleIcon
						className=' text-base w-5 ml-2 cursor-pointer'
						onClick={handleSubtractMealItemCount}
					/>
				</div>
			)}
		</div>
	);
}

export default MenuItem;
