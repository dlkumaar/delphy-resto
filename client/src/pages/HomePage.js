import React, { useState } from 'react';
import Cart from '../components/Cart';
import Favorites from '../components/Favorites';
import Header from '../components/Header';
import Menu from '../components/Menu';

function HomePage() {
	const [cartItemCount, setCartItemCount] = useState(0);
	const [showCart, setShowCart] = useState(false);

	const addItemToCart = () => {
		setCartItemCount(cartItemCount + 1);
		return cartItemCount;
	};

	const removeItemFromCart = () => {
		if (cartItemCount > 0) setCartItemCount(cartItemCount - 1);
		return cartItemCount;
	};

	return (
		<>
			<Header
				cartItemCount={cartItemCount}
				showCart={showCart}
				setShowCart={setShowCart}
			/>

			{showCart && (
				<Cart
					cartItemCount={cartItemCount}
					removeItemFromCart={removeItemFromCart}
				/>
			)}

			<Favorites addItemToCart={addItemToCart} />
			<Menu addItemToCart={addItemToCart} />
		</>
	);
}

export default HomePage;
