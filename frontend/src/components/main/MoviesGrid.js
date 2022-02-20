import MovieCard from './MovieCard';
import './MoviesGrid.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

export default function MoviesGrid() {
	const sort = <FontAwesomeIcon icon={faArrowDownAZ} />;

	return (
		<div className='grid-container'>
			<div className='grid-container-header'>
				<h2>All Movies</h2>
				<h4>
					Sort <span className='sort-icon'> {sort}</span>
				</h4>
			</div>
			<ul className='grid-movies'>
				<MovieCard></MovieCard>
			</ul>
		</div>
	);
}
