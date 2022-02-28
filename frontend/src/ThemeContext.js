import React, { useContext } from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children, value }) => {
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	return useContext(ThemeContext);
};

export default ThemeProvider;
