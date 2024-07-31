import './globals.css'
import type { Metadata } from 'next'
import { Alegreya } from 'next/font/google'
import Image from 'next/image'
import FooterTier from '../public/FooterTier.svg'
import Hamburger from '../public/hamburger.svg'
import Contact from '../components/Contact'
const alegreya = Alegreya({ subsets: ['latin'] })
import Header from '@/components/Header'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
export const metadata: Metadata = {
  title: 'Frank Alvarez',
  description: 'Personal Website to showcase professional skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${alegreya.className} `}>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />\
      </Head>
      <body className="!overflow-x-hidden">
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
