import './Recommended.scss';
import soho from '../../assets/soho.jpg';
import licorice from '../../assets/licorice.jpg';
import scream from '../../assets/scream5.jpg';

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
			<div className='recommended__div'>
				<img className='recommended__img' src={soho} alt='recommended movie'></img>
				<img className='recommended__img' src={licorice} alt='recommended movie'></img>
				<img className='recommended__img' src={scream} alt='recommended movie'></img>
			</div>
		</div>
	);
}
