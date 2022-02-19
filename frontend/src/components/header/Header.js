import Title from './Title';
import Navigation from './Navigation';
import './Header.css';

export default function Header() {
	return (
		<div className='Header'>
			<Title></Title>
			<Navigation></Navigation>
		</div>
	);
}
