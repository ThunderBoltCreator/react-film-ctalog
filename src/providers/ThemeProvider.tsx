import { createContext, ReactNode, useMemo, useState } from 'react'
import { ThemeProviderType } from 'types/types'

export const ThemeContext = createContext<ThemeProviderType>(
	{} as ThemeProviderType
)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setIsDark] = useState(false)

	const theme = useMemo(() => ({ isDark, setIsDark }), [isDark])

	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
