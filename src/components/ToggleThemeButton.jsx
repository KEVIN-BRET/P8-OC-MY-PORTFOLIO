// import Switch from '@mui/material/Switch';
import { useContext } from 'react'
import { ThemeContext } from '../utils/context/context'

export default function DarkLightSwitch(props) {

	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<div>

			<button
				onClick={toggleTheme}
				className='toggle-theme-btn'>

				<span>go {theme ? "light" : "dark"}</span>

			</button>


			{/* <Switch
				checked={theme === 'dark'}
				onChange={toggleTheme}
			/> */}
		</div>
	);
}