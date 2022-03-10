import Poster from './Poster';
import Title from './Title';
import Rating from './Rating';
import Genre from './Genre';
import './MovieCard.scss';
import { useLocation } from 'react-router-dom';

export default function MovieCard({ addToFavoriteMovies, movie }) {
	// Hooks
	const location = useLocation();

	return (
		<li
			className='moviecard'
			key={location.pathname === `/favorites` ? `favorite-${movie.title}` : `${movie.title}`}>
			<Poster
				id={movie._id}
				url={movie.poster}
				addToFavoriteMovies={addToFavoriteMovies}
				title={movie.title}></Poster>
			<Title title={movie.title}></Title>
			<Genre genre={movie.category}></Genre>
			<Rating rating={movie.rating} title={movie.title}></Rating>
		</li>
	);
}
