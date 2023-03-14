import React from 'react'
import { IThemeSwitcher } from 'types/types'

import s from './ThemeToggle.module.scss'

export const ThemeSwitcher: React.FC<IThemeSwitcher> = ({ value }) => {
	const { isDark, setIsDark } = value

	const onChange = () => {
		setIsDark(!isDark)
		const theme = isDark ? 'dark' : 'light'
		window.localStorage.setItem('theme', theme)
	}

	const theme = 
	return (
		<div className={s.root}>
			<label className={s.switch} htmlFor='toggler'>
				<input
					id='toggler'
					type='checkbox'
					onClick={onChange}
					value={isDark ? 'dark' : 'light'}
					readOnly
				/>
				<span className={s.slider} />
				<span className={s.wave} />
			</label>
		</div>
	)
}
