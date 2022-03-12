import './Poster.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../../ThemeContext';
import { useLocation } from 'react-router-dom';

export default function Poster({ url, title, id, addToFavoriteMovies, deleteFromFavorites }) {
	// Hooks
	const location = useLocation();

	// Theme
	const theme = useTheme();
	const style = {
		borderColor: `1px solid ${theme === 'black' ? 'white' : ''}`,
	};

	// Icon
	const heart = <FontAwesomeIcon className='poster-like' icon={faHeart} size='lg' />;
	const heartBreak = <FontAwesomeIcon className='poster-like' icon={faHeartCrack} size='lg' />;

	return (
		<div className='poster'>
			<img style={style} className='poster__img' src={url} alt={title}></img>
			{location.pathname !== '/favorites' && (
				<span className='poster__like' onClick={() => addToFavoriteMovies(id)}>
					{heart}
				</span>
			)}

			{location.pathname === '/favorites' && (
				<span className='poster__like' onClick={() => deleteFromFavorites(id)}>
					{heartBreak}
				</span>
			)}
		</div>
	);
}
