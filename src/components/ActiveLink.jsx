'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function ActiveLink({ content, index, href, onClick }) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`h-full flex items-center gap-3 tracking-[2.7px] max-sm:h-auto ${
        pathname === href
          ? 'border-b-2 border-white'
          : 'hover:border-b-2 hover:border-gray-500'
      }`}
    >
      <span className="font-bold max-md:hidden max-sm:flex">{index}</span>
      {content}
    </Link>
  )
}
