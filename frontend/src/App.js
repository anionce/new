import React from 'react';
import './App.scss';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header></Header>

				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/favorites' element={<Main />} />
				</Routes>

				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
