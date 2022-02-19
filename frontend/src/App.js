import React from 'react';
import './App.scss';
import MoviesGrid from './components/main/MoviesGrid';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Recommended from './components/main/Recommended';

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Recommended></Recommended>
			<MoviesGrid></MoviesGrid>
			<Footer></Footer>
		</div>
	);
}

export default App;
