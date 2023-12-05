import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'
import Header from '@/components/header/Header'

const roboto = Roboto({ subsets: ['cyrillic'], weight: '400' })

export const metadata: Metadata = {
	title: 'CityServices',
	description: 'CityServices',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={roboto.className}>

				<div className='container'>
					<Header />

					{children}

				</div>

			</body>
		</html>
	)
}
