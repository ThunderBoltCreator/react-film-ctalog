import React from 'react'
import { Container } from 'components/Container'
import { Header } from 'components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Sidebar } from 'components/Sidebar/Sidebar'

export const MainLayout: React.FC = () => {
	return (
		<Container>
			<Header />
			<Sidebar />
			<Outlet />
		</Container>
	)
}
