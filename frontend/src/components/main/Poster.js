import './Poster.css';

export default function Poster({ url }) {
	return <img className='MovieImage' src={url} alt='poster' />;
}
