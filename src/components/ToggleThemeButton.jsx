import Switch from '@mui/material/Switch';
// import { useContext } from 'react'
import { ThemeContext } from '../utils/context/ThemeProvider'
import { useContext } from 'react';

export default function ToggleThemeButton() {

	const { toggleTheme } = useContext(ThemeContext)

	return (
		<div>

			<Switch
			onClick={toggleTheme}	
			// checked={ThemeProvider === 'dark'}
			// onChange={toggleTheme}
			/>


		</div>
	);
}