'use client'

import Image from 'next/image'
import openMenu from '../assets/icons/open-menu.svg'
import closeMenu from '../assets/icons/close-menu.svg'
import { ActiveLink } from './ActiveLink'
import { useState } from 'react'

export function MenuMobile() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className="absolute top-0 right-0">
      {!isOpenMenu ? (
        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="mt-6 mr-8"
        >
          <Image src={openMenu} alt="" />
        </button>
      ) : (
        <div className="relative bg-gray-600/20 backdrop-blur-md h-screen px-20 py-20">
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="absolute top-6 right-8"
          >
            <Image src={closeMenu} alt="" />
          </button>
          <nav className="flex flex-col gap-8">
            <ActiveLink
              content="HOME"
              index="00"
              href="/"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
            <ActiveLink
              content="DESTINATION"
              index="01"
              href="/destination"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
            <ActiveLink
              content="CREW"
              index="02"
              href="/crew"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
            <ActiveLink
              content="TECHNOLOGY"
              index="03"
              href="/technology"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />
          </nav>
        </div>
      )}
    </div>
  )
}
