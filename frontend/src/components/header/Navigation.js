import './Navigation.scss';
import { useAuthentication } from '../../AuthenticationContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../ThemeContext';

export default function Navigation() {
	// Icons
	const signup = <FontAwesomeIcon className='signup' icon={faUserPlus} />;
	const signin = <FontAwesomeIcon className='signin' icon={faRightToBracket} />;
	const heart = <FontAwesomeIcon className='signin' icon={faHeart} />;

	// Authentication
	const { authData } = useAuthentication();

	// Theme
	const theme = useTheme();
	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};
	const styleEmoji = {
		color: theme === 'white' ? 'black' : '#f8888a',
	};

	return (
		<ul className='nav'>
			<li>
				<NavLink className='nav__item' to='/register'>
					<span style={styleEmoji} className='nav__item__icon'>
						{signup}
					</span>
					<span style={style}>Register</span>
				</NavLink>
			</li>
			<li>
				<NavLink className='nav__item' to='/login'>
					<span style={styleEmoji} className='nav__item__icon'>
						{signin}
					</span>
					<span style={style}>Login</span>
				</NavLink>
			</li>
			{authData.username && (
				<li>
					<NavLink className='nav__item' to='/favorites'>
						<span style={styleEmoji} className='nav__item__icon'>
							{heart}
						</span>
						<span style={style}>Favorites</span>
					</NavLink>
				</li>
			)}
		</ul>
	);
}
