import React, { useState } from 'react';
import { ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { logout, user } from '../redux/features/userAuthSlice';

function Header({ cartItemCount, showCart, setShowCart }) {
	const dispatch = useDispatch();
	const userState = useSelector(user);
	const [loggedInState] = useState(userState.isLoggedIn);

	return (
		<div className=' relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-12 flex flex-col justify-center'>
			<button
				onClick={() => dispatch(logout())}
				className='left-4 absolute cursor-pointer border rounded px-5 py-1 hover:bg-white'>
				{loggedInState ? 'Sign out' : ''}
			</button>

			<h1 className='text-white font-semibold text-2xl text-center leading-8 cursor-pointer'>
				Delphy Restó
			</h1>

			{!showCart ? (
				<>
					<ShoppingBagIcon
						onClick={() => setShowCart(true)}
						className='w-5 h-5 right-4 absolute cursor-pointer'
					/>
					<small className='text-white absolute right-3 bottom-5 font-bold text-base'>
						{cartItemCount}
					</small>
				</>
			) : (
				<>
					<XIcon
						onClick={() => setShowCart(false)}
						className='w-5 h-5 right-4 absolute cursor-pointer text-white'
					/>
				</>
			)}
		</div>
	);
}

export default Header;
