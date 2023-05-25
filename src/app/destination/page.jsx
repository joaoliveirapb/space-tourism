'use client'

import Image from 'next/image'
import moonImage from '../../assets/destination/moon.png'
import marsImage from '../../assets/destination/mars.png'
import europaImage from '../../assets/destination/europa.png'
import titanImage from '../../assets/destination/titan.png'
import { useState } from 'react'
import { Title } from '@/components/Title'
import { ButtonChangeDestination } from '@/components/ButtonChangeDestination'

export default function Destination() {
  const [selectedButton, setSelectedButton] = useState('MOON')
  const [destination, setDestination] = useState({
    image: moonImage,
    title: 'MOON',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 KM',
    travelTime: '3 DAYS',
  })

  function handleChangeDestination(event) {
    setSelectedButton(event.target.innerText)
    switch (event.target.innerText) {
      case 'MOON':
        setDestination({
          image: moonImage,
          title: event.target.innerText,
          description:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
          distance: '384,400 KM',
          travelTime: '3 DAYS',
        })
        break
      case 'MARS':
        setDestination({
          image: marsImage,
          title: event.target.innerText,
          description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
          distance: '225 MIL. KM',
          travelTime: '9 MONTHS',
        })
        break
      case 'EUROPA':
        setDestination({
          image: europaImage,
          title: event.target.innerText,
          description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
          distance: '628 MIL. KM',
          travelTime: '3 YEARS',
        })
        break
      case 'TITAN':
        setDestination({
          image: titanImage,
          title: event.target.innerText,
          description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
          distance: '1.6 BIL. KM',
          travelTime: '7 YEARS',
        })
    }
  }

  return (
    <div className="flex-1 text-white px-40 py-10 max-lg:px-8">
      <Title index="01" content="PICK YOUR DESTINATION" />

      <div className="mt-14 flex justify-center gap-40 max-lg:flex-col max-lg:items-center max-lg:gap-20">
        <Image src={destination.image} alt="" className="h-[380px] w-[380px]" />
        <div className="max-w-[445px] flex flex-col max-lg:items-center">
          <nav className="flex gap-9 h-8">
            <ButtonChangeDestination
              onClick={handleChangeDestination}
              selectedButton={selectedButton}
            >
              MOON
            </ButtonChangeDestination>
            <ButtonChangeDestination
              onClick={handleChangeDestination}
              selectedButton={selectedButton}
            >
              MARS
            </ButtonChangeDestination>
            <ButtonChangeDestination
              onClick={handleChangeDestination}
              selectedButton={selectedButton}
            >
              EUROPA
            </ButtonChangeDestination>
            <ButtonChangeDestination
              onClick={handleChangeDestination}
              selectedButton={selectedButton}
            >
              TITAN
            </ButtonChangeDestination>
          </nav>
          <h1 className="font-bellefair text-8xl mt-7 mb-2 max-sm:text-[56px]">
            {destination.title}
          </h1>
          <p className="font-barlow text-lg leading-8 text-zinc-300 max-sm:text-base max-sm:text-center">
            {destination.description}
          </p>
          <div className="flex gap-20 mt-7 pt-6 border-t-[1px] border-gray-500 max-lg:flex-col max-lg:gap-6 max-lg:w-full max-lg:text-center max-lg:text-sm">
            <div>
              <span className="text-zinc-400 text-sm tracking-[2.3px]">
                AVG. DISTANCE
              </span>
              <p className="font-bellefair text-2xl">{destination.distance}</p>
            </div>
            <div>
              <span className="text-zinc-400 text-sm tracking-[2.3px]">
                EST. TRAVEL TIME
              </span>
              <p className="font-bellefair text-2xl">
                {destination.travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
