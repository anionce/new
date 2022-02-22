import MovieCard from './MovieCard';
import './MoviesGrid.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

export default function MoviesGrid({ favorites }) {
	const sort = <FontAwesomeIcon icon={faArrowDownAZ} />;

	return (
		<div className='grid'>
			<div className='grid__header'>
				<h2 className='grid__header__title'>{favorites ? 'My Favorites' : 'All Movies'}</h2>
				<h4 className={favorites ? 'hidden' : 'grid__header__sort '}>
					Sort
					<span> {sort}</span>
				</h4>
			</div>
			<ul className='grid__movies'>
				<MovieCard></MovieCard>
			</ul>
		</div>
	);
}
