import './Title.scss';
import { useTheme } from '../../ThemeContext';

export default function Title({ title }) {
	const theme = useTheme();

	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};

	return (
		<span style={style} className='movie-title'>
			{title}
		</span>
	);
}
