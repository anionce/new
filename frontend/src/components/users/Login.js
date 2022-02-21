import React, { useState } from 'react';
import './form.scss';

export default function Login() {
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');

	const handleInputChange = e => {
		if (e.target.name === 'email__input') {
			setInputEmail(e.target.value);
		} else {
			setInputPassword(e.target.value);
		}
	};

	return (
		<div class='container'>
			<div class='container__form'>
				<form class='form'>
					<input
						type='email'
						placeholder='email'
						className='form__input'
						name='email__input'
						value={inputEmail}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						placeholder='password'
						name='password__input'
						className='password__input'
						value={inputPassword}
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
