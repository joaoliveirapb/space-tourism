import './globals.css'
import { Background } from '@/components/Background'
import { Header } from '@/components/Header'

import {
  Barlow,
  Barlow_Condensed as BarlowCondensed,
  Bellefair,
} from 'next/font/google'

const barlow = Barlow({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-barlow',
})
const barlowCondensed = BarlowCondensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})
const bellefair = Bellefair({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bellefair',
})

export const metadata = {
  title: 'Space Tourism',
  description:
    'Um site de turismo espacial construída com React, NextJS e TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable} font-barlowCondensed`}
      >
        <Background>
          <Header />
          {children}
        </Background>
      </body>
    </html>
  )
}
