import { NextAuthProvider } from "@/providers/auth"
import Header from "../components/basics/Header"

export default function PagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NextAuthProvider>
        <Header />

        {children}
      </NextAuthProvider>
    </>
    
  )
}