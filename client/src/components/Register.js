import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {
	const history = useHistory();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registerFormHanlder = async (e) => {
		e.preventDefault();

		if ((!firstName, !lastName, !phone, address, !email, !password)) return;

		const response = await axios.post(
			'http://localhost:5000/api/v1/users/register',
			{
				first_name: firstName,
				last_name: lastName,
				email: email,
				telephone: phone,
				address: address,
				password: password,
			}
		);

		setFormValues(
			setFirstName,
			setLastName,
			setPhone,
			setAddress,
			setEmail,
			setPassword
		);

		if (response.status === 201) {
			history.push('/');
		}
	};

	const goToLoginHandler = (e) => {
		e.preventDefault();

		history.push('/');
	};

	return (
		<div className='flex flex-col h-screen  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
			<h1 className='text-white font-semibold text-4xl text-center leading-8 cursor-pointer m-7'>
				Delphy Restó
			</h1>
			<div className='w-full max-w-xs m-auto bg-indigo-100 rounded p-5'>
				<div>
					<img
						className='w-20 mx-auto mb-5'
						src='https://img.icons8.com/fluent/344/year-of-tiger.png'
						alt='logo'
					/>
				</div>

				<form onSubmit={registerFormHanlder}>
					{/* 1 */}

					<div>
						<label className='block mb-2 text-indigo-500' htmlFor='firstName'>
							First name
						</label>
						<input
							className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					{/* 2 */}

					<div>
						<label className='block mb-2 text-indigo-500' htmlFor='lastName'>
							Last name
						</label>
						<input
							className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					{/* 3 */}

					<div>
						<label className='block mb-2 text-indigo-500' htmlFor='telephone'>
							Telephone
						</label>
						<input
							className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
							type='tel'
							name='Telephone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>

					{/* 4 */}

					<div>
						<label className='block mb-2 text-indigo-500' htmlFor='address'>
							Address
						</label>
						<input
							className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
							type='text'
							name='Address'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>

					{/* 5 */}

					<div>
						<label className='block mb-2 text-indigo-500' htmlFor='email'>
							Email
						</label>
						<input
							className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
							type='email'
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					{/* 6 */}

					<div>
						<label className='block mb-2 text-indigo-500' htmlFor='password'>
							Password
						</label>
						<input
							className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
							type='password'
							name='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					{/* submit */}

					<div>
						<input
							className='w-full cursor-pointer bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded'
							type='submit'
						/>
					</div>
				</form>

				<footer>
					<p className='text-indigo-700 text-sm float-left'>Have an account?</p>
					<a
						className='text-indigo-700 hover:text-pink-700 hover:underline text-sm float-right'
						href='/'
						onClick={goToLoginHandler}>
						Go to Login
					</a>
				</footer>
			</div>
		</div>
	);
}

const setFormValues = (name, lastname, tel, addr, mail, pass) => {
	name('');
	lastname('');
	tel('');
	addr('');
	mail('');
	pass('');
	return;
};

export default Register;
