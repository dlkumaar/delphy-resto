import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectItem } from '../redux/features/cartItemsSlice';
import OrderPreview from './OrderPreview';

function Cart({ cartItemCount, removeItemFromCart }) {
	const [cartItems, setCartItems] = useState([]);

	const cart = useSelector(selectItem);

	useEffect(() => {
		setCartItems(cart);
		return setCartItems(cart);
	}, [cart]);

	return (
		<div className='bg-gray-600 p-4 flex flex-col'>
			{cartItemCount > 0 && (
				<h1 className='pb-4 text-lg text-gray-50 font-bold'>
					Your order Preview
				</h1>
			)}

			<OrderPreview
				cartItemCount={cartItemCount}
				cartItems={cartItems}
				removeItemFromCart={removeItemFromCart}
			/>

			{cartItemCount > 0 && (
				<button className='mt-8 w-52 font-semibold self-center border bg-white cursor-pointer px-5 py-1.5 hover:bg-green-500 hover:text-white hover:border-transparent rounded-sm transition-all duration-200'>
					Place order
				</button>
			)}
		</div>
	);
}

export default Cart;
