import './Genre.scss';

export default function GenreCloud({ handleGenreClick, movies }) {
	const genres = movies.map(movie => movie.category);
	const uniqueGenres = [...new Set(genres)];

	return uniqueGenres.map(function (genre) {
		return (
			<>
				<span onClick={() => handleGenreClick(genre)} className='genre__tag'>
					{genre}
				</span>
			</>
		);
	});
}
