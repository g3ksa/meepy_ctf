import { createContext, useState, useMemo, useCallback } from 'react'

const initialTheme = !localStorage.theme ? 'dark' : localStorage.getItem('theme');

const ThemeContext = createContext({
	theme: 'dark',
	updateTheme: () => {},
})

const ThemeProvider = props => {
	const {children} = props;

	const [ theme, setTheme ] = useState(initialTheme);

	const updateTheme = useCallback((newTheme) => {
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme)
	}, []);

	const value = useMemo(() => {
		return {
			theme,
			updateTheme
		}
	}, [theme, updateTheme])

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeProvider, ThemeContext, initialTheme }