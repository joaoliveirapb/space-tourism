'use client'

import Image from 'next/image'
import launchVehicle from '../../assets/technology/launch-vehicle.png'
import spaceport from '../../assets/technology/spaceport.png'
import spaceCapsule from '../../assets/technology/space-capsule.png'
import { Title } from '@/components/Title'
import { useState } from 'react'
import { ButtonChangeTechnology } from '@/components/ButtonChangeTechnology'

export default function Technology() {
  const [selectedButton, setSelectedButton] = useState('1')
  const [technology, setTechnology] = useState({
    name: 'LAUNCH VEHICLE',
    description:
      'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!',
    image: launchVehicle,
  })

  function handleChangeTechnology(event) {
    setSelectedButton(event.target.innerText)
    switch (event.target.innerText) {
      case '1':
        setTechnology({
          name: 'LAUNCH VEHICLE',
          description:
            'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!',
          image: launchVehicle,
        })
        break
      case '2':
        setTechnology({
          name: 'SPACEPORT',
          description:
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
          image: spaceport,
        })
        break
      case '3':
        setTechnology({
          name: 'SPACE CAPSULE',
          description:
            'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
          image: spaceCapsule,
        })
        break
    }
  }

  return (
    <div className=" flex-1 text-white px-40 py-10 max-lg:px-8">
      <Title index="03" content="SPACE LAUNCH 101" />

      <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-10 max-lg:mt-10">
        <div className="flex items-center gap-20 max-lg:flex-col">
          <div className="flex flex-col gap-8 max-lg:flex-row">
            <ButtonChangeTechnology
              onClick={handleChangeTechnology}
              selectedButton={selectedButton}
            >
              1
            </ButtonChangeTechnology>
            <ButtonChangeTechnology
              onClick={handleChangeTechnology}
              selectedButton={selectedButton}
            >
              2
            </ButtonChangeTechnology>
            <ButtonChangeTechnology
              onClick={handleChangeTechnology}
              selectedButton={selectedButton}
            >
              3
            </ButtonChangeTechnology>
          </div>
          <div className="text-center">
            <span className="text-zinc-300 tracking-[2.7px]">
              THE TERMINOLOGY...
            </span>
            <h1 className="font-bellefair text-5xl mt-3 mb-4 max-sm:text-[28px]">
              {technology.name}
            </h1>
            <p className="font-barlow text-zinc-300 text-lg max-w-[444px]">
              {technology.description}
            </p>
          </div>
        </div>
        <Image src={technology.image} alt="" className="max-h-[480px]" />
      </div>
    </div>
  )
}
