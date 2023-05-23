'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Background({ children }) {
  const pathname = usePathname()
  const [background, setBackground] = useState(
    'bg-[url(../assets/bg-first.png)]',
  )

  useEffect(() => {
    switch (pathname) {
      case '/':
        setBackground('bg-[url(../assets/bg-first.png)]')
        break
      case '/destination':
        setBackground('bg-[url(../assets/bg-second.png)]')
        break
      case '/crew':
        setBackground('bg-[url(../assets/bg-third.png)]')
        break
      case '/technology':
        setBackground('bg-[url(../assets/bg-fourth.png)]')
        break
    }
  }, [pathname])

  return (
    <main
      className={`flex flex-col min-h-screen pt-10 text-white ${background} bg-no-repeat bg-cover bg-center`}
    >
      {children}
    </main>
  )
}
