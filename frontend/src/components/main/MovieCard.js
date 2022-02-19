import movies from '../../movies.json';
import Poster from './Poster';
import Title from './Title';
import Rating from './Rating';
import Genre from './Genre';
import './MovieCard.css';

export default function MovieCard() {
	return movies.map(function (movie) {
		return (
			<li className='MovieCard' key={movie.title}>
				<Poster url={movie.poster}></Poster>
				<Title title={movie.title}></Title>
				<Genre genre={movie.category}></Genre>
				<Rating rating={movie.rating}></Rating>
			</li>
		);
	});
}
