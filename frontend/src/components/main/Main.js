import Search from './Search';
import MoviesGrid from './MoviesGrid';
import Recommended from './Recommended';
import Register from '../users/Register';
import Login from '../users/Login';

export default function Main() {
	return (
		<>
			<Search></Search>
			<MoviesGrid></MoviesGrid>
		</>
	);
}
