import Header from '@/Components/Header/Header'
import './globals.scss'
import Breadcrumbs from '@/Components/Breadcrumbs/Breadcrumbs'

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Breadcrumbs />
                {children}
            </body>
        </html>
    )
}
