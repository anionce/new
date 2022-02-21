import Search from './Search';
import MoviesGrid from './MoviesGrid';
import Recommended from './Recommended';
import Register from '../users/Register';
import Login from '../users/Login';
import GenreCloud from './GenreCloud';

export default function Main() {
	return (
		<>
			<Search></Search>
			<GenreCloud></GenreCloud>
			<MoviesGrid></MoviesGrid>
		</>
	);
}
