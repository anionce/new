import './Brand.scss';
import '../../App.scss';

import logo from '../../assets/logo.png';

export default function Title() {
	return (
		<div className='brand'>
			<img className='brand__logo' src={logo} alt='logo'></img>
			<h1 className='brand__title'>Popcorn</h1>
		</div>
	);
}
