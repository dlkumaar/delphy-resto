import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import calculateTotalPrice from './../utils/calculateTotalPrice';
import { selectItem } from '../redux/features/cartItemsSlice';

import OrderPreview from './OrderPreview';

function Cart({ cartItemCount }) {
	const [cartItems, setCartItems] = useState([]);

	const [totalPrice, setTotalPrice] = useState(1);

	const cart = useSelector(selectItem);

	useEffect(() => {
		setCartItems(cart);
		setTotalPrice(calculateTotalPrice(cart));

		return setCartItems(cart);
	}, [cart, totalPrice]);

	const history = useHistory();
	const location = useLocation();

	return (
		<div className='bg-gray-600 p-4 flex flex-col'>
			{cartItemCount > 0 && (
				<h1 className='pb-4 text-lg text-gray-50 font-bold'>
					Your order Preview
				</h1>
			)}

			<OrderPreview cartItemCount={cartItemCount} cartItems={cartItems} />

			{cartItemCount > 0 && (
				<div className='w-full flex flex-col items-center '>
					<div className='self-start my-6 text-gray-50 text-lg font-medium'>
						Total:
						<span className='text-xl'> $ {totalPrice}</span>
					</div>

					<button
						onClick={() =>
							history.push({
								pathname: '/checkout',
								state: { from: location.pathname },
							})
						}
						className='mt-8 w-52 font-semibold self-center border bg-white cursor-pointer px-5 py-3 hover:bg-green-500 hover:text-white hover:border-transparent rounded-3xl transition-all duration-200'>
						Place order
					</button>
				</div>
			)}
		</div>
	);
}

export default Cart;
