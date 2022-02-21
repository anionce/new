import './Navigation.scss';
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
			<li className='nav__item'>
				<span className='nav__item__icon'>{signup}</span>Register
			</li>
			<li className='nav__item'>
				<span className='nav__item__icon'>{signin}</span>Login
			</li>
			<li className='nav__item'>
				<span className='nav__item__icon'>{heart}</span>Favorites
			</li>
		</ul>
	);
}
