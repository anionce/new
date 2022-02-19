import './Poster.scss';

export default function Poster({ url }) {
	return (
		<div className='poster'>
			<img className='poster-img' src={url} alt='poster'></img>
			<button className='poster-like'>❤</button>
		</div>
	);
}
