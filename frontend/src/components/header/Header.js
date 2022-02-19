import Brand from './Brand';
import Navigation from './Navigation';
import './Header.scss';

export default function Header() {
	return (
		<div className='Header'>
			<Brand></Brand>
			<Navigation></Navigation>
		</div>
	);
}
