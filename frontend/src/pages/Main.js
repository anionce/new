import Search from '../components/main/Search';
import MoviesGrid from '../components/main/MoviesGrid';
import GenreCloud from '../components/main/GenreCloud';
import Recommended from '../components/main/Recommended';
import { useAuthentication } from '../AuthenticationContext';
import { useTheme } from '../ThemeContext';
import { useState, useEffect } from 'react';

export default function Main() {
	// Authentication
	const { authData } = useAuthentication();

	// Theme
	const theme = useTheme();
	const style = {
		backgroundColor: theme,
	};

	// State
	const [movies, setMovies] = useState([]); // Initial fetch
	const [filterMovies, setFilterMovies] = useState([]); // Afterwards

	// Fetching movies
	function fetchMovies() {
		fetch('http://localhost:4000/api/movies')
			.then(response => response.json())
			.then(data => {
				setMovies(data.movies);
				setFilterMovies(data.movies);
			});
	}

	useEffect(() => {
		fetchMovies();
	}, []);

	const [input, setInput] = useState('');

	// Handlers
	const handleInputChange = e => {
		setInput(e.target.value);
	};

	async function handleSubmitSearch(event) {
		if (event.key === 'Enter') {
			const title = input;
			const response = await fetch(`http://localhost:4000/api/movies/search?title=${title}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();
			const searchedMovie = data.movies;
			const titleSearchedMovie = searchedMovie[0].title;

			if (response.status === 200) {
				const newMovies = [...movies];
				setFilterMovies(newMovies.filter(movie => movie.title === titleSearchedMovie));
			}
		}
	}

	const handleGenreClick = genre => {
		const newMovies = [...movies];
		if (!genre) setFilterMovies(newMovies);
		else {
			setFilterMovies(newMovies.filter(movie => movie.category === genre));
		}
	};
	const handleSortClick = () => {
		const sortedMovies = [...movies];
		setFilterMovies(sortedMovies.sort((a, b) => (a.title > b.title ? 1 : -1)));
	};

	return (
		<div style={style}>
			<Search
				handleInputChange={handleInputChange}
				handleSubmitSearch={handleSubmitSearch}></Search>
			<GenreCloud movies={movies} handleGenreClick={handleGenreClick}></GenreCloud>
			{authData && <Recommended></Recommended>}
			<MoviesGrid handleSortClick={handleSortClick} movies={filterMovies}></MoviesGrid>
		</div>
	);
}
