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

	const handleGenreClick = genre => {
		const newMovies = [...movies];
		setFilterMovies(newMovies.filter(movie => movie.category === genre));
	};

	return (
		<div style={style}>
			<Search></Search>
			<GenreCloud movies={movies} handleGenreClick={handleGenreClick}></GenreCloud>
			{authData && <Recommended></Recommended>}
			<MoviesGrid movies={filterMovies}></MoviesGrid>
		</div>
	);
}
