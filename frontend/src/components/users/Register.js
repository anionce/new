import React, { useState } from 'react';
import './Register.scss';

export default function Register() {
	const [input, setInput] = useState('');

	const handleInputChange = e => {
		setInput(e.target.value);
	};

	return (
		<div class='register'>
			<div class='form'>
				<form class='register-form'>
					<input
						name='name__input'
						type='text'
						placeholder='name'
						className='name__input'
						value={input}
						onChange={handleInputChange}
					/>
					<input
						type='email'
						name='name__input'
						placeholder='email address'
						className='email__input'
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
					<input
						type='password'
						placeholder='confirm password'
						name='password__input2'
						className='password__input'
						value={input}
						onChange={handleInputChange}
					/>

					<button>create</button>
					<p class='input__message'>
						Already registered? <a href='#'>Login</a>
					</p>
				</form>
			</div>
		</div>
	);
}
