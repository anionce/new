import movies from '../../movies.json';
import Poster from './Poster';
import Title from './Title';
import Rating from './Rating';
import Genre from './Genre';
import './MovieCard.scss';
import { useLocation } from 'react-router-dom';

export default function MovieCard() {
	// Location
	const location = useLocation();

	return movies.map(function (movie) {
		return (
			<li className='moviecard' key={movie.title}>
				<Poster url={movie.poster} title={movie.title}></Poster>
				<Title title={movie.title}></Title>
				<Genre genre={movie.category}></Genre>
				<Rating rating={movie.rating}></Rating>
			</li>
		);
	});
}
