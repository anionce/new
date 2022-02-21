import './Recommended.scss';
import soho from '../../assets/soho.jpg';

export default function Recommended() {
	return (
		<div className='recommended'>
			<h2 className='recommended__title'>Recommended to you</h2>

			<a href='/'>
				<img className='recommended__img' src={soho} alt='recommended movie'></img>
			</a>
		</div>
	);
}
