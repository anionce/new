import './Poster.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Poster({ url }) {
	const heart = <FontAwesomeIcon className='poster-like' icon={faHeart} size='lg' />;


	return (
		<div className='poster'>
			<img className='poster-img' src={url} alt='poster'></img>
			<span>{heart}</span>
		</div>
	);
}
