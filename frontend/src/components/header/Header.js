import Brand from './Brand';
import Navigation from './Navigation';
import './Header.scss';

export default function Header() {
	return (
		<div className='header'>
			<Brand></Brand>
			<Navigation></Navigation>
		</div>
	);
}
