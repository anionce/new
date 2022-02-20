import './Search.scss';
import React, { useState } from 'react';

export default function Search() {
	
	const [input, setInput] = useState('');

	const handleInputChange = e => {
		setInput(e.target.value);
	};

	return (
		<div className='search-div'>
			<input
				type='text'
				onChange={handleInputChange}
				class='fontAwesome'
				name='searchInput'
				value={input}
				placeholder='Search...'></input>
		</div>
	);
}
