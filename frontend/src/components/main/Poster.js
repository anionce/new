import './Poster.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Poster({ url, title, handleFav }) {
	const heart = <FontAwesomeIcon className='poster-like' icon={faHeart} size='lg' />;
	const [isFavorite, setFavorite] = useState(false);

	const handleHeartClick = () => {
		if (!isFavorite) {
			setFavorite(true);
		} else {
			setFavorite(false);
		}
	};

	return (
		<div className='poster'>
			<img className='poster__img' src={url} alt={title}></img>
			<span
				onClick={handleHeartClick}
				className={isFavorite ? 'poster__like' : 'unfavorited'}>
				{heart}
			</span>
		</div>
	);
}
