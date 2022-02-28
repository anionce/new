import MoviesGrid from '../components/main/MoviesGrid';
import { useTheme } from '../ThemeContext';

export default function Main() {
	const theme = useTheme();
	const style = {
		backgroundColor: theme,
	};

	return (
		<div style={style}>
			<MoviesGrid></MoviesGrid>
		</div>
	);
}
