import React from 'react';
import './App.scss';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Register from './components/users/Register';
import Login from './components/users/Login';
import MoviesGrid from './components/main/MoviesGrid';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header></Header>

				<main>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
						<Route path='/favorites' element={<MoviesGrid favorites='favorites' />} />
					</Routes>
				</main>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
