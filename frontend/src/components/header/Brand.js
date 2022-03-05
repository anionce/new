import './Brand.scss';
import { NavLink } from 'react-router-dom';
import '../../App.scss';
import { useTheme } from '../../ThemeContext';
import { useAuthentication } from '../../AuthenticationContext';

import logo from '../../assets/logo.png';

export default function Brand() {
	const theme = useTheme();

	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};

	// Authentication
	const { authData } = useAuthentication();

	return (
		<div>
			<NavLink className='brand' activeClassName='active' to='/'>
				<img className='brand__logo' src={logo} alt='logo'></img>
				<h1 style={style} className='brand__title'>
					Popcorn
				</h1>
				{/* {authData && <h2 className='greetings'>{`Hello, ${authData.data.name}!`}</h2>}*/}
			</NavLink>
		</div>
	);
}
