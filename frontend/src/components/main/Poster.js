import './Poster.scss';
import { useAuthentication } from '../../AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../ThemeContext';
import { useLocation } from 'react-router-dom';

export default function Poster({ url, title, handleFav }) {
	// State
	const [isFavorite, setFavorite] = useState(false);

	// Icon
	const heart = <FontAwesomeIcon className='poster-like' icon={faHeart} size='lg' />;

	// Hooks
	const { authData } = useAuthentication();
	const navigate = useNavigate();

	// Location
	const location = useLocation();

	// Favorite logic
	const handleHeartClick = () => {
		if (!authData) {
			navigate('/login', { replace: true });
		} else {
			if (!isFavorite) {
				setFavorite(true);
			} else {
				setFavorite(false);
			}
		}
	};

	// Theme
	const theme = useTheme();
	const style = {
		borderColor: `1px solid ${theme === 'black' ? 'white' : ''}`,
	};

	return (
		<div className='poster'>
			<img style={style} className='poster__img' src={url} alt={title}></img>
			{location.pathname !== '/favorites' && (
				<span
					onClick={handleHeartClick}
					className={isFavorite ? 'poster__like' : 'unfavorited'}>
					{heart}
				</span>
			)}
		</div>
	);
}
