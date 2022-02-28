import React, { useContext, useState } from 'react';

export const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
	const [authData, setAuthData] = useState('');

	const login = data => {
		setAuthData(data);
	};

	const logout = () => {
		setAuthData({});
	};

	const value = {
		authData,
		login,
		logout,
	};

	return (
		<AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
	);
};

export const useAuthentication = () => {
	return useContext(AuthenticationContext);
};

export default AuthenticationProvider;
