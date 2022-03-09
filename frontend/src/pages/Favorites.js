import MoviesGrid from '../components/main/MoviesGrid';
import { useTheme } from '../ThemeContext';
import { useState, useEffect } from 'react';

export default function Favorites() {
	const theme = useTheme();
	const style = {
		backgroundColor: theme,
	};

	// State
	const [favoriteMovies, setFavoriteMovies] = useState([]); // Initial fetch
	const [isLoading, setLoading] = useState(true);

	// Fetching movies
	async function getUserFavorites() {
		setLoading(true);
		const response = await fetch('/api/user/favorites', {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
			},
		});
		const data = await response.json();
		const favorites = data.favorites;
		console.log(data.favorites);
		setFavoriteMovies(favorites);
		setLoading(false);
	}

	useEffect(() => {
		getUserFavorites();
	}, []);

	return (
		<div style={style}>
			<MoviesGrid isLoading={isLoading} movies={favoriteMovies}></MoviesGrid>
		</div>
	);
}
