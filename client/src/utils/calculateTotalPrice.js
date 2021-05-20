const calculateTotalPrice = (array) => {
	let totalPrice = 0;

	if (!array.length) return;

	array.map((item) => (totalPrice += item.mealPrice * item.mealCount));

	return totalPrice;
};

export default calculateTotalPrice;
