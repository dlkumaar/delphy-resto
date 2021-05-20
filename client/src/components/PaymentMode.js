import React from 'react';

function PaymentMode({ paymentMode, setPaymentMode }) {
	const handlePaymentMode = (e) => {
		setPaymentMode(e.target.value);
	};

	return (
		<div>
			<h3 className='self-start mb-2 font-medium text-lg'>Payment</h3>
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
		</div>
	);
}

export default PaymentMode;
