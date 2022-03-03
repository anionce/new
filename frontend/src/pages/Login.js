import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuthentication } from '../AuthenticationContext';
import { useTheme } from '../ThemeContext';
import './form.scss';

export default function Login() {
	// State
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Hooks
	const { login } = useAuthentication();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	// Input Handlers
	const handleEmailChange = event => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = event => {
		setPassword(event.target.value);
	};

	// Click Handler
	const handleLoginClick = () => {
		if (email && password) {
			login(email);
			navigate(from, { replace: true });
		}
	};

	// Theme
	const theme = useTheme();
	const style = {
		backgroundColor: theme,
	};

	return (
		<div style={style} class='container'>
			<div class='container__form'>
				<form class='form'>
					<input
						type='email'
						placeholder='email'
						className='email__input'
						name='email__input'
						value={email}
						onChange={handleEmailChange}
					/>
					<input
						type='password'
						placeholder='password'
						name='password__input'
						className='password__input'
						value={password}
						onChange={handlePasswordChange}
					/>

					<button onClick={handleLoginClick}>login</button>
					<p class='input__message'>
						Not registered?
						<Link to='/register'> Register</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
