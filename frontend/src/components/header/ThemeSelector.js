import React from 'react';
import { useTheme } from '../../ThemeContext';
import './ThemeSelector.scss';

const ThemeSelector = ({ onChange, value }) => {
	const theme = useTheme();

	const style = {
		color: theme === 'white' ? 'black' : 'white',
		backgroundColor: theme,
	};

	const handleChange = event => {
		onChange(event.target.value);
	};

	return (
		<div className='theme__selector' style={style}>
			<label>Theme</label>
			<select onChange={handleChange} value={value}>
				<option value='white'>Light</option>
				<option value='black'>Dark</option>
			</select>
		</div>
	);
};

export default ThemeSelector;
