import Search from '../components/main/Search';
import MoviesGrid from '../components/main/MoviesGrid';
import GenreCloud from '../components/main/GenreCloud';

export default function Main() {
	return (
		<>
			<Search></Search>
			<GenreCloud></GenreCloud>
			<MoviesGrid></MoviesGrid>
		</>
	);
}
