import { NextAuthProvider } from '@/providers/auth'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import Header from './components/basics/Header'


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
    <html lang="pt-br" className='flex flex-col justify-start items-center min-h-screen'>
      <body className={`inter.className min-h-screen flex flex-col 
      justify-start items-center bg-[--background-app] w-full
      text-white `}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>

    </html>
  )
}
