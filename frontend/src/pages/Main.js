import Search from '../components/main/Search';
import MoviesGrid from '../components/main/MoviesGrid';
import GenreCloud from '../components/main/GenreCloud';
import Recommended from '../components/main/Recommended';
import { useAuthentication } from '../AuthenticationContext';
import { useTheme } from '../ThemeContext';

export default function Main() {
	// Authentication
	const { authData } = useAuthentication();

	const theme = useTheme();
	const style = {
		backgroundColor: theme,
	};

	return (
		<div style={style}>
			<Search></Search>
			<GenreCloud></GenreCloud>
			{authData.username && <Recommended></Recommended>}
			<MoviesGrid></MoviesGrid>
		</div>
	);
}
