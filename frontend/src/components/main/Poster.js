import './Poster.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Poster({ url, title }) {
	const heart = <FontAwesomeIcon className='poster-like' icon={faHeart} size='lg' />;

	return (
		<div className='poster'>
			<img className='poster__img' src={url} alt={title}></img>
			<span className='poster__like'>{heart}</span>
		</div>
	);
}
