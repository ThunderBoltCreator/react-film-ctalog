import { Dispatch, SetStateAction } from 'react'

export interface IThemeSwitcher {
  value: ThemeProviderType
}
export type ThemeProviderType = {
	isDark: boolean
	setIsDark: Dispatch<SetStateAction<boolean>>
}