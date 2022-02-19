import MovieCard from './MovieCard';
import './MoviesGrid.scss';

export default function MoviesGrid() {
	return (
		<div className='grid-container'>
			<h2>Most Popular</h2>
			<ul className='MoviesGrid'>
				<MovieCard></MovieCard>
			</ul>
		</div>
	);
}
