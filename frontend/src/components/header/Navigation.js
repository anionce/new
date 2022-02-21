import './Navigation.scss';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
	const signup = <FontAwesomeIcon className='signup' icon={faUserPlus} />;
	const signin = <FontAwesomeIcon className='signin' icon={faRightToBracket} />;
	const heart = <FontAwesomeIcon className='signin' icon={faHeart} />;

	return (
		<ul className='nav'>
			<li>
				<NavLink className='nav__item' activeClassName='active' to='/register'>
					<span className='nav__item__icon'>{signup}</span>
					<span>Register</span>
				</NavLink>
			</li>
			<li>
				<NavLink className='nav__item' activeClassName='active' to='/login'>
					<span className='nav__item__icon'>{signin}</span>
					<span>Login</span>
				</NavLink>
			</li>
			<li>
				<NavLink className='nav__item' activeClassName='active' to='/favorites'>
					<span className='nav__item__icon'>{heart}</span>
					<span>Favorites</span>
				</NavLink>
			</li>
		</ul>
	);
}
