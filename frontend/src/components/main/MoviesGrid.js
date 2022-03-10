import MovieCard from './MovieCard';
import './MoviesGrid.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../ThemeContext';
import { useLocation } from 'react-router-dom';

export default function MoviesGrid({ movies, addToFavoriteMovies, isLoading, handleSortClick }) {
	// Hooks
	const location = useLocation();

	// Theme
	const theme = useTheme();
	const style = {
		color: theme === 'white' ? 'black' : 'white',
	};

	// Icon
	const sort = <FontAwesomeIcon icon={faArrowDownAZ} />;

	return (
		<div className='grid'>
			<div className='grid__header'>
				<h2 style={style} className='grid__header__title'>
					{location.pathname === '/favorites' ? 'My Favorites' : 'All Movies'}
				</h2>
				<h4
					onClick={handleSortClick}
					style={style}
					className={
						location.pathname === '/favorites' ? 'hidden' : 'grid__header__sort '
					}>
					Sort
					<span> {sort}</span>
				</h4>
			</div>
			{movies && (
				<ul className={isLoading ? 'loader' : 'grid__movies'}>
					{isLoading && <i>📼</i>}
					{movies.map(movie => (
						<MovieCard
							key={movie.title}
							addToFavoriteMovies={addToFavoriteMovies}
							movie={movie}></MovieCard>
					))}
				</ul>
			)}
		</div>
	);
}
