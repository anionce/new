import MovieCard from './MovieCard';
import './MoviesGrid.css';

export default function MoviesGrid() {
	return (
		<>
			<h2>Most Popular</h2>
			<ul className='MoviesGrid'>
				<MovieCard></MovieCard>
			</ul>
		</>
	);
}
