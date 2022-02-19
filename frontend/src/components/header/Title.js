import './Title.scss';
import logo from '../../assets/logo.png';

export default function Title() {
	return (
		<div className='title'>
			<img className='logo' src={logo} alt='logo'></img>
			<h1>Popcorn</h1>
		</div>
	);
}
