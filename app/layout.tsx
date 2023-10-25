import './globals.css'
import type { Metadata } from 'next'
import { Alegreya } from 'next/font/google'
import Image from 'next/image'
import FooterTier from '../public/FooterTier.svg'
import Hamburger from '../public/hamburger.svg'
import Contact from '../components/Contact'
const alegreya = Alegreya({ subsets: ['latin'] })
import Header from '@/components/Header'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={alegreya.className}>
      <body>
        <Header></Header>
        {children}
        <footer className=" mt-36 h-5 w-full  overflow-y-visible overflow-x-clip">
          <div className="relative z-10 checkIt">
            <Contact></Contact>
          </div>

          <Image
            src={FooterTier}
            className="relative align-bottom -top-[650px] min-w-[1200px] max-w-full w-full"
            alt=""
          />
        </footer>
      </body>
    </html>
  )
}
