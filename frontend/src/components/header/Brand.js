import './Brand.scss';
import { NavLink } from 'react-router-dom';
import '../../App.scss';
import { useTheme } from '../../ThemeContext';

import logo from '../../assets/logo.png';

export default function Brand() {
	const theme = useTheme();

	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};

	return (
		<div>
			<NavLink className='brand' activeClassName='active' to='/'>
				<img className='brand__logo' src={logo} alt='logo'></img>
				<h1 style={style} className='brand__title'>
					Popcorn
				</h1>
			</NavLink>
		</div>
	);
}
