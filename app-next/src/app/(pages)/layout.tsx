import { NextAuthProvider } from "@/providers/auth"
import Header from "../components/basics/Header"

export default function PagesLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex justify-center">
         <NextAuthProvider>
          <Header />
   
        {children}
        </NextAuthProvider>
      </section>
    )
  }