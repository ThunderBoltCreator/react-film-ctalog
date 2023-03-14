import { ThemeSwitcher } from 'components/ThemeToggle/ThemeSwitcher'
import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'

export const Sidebar: React.FC = () => {
	const theme = useContext(ThemeContext)
	return (
		<>
			<ThemeSwitcher value={theme} />
		</>
	)
}
