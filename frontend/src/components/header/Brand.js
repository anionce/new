import './Brand.scss';
import '../../App.scss';

import logo from '../../assets/logo.png';

export default function Title() {
	return (
		<div className='brand'>
			<img className='brand-logo' src={logo} alt='logo'></img>
			<h1 className='brand-title'>Popcorn</h1>
		</div>
	);
}
