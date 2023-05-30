import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { ActiveLink } from './ActiveLink'

export function Header() {
  return (
    <header className="h-24 ml-14 flex items-center justify-between relative">
      <Link href="/">
        <Image src={logo} alt="Logo da Space Tourism" className="h-12 w-12" />
      </Link>
      <div className="absolute h-px w-[473px] left-48 z-10 bg-white/20 max-2xl:hidden" />
      <nav className="flex items-center gap-12 h-full pl-[123px] pr-[165px] bg-gray-600/20 backdrop-blur-md max-lg:px-12 max-sm:hidden">
        <ActiveLink content="HOME" index="00" href="/" />
        <ActiveLink content="DESTINATION" index="01" href="/destination" />
        <ActiveLink content="CREW" index="02" href="/crew" />
        <ActiveLink content="TECHNOLOGY" index="03" href="/technology" />
      </nav>
    </header>
  )
}
