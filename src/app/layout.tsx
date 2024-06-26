import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { siteConfig } from '@/config/site'
import { inter } from '@/styles/fonts'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'

export const metadata: Metadata = siteConfig.metadata

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang="pt-BR">
				<body className={inter.variable}>
					<Header />
					<main className="flex-1 pb-8">{children}</main>
					<Footer />
				</body>
			</html>
		</ViewTransitions>
	)
}
