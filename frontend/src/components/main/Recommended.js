import './Recommended.scss';
import soho from '../../assets/soho.jpg';
import { useTheme } from '../../ThemeContext';

export default function Recommended() {
	// Theme
	const theme = useTheme();
	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};

	return (
		<div style={style} className='recommended'>
			<h2 className='recommended__title'>Recommended to you</h2>

			<a href='/'>
				<img className='recommended__img' src={soho} alt='recommended movie'></img>
			</a>
		</div>
	);
}

