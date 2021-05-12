import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectItem } from '../redux/features/cartItemsSlice';
import OrderPreview from './OrderPreview';

function Cart({ cartItemCount, removeItemFromCart }) {
	const [cartItems, setCartItems] = useState([]);
	const [paymentMode, setPaymentMode] = useState('Cash');

	const cart = useSelector(selectItem);

	useEffect(() => {
		setCartItems(cart);
		return setCartItems(cart);
	}, [cart]);

	const handlePaymentMode = (e) => {
		setPaymentMode(e.target.value);
	};

	const history = useHistory();

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
				<div className='w-full flex flex-col items-center '>
					<div className='self-start my-6 text-gray-50 text-lg font-medium'>
						Total:
						<span className='text-xl'> $ 300</span>
					</div>

					<h3 className='self-start mb-2 text-gray-50 font-medium text-lg'>
						Payment
					</h3>

					<select
						name='paymentMode'
						id='paymentMode'
						value={paymentMode}
						onChange={handlePaymentMode}
						className='w-40 border border-gray-400 rounded mb-8 p-2 self-start'>
						<option value='Cash'>Cash on delivery</option>
						<option value='Debit card'>Debit card</option>
						<option value='Credit card'>Credit card</option>
						<option value='Crypto'>Crypto</option>
					</select>

					<h3 className='self-start mb-2 text-gray-50  font-medium text-lg'>
						Address
					</h3>
					<p className='self-start text-gray-50 '>
						1 Logan PIKensington, London W8 6 DE, UK
					</p>

					<button
						onClick={() => history.push('/checkout')}
						className='mt-8 w-52 font-semibold self-center border bg-white cursor-pointer px-5 py-3 hover:bg-green-500 hover:text-white hover:border-transparent rounded-3xl transition-all duration-200'>
						Place order
					</button>
				</div>
			)}
		</div>
	);
}

export default Cart;
