import MovieCard from './MovieCard';
import './MoviesGrid.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../ThemeContext';
import { useLocation } from 'react-router-dom';

export default function MoviesGrid({ favorites, movies }) {
	// Location
	const location = useLocation();

	// Icon
	const sort = <FontAwesomeIcon icon={faArrowDownAZ} />;

	// Theme
	const theme = useTheme();
	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};
	return (
		<div className='grid'>
			<div className='grid__header'>
				<h2 style={style} className='grid__header__title'>
					{location.pathname === '/favorites' ? 'My Favorites' : 'All Movies'}
				</h2>
				<h4
					style={style}
					className={
						location.pathname === '/favorites' ? 'hidden' : 'grid__header__sort '
					}>
					Sort
					<span> {sort}</span>
				</h4>
			</div>
			<ul className='grid__movies'>
				<MovieCard  movies={movies}></MovieCard>
			</ul>
		</div>
	);
}
