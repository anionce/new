import './Recommended.scss';
import soho from '../../assets/soho.jpg';

export default function Recommended() {
	return (
		<div className='recommended'>
			<h2>Recommended to you</h2>
			<div className='recommended-container'>
				<a href='/'>
					<img className='recommended-img' src={soho} alt='recommended movie'></img>
				</a>
			</div>
		</div>
	);
}
