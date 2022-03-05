import './Genre.scss';
import { useTheme } from '../../ThemeContext';

export default function Genre({ genre }) {
	// Theme
	const theme = useTheme();
	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};

	return (
		<span style={style} className='genre'>
			{genre}
		</span>
	);
}
