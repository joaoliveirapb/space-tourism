import Image from 'next/image'
import commander from '../../assets/commander.png'
import { Title } from '@/components/Title'

export default function Crew() {
  return (
    <div className="flex-1 text-white">
      <Title index="02" content="MEET YOUR CREW" />

      <div className="flex gap-20">
        <div className="flex flex-col mt-32 ml-40 max-w-[488px]">
          <span className="font-bellefair text-3xl text-white/20">
            COMMANDER
          </span>
          <h1 className="font-bellefair text-5xl mt-3 mb-6">DOUGLAS HURLEY</h1>
          <p className="font-barlow text-lg text-zinc-400 leading-8 max-w-[444px]">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div className="flex flex-1 items-center gap-6">
            <div className="h-3 w-3 bg-white rounded-full cursor-pointer hover:bg-zinc-400" />
            <div className="h-3 w-3 bg-zinc-500 rounded-full cursor-pointer hover:bg-zinc-400" />
            <div className="h-3 w-3 bg-zinc-500 rounded-full cursor-pointer hover:bg-zinc-400" />
            <div className="h-3 w-3 bg-zinc-500 rounded-full cursor-pointer hover:bg-zinc-400" />
          </div>
        </div>
        <Image
          src={commander}
          alt="Imagem do comandante."
          className="max-h-[500px]"
        />
      </div>
    </div>
  )
}
