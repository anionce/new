import movies from '../../movies.json';
import './Genre.scss';

export default function GenreCloud() {
	const genres = movies.map(movie => movie.category);
	const uniqueGenres = [...new Set(genres)];

	return uniqueGenres.map(function (genre) {
		return (
			<a href='#' className='genre__tag'>
				{genre}
			</a>
		);
	});
}