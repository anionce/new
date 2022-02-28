import Brand from './Brand';
import Navigation from './Navigation';
import ThemeSelector from './ThemeSelector';
import './Header.scss';
import { useTheme } from '../../ThemeContext';

export default function Header({ handleColorChange, selectedColor }) {
	const theme = useTheme();

	const style = {
		backgroundColor: theme,
	};
	return (
		<div style={style}>
			<ThemeSelector onChange={handleColorChange} value={selectedColor}></ThemeSelector>
			<div className='header'>
				<Brand></Brand>
				<Navigation></Navigation>
			</div>
		</div>
	);
}
