import React from 'react';
import { useHistory } from 'react-router';

import Header from '../components/Header';
import PaymentForm from '../components/PaymentForm';

import { ArrowLeftIcon } from '@heroicons/react/outline';

function PaymentPage() {
	const history = useHistory();

	return (
		<div className='bg-gray-200'>
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
			<PaymentForm />
		</div>
	);
}

export default PaymentPage;
