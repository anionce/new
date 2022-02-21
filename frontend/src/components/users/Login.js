import React, { useState } from 'react';
import './Login.scss';

export default function Login() {
	const [input, setInput] = useState('');

	const handleInputChange = e => {
		setInput(e.target.value);
	};

	return (
		<div class='login'>
			<div class='form'>
				<form class='login__form'>
					<input
						type='email'
						placeholder='email'
						className='email__input'
						name='email__input'
						value={input}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						placeholder='password'
						name='password__input'
						className='password__input'
						value={input}
						onChange={handleInputChange}
					/>
					<button>login</button>
					<p class='input__message'>
						Not registered? <a href='#'>Create an account</a>
					</p>
				</form>
			</div>
		</div>
	);
}
