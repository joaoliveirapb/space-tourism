'use client'

import Image from 'next/image'
import commander from '../../assets/crew/commander.png'
import missionSpecialist from '../../assets/crew/mission-specialist.png'
import pilot from '../../assets/crew/pilot.png'
import flightEngineer from '../../assets/crew/flight-engineer.png'
import { Title } from '@/components/Title'
import { useState } from 'react'
import { ButtonChangeCrew } from '@/components/ButtonChangeCrew'

export default function Crew() {
  const [selectedButton, setSelectedButton] = useState('member1')
  const [crew, setCrew] = useState({
    role: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: commander,
  })

  function handleChangeMemberCrew(event) {
    setSelectedButton(event.target.value)
    switch (event.target.value) {
      case 'member1':
        setCrew({
          role: 'COMMANDER',
          name: 'DOUGLAS HURLEY',
          description:
            'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
          image: commander,
        })
        break
      case 'member2':
        setCrew({
          role: 'MISSION SPECIALIST',
          name: 'MARK SHUTTLEWORTH',
          description:
            'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
          image: missionSpecialist,
        })
        break
      case 'member3':
        setCrew({
          role: 'PILOT',
          name: 'VICTOR GLOVER',
          description:
            'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
          image: pilot,
        })
        break
      case 'member4':
        setCrew({
          role: 'FLIGHT ENGINEER',
          name: 'ANOUSHEH ANSARI',
          description:
            'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
          image: flightEngineer,
        })
        break
    }
  }

  return (
    <div className="text-white px-40 py-10 max-lg:px-8">
      <Title index="02" content="MEET YOUR CREW" />

      <div className="flex justify-between max-lg:flex-col max-lg:gap-6 max-lg:mt-10">
        <div className="flex justify-center flex-col max-lg:items-center">
          <span className="font-bellefair text-3xl text-white/20">
            {crew.role}
          </span>
          <h1 className="font-bellefair text-5xl mt-3 mb-6 max-sm:text-[28px]">
            {crew.name}
          </h1>
          <p className="font-barlow text-lg text-zinc-400 leading-8 max-w-[444px] max-lg:text-center">
            {crew.description}
          </p>
          <div className="flex gap-6 mt-8">
            <ButtonChangeCrew
              value="member1"
              selectedButton={selectedButton}
              onClick={handleChangeMemberCrew}
            />
            <ButtonChangeCrew
              value="member2"
              selectedButton={selectedButton}
              onClick={handleChangeMemberCrew}
            />
            <ButtonChangeCrew
              value="member3"
              selectedButton={selectedButton}
              onClick={handleChangeMemberCrew}
            />
            <ButtonChangeCrew
              value="member4"
              selectedButton={selectedButton}
              onClick={handleChangeMemberCrew}
            />
          </div>
        </div>
        <Image
          src={crew.image}
          alt="Imagem do comandante."
          className="w-[500px] h-[500px] border-b-[1px] border-zinc-700 max-lg:mx-auto"
        />
      </div>
    </div>
  )
}
