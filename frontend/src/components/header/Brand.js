import './Brand.scss';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import '../../App.scss';

import logo from '../../assets/logo.png';

export default function Title() {
	return (
		<div>
			<NavLink className='brand' activeClassName='active' to='/'>
				<img className='brand__logo' src={logo} alt='logo'></img>
				<h1 className='brand__title'>Popcorn</h1>
			</NavLink>
		</div>
	);
}
