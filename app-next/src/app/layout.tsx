import StyledComponentsRegistry from '@/lib/ant-design/AntRegistry'
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
    <html lang="pt-BR" className='flex flex-col justify-start items-center min-h-screen'>
      <body className={`inter.className min-h-screen flex flex-col 
      justify-start items-center bg-[--background-app] w-full
      text-white text-lg `}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>

    </html>
  )
}
