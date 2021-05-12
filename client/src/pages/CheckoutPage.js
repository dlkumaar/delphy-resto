import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectItem } from '../redux/features/cartItemsSlice';

import Header from '../components/Header';
// import OrderPreview from '../components/OrderPreview';
import CartItems from '../components/CartItems';

function Checkout() {
	const [cartItems, setCartItems] = useState([]);

	const cart = useSelector(selectItem);

	useEffect(() => {
		setCartItems(cart);
		return setCartItems(cart);
	}, [cart]);

	return (
		<>
			<Header />
			<div className='p-4'>
				{cartItems.length > 0 ? (
					cartItems.map(({ mealName, mealImage }) => (
						<CartItems
							key={mealName}
							strMealThumb={mealImage}
							strMeal={mealName}
						/>
					))
				) : (
					<div>Add Items to bag before checkout</div>
				)}
			</div>
		</>
	);
}

export default Checkout;
