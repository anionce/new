import Search from '../components/main/Search';
import MoviesGrid from '../components/main/MoviesGrid';
import GenreCloud from '../components/main/GenreCloud';
import Recommended from '../components/main/Recommended';
import { useAuthentication } from '../AuthenticationContext';
import { useTheme } from '../ThemeContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
	// Hooks
	const { authData } = useAuthentication();
	const navigate = useNavigate();

	// Theme
	const theme = useTheme();
	const style = {
		backgroundColor: theme,
	};

	// State
	const [isLoading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]); // Initial fetch
	const [filterMovies, setFilterMovies] = useState([]); // Afterwards
	const [input, setInput] = useState('');

	// Fetching movies
	function fetchMovies() {
		setLoading(true);
		fetch('/api/movies')
			.then(response => response.json())
			.then(data => {
				setMovies(data.movies);
				setFilterMovies(data.movies);
				setLoading(false);
			});
	}

	useEffect(() => {
		fetchMovies();
	}, []);

	// Handlers
	const handleInputChange = e => {
		setInput(e.target.value);
	};

	const handleSubmitSearch = () => {
		const searchedTitle = input.toLowerCase();
		const newMovies = [...movies];
		setFilterMovies(
			newMovies.filter(movie => movie.title.toLowerCase().includes(searchedTitle))
		);
	};

	const handleGenreClick = genre => {
		const newMovies = [...movies];
		if (!genre) setFilterMovies(newMovies);
		else {
			setFilterMovies(newMovies.filter(movie => movie.category === genre));
		}
	};

	const handleSortClickAZ = () => {
		const sortedMovies = [...movies];
		setFilterMovies(sortedMovies.sort((a, b) => (a.title > b.title ? 1 : -1)));
	};

	const handleSortClickZA = () => {
		const sortedMovies = [...movies];
		setFilterMovies(sortedMovies.sort((a, b) => (a.title > b.title ? -1 : 1)));
	};

	const handleSortClickRandom = () => {
		const sortedMovies = [...movies];
		setFilterMovies(
			sortedMovies.sort(function () {
				return Math.random() - 0.5;
			})
		);
	};

	function addToFavoriteMovies(id) {
		if (!authData) {
			navigate('/login', { replace: true });
		}

		fetch('/api/user/favorites', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ _id: id }),
		});
	}

	return (
		<div style={style}>
			<Search
				handleInputChange={handleInputChange}
				handleSubmitSearch={handleSubmitSearch}></Search>
			<GenreCloud movies={movies} handleGenreClick={handleGenreClick}></GenreCloud>
			{authData && <Recommended></Recommended>}
			<MoviesGrid
				addToFavoriteMovies={addToFavoriteMovies}
				isLoading={isLoading}
				handleSortClickAZ={handleSortClickAZ}
				handleSortClickZA={handleSortClickZA}
				handleSortClickRandom={handleSortClickRandom}
				movies={filterMovies}></MoviesGrid>
		</div>
	);
}
