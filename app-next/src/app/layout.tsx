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
    <html lang="pt-br" className='flex flex-col items-center min-h-screen'>
          <body className={`inter.className min-h-screen`}>
          {children}
        </body>

    </html>
  )
}
