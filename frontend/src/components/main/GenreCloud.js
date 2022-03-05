import './Genre.scss';

export default function GenreCloud({ handleGenreClick, movies }) {
	// Setting unique genres
	const genres = movies.map(movie => movie.category);
	const uniqueGenres = [...new Set(genres)];

	return (
		<>
			{uniqueGenres.map(function (genre) {
				return (
					<span
						key={genre}
						onClick={() => handleGenreClick(genre)}
						className='genre__tag'>
						{genre}
					</span>
				);
			})}
			<span onClick={() => handleGenreClick()} className='genre__tag'>
				All
			</span>
		</>
	);
}
