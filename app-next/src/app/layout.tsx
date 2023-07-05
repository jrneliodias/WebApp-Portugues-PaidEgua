import './globals.css'
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
    <html lang="en" className='flex flex-col flex-1 justify-between items-center'>
      <body className={`inter.className flex flex-col justify-start`}>
        {children}
      </body>
    </html>
  )
}
