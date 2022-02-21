import MovieCard from './MovieCard';
import './MoviesGrid.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

export default function MoviesGrid() {
	const sort = <FontAwesomeIcon icon={faArrowDownAZ} />;

	return (
		<div className='grid'>
			<div className='grid__header'>
				<h2 className='grid__header__title'>All Movies</h2>
				<h4>
					Sort <span className='grid__header__sort'> {sort}</span>
				</h4>
			</div>
			<ul className='grid__movies'>
				<MovieCard></MovieCard>
			</ul>
		</div>
	);
}
