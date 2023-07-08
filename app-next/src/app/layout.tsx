import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Português Pai D'Égua",
  description: 'Web App para ensino de português',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex flex-col items-center h-full'>
      <body className={`inter.className`}>
        {children}
      </body>
    </html>
  )
}
