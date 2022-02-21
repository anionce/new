import './Footer.scss';

export default function Footer() {
	const today = new Date();
	const year = today.getFullYear();

	return (
		<footer className='footer'>
			<p className='footer__p'>Copyright &copy; {year}. All Rights Reserved</p>
		</footer>
	);
}
