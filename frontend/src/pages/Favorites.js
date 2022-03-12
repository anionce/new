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
		const response = await fetch('/api/user/favorites', {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
			},
		});
		const data = await response.json();
		const favorites = data.favorites;
		setFavoriteMovies(favorites);
		setLoading(false);
	}

	function deleteFromFavorites(id) {
		console.log(id);
		fetch(`/api/user/favorites/${id}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		setLoading(false);
		getUserFavorites();
	}

	useEffect(() => {
		getUserFavorites();
	}, []);

	return (
		<div style={style}>
			<MoviesGrid
				isLoading={isLoading}
				movies={favoriteMovies}
				deleteFromFavorites={deleteFromFavorites}></MoviesGrid>
		</div>
	);
}
