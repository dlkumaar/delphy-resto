import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from './../redux/features/cartItemsSlice.js';

function CartItems({ strMealThumb, strMeal }) {
	const dispatch = useDispatch();

	const handleRemoveItemFromCart = () => {
		dispatch(removeItem(strMeal));
	};

	return (
		<div className='flex justify-between mb-3'>
			<div className='w-10/12 flex'>
				<img src={strMealThumb} alt={strMeal} className='w-12 mr-3' />
				<div>
					<h2 className=' font-medium'>{strMeal}</h2>
					<h3 className=''>$300</h3>
				</div>
			</div>

			<span
				onClick={handleRemoveItemFromCart}
				className={` text-white cursor-pointer
   bg-yellow-500 text-2xl rounded-full  pb-2 pl-4 pr-4 hover:bg-green-500 
       flex self-center justify-center`}>
				x
			</span>
		</div>
	);
}

export default CartItems;
