import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './../redux/features/userAuthSlice';

function Login() {
	const history = useHistory();

	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginFormHanlder = async (e) => {
		e.preventDefault();

		if ((!email, !password)) return;

		const response = await axios.post(
			'http://localhost:5000/api/v1/users/login',
			{
				email,
				password,
			}
		);
		console.log(response);
		if (response.status === 200) {
			dispatch(login());
		}

		// console.log(response);
	};

	const createAccountClickHandler = (e) => {
		e.preventDefault();
		history.push('/register');
	};

	return (
		<div className='flex h-screen flex-col  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
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

				<form onSubmit={loginFormHanlder}>
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
					<div>
						<input
							className='w-full cursor-pointer bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded'
							type='submit'
						/>
					</div>
				</form>

				<footer>
					<button className='text-indigo-700 hover:text-pink-700 text-sm float-left'>
						Forgot Password?
					</button>
					<a
						className='text-indigo-700 hover:text-pink-700 hover:underline text-sm float-right'
						href='/'
						onClick={createAccountClickHandler}>
						Create Account
					</a>
				</footer>
			</div>
		</div>
	);
}

export default Login;
