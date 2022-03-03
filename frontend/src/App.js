import React from 'react';
import './App.scss';
import ThemeProvider from './ThemeContext';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import AuthenticationProvider from './AuthenticationContext';
import RequiredAuth from './RequiredAuth';

function App() {
	const [selectedColor, setSelectedColor] = useState('white');

	const handleColorChange = value => {
		setSelectedColor(value);
	};

	return (
		<AuthenticationProvider>
			<ThemeProvider value={selectedColor}>
				<div className='App'>
					<Router>
						<Header handleColorChange={handleColorChange}></Header>
						<Routes>
							<Route path='/' element={<Main />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route
								path='/favorites'
								element={
									<RequiredAuth>
										<Favorites />
									</RequiredAuth>
								}
							/>
						</Routes>

						<Footer></Footer>
					</Router>
				</div>
			</ThemeProvider>
		</AuthenticationProvider>
	);
}

export default App;
