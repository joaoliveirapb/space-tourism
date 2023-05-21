import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="h-24 ml-14 flex items-center justify-between relative">
      <Image src={logo} alt="Logo da Space Tourism" className="h-12 w-12" />
      <div className="absolute h-px w-[473px] left-48 z-10 bg-white/20" />
      <nav className="flex items-center gap-12 h-full pl-[123px] pr-[165px] bg-gray-600/20 backdrop-blur-md">
        <Link
          href="/"
          className="h-full flex items-center gap-3 tracking-[2.7px] border-b-2 border-white hover:border-b-2 hover:border-gray-500"
        >
          <span className="font-bold">00</span> HOME
        </Link>

        <Link
          href="/destination"
          className="h-full flex items-center gap-3 tracking-[2.7px] hover:border-b-2 hover:border-gray-500"
        >
          <span className="font-bold">01</span> DESTINATION
        </Link>

        <Link
          href="/crew"
          className="h-full flex items-center gap-3 tracking-[2.7px] hover:border-b-2 hover:border-gray-500"
        >
          <span className="font-bold">02</span> CREW
        </Link>

        <Link
          href="/technology"
          className="h-full flex items-center gap-3 tracking-[2.7px] hover:border-b-2 hover:border-gray-500"
        >
          <span className="font-bold">03</span> TECHNOLOGY
        </Link>
      </nav>
    </header>
  )
}
