import './Navigation.scss';
import { useAuthentication } from '../../AuthenticationContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
	// Icons
	const signup = <FontAwesomeIcon className='signup' icon={faUserPlus} />;
	const signin = <FontAwesomeIcon className='signin' icon={faRightToBracket} />;
	const logoutI = <FontAwesomeIcon className='signin' icon={faArrowRightFromBracket} />;
	const heart = <FontAwesomeIcon className='signin' icon={faHeart} />;

	// Hooks
	const { authData, logout } = useAuthentication();
	const navigate = useNavigate();

	// Theme
	const theme = useTheme();
	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};
	const styleEmoji = {
		color: theme === 'white' ? 'black' : '#f8888a',
	};

	// Handlers

	function handleLogoutClick() {
		logout();
		navigate('/', { replace: true });
	}

	return (
		<ul className='nav'>
			{!authData && (
				<li>
					<NavLink className='nav__item' to='/register'>
						<span style={styleEmoji} className='nav__item__icon'>
							{signup}
						</span>
						<span style={style}>Register</span>
					</NavLink>
				</li>
			)}
			{!authData && (
				<li>
					<NavLink className='nav__item' to='/login'>
						<span style={styleEmoji} className='nav__item__icon'>
							{signin}
						</span>
						<span style={style}>Login</span>
					</NavLink>
				</li>
			)}
			{authData && (
				<li>
					<NavLink className='nav__item' to='/favorites'>
						<span style={styleEmoji} className='nav__item__icon'>
							{heart}
						</span>
						<span style={style}>Favorites</span>
					</NavLink>
				</li>
			)}
			{authData && (
				<li>
					<span onClick={handleLogoutClick} className='nav__item'>
						<span style={styleEmoji} className='nav__item__icon'>
							{logoutI}
						</span>
						<span style={style}>Logout</span>
					</span>
				</li>
			)}
		</ul>
	);
}
