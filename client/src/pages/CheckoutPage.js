import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import { selectItem } from '../redux/features/cartItemsSlice';
import calculateTotalPrice from './../utils/calculateTotalPrice';

import Header from '../components/Header';
import CartItems from '../components/CartItems';
import PaymentMode from '../components/PaymentMode';
import UserAddress from '../components/UserAddress';

import { ArrowLeftIcon } from '@heroicons/react/solid';

function Checkout() {
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(1);
	const [paymentMode, setPaymentMode] = useState('Cash');

	const cart = useSelector(selectItem);

	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		setCartItems(cart);
		setTotalPrice(calculateTotalPrice(cart));

		return setCartItems(cart);
	}, [cart]);

	return (
		<div className=' min-h-screen '>
			<Header checkout />

			<div className='flex justify-end cursor-pointer px-4'>
				<button className='right-4 cursor-pointer' onClick={history.goBack}>
					<div className=' dark:bg-gray-800 bg-white flex  hover:shadow-xl rounded border-b-4 border-red-500 shadow-md'>
						<h3 className='text-lg  font-semibold inline-flex items-center cursor-pointer'>
							<ArrowLeftIcon className='w-10 h-5' />
							Prev
						</h3>
					</div>
				</button>
			</div>

			<div className='p-4 relative max-w-full overflow-hidden'>
				<h2 className='mb-4 text-lg font-bold'>Preview your order</h2>
				<div>
					{cartItems.length &&
						cartItems.map(({ mealName, mealImage, mealPrice, mealCount }) => (
							<CartItems
								key={mealName}
								strMealThumb={mealImage}
								strMeal={mealName}
								mealPrice={mealPrice}
								mealCount={mealCount}
							/>
						))}
				</div>

				<div className='text-2xl relative h-16'>
					<div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
						Total Price: <span className='font-bold'>$ {totalPrice}</span>
					</div>
				</div>

				<div>
					<PaymentMode
						paymentMode={paymentMode}
						setPaymentMode={setPaymentMode}
					/>

					<UserAddress />

					<div className='flex flex-col'>
						<div className='mt-16 flex justify-center'>
							<button
								onClick={() =>
									history.push({
										pathname: '/payment',
										state: { from: location.pathname },
									})
								}
								className='flex bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6'>
								Payment
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='inline ml-2 w-6 stroke-current text-white stroke-2'
									viewBox='0 0 24 24'
									fill='none'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<line x1='5' y1='12' x2='19' y2='12' />
									<polyline points='12 5 19 12 12 19' />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
