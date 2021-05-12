import React from 'react';
import MenuItem from './MenuItem';

function OrderPreview({
	cartItemCount,
	cartItems,
	removeItemFromCart,
	checkoutPageItem,
}) {
	return (
		<div>
			{cartItemCount > 0 ? (
				cartItems.map(({ mealName, mealImage }) => (
					<MenuItem
						key={mealName}
						strMeal={mealName}
						strMealThumb={mealImage}
						removeFromCart
						removeItemFromCart={removeItemFromCart}
						checkoutPageItem={checkoutPageItem}
						cartItem
					/>
				))
			) : (
				<div className='flex flex-col w-full items-center py-12 italic text-lg text-yellow-500'>
					<aside className=' text-4xl'>🍽</aside>
					<h3>Add your favorite meals to order.</h3>
				</div>
			)}
		</div>
	);
}

export default OrderPreview;
