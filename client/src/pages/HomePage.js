import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';
import Favorites from '../components/Favorites';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { selectItem } from '../redux/features/cartItemsSlice';

function HomePage() {
	const cart = useSelector(selectItem);

	const [showCart, setShowCart] = useState(false);

	return (
		<>
			<Header
				cartItemCount={cart.length}
				showCart={showCart}
				setShowCart={setShowCart}
			/>

			{showCart && <Cart cartItemCount={cart.length} />}

			<Favorites />
			<Menu />
		</>
	);
}

export default HomePage;
