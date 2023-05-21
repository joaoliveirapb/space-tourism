import Link from 'next/link'
import Image from 'next/image'
import moon from '../../assets/moon.png'
import { Title } from '@/components/Title'

export default function Destination() {
  return (
    <div className="flex-1 text-white">
      <Title index="01" content="PICK YOUR DESTINATION" />

      <div className="mt-14 flex justify-center gap-40">
        <Image src={moon} alt="Imagem da lua" className="h-[380px] w-[380px]" />
        <div className="w-[445px] flex flex-col">
          <nav className="flex gap-9 h-8">
            <Link href="" className="border-b-2 tracking-[2.7px]">
              MOON
            </Link>
            <Link
              href=""
              className="tracking-[2.7px] hover:border-b-2 hover:border-gray-500"
            >
              MARS
            </Link>
            <Link
              href=""
              className="tracking-[2.7px] hover:border-b-2 hover:border-gray-500"
            >
              EUROPA
            </Link>
            <Link
              href=""
              className="tracking-[2.7px] hover:border-b-2 hover:border-gray-500"
            >
              TITAN
            </Link>
          </nav>
          <h1 className="font-bellefair text-8xl mt-7 mb-2">MOON</h1>
          <p className="font-barlow text-lg leading-8 text-zinc-300">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="flex gap-20 mt-7 pt-6 border-t-[1px] border-gray-500">
            <div>
              <span className="text-zinc-400 text-sm tracking-[2.3px]">
                AVG. DISTANCE
              </span>
              <p className="font-bellefair text-2xl">384,400 KM</p>
            </div>
            <div>
              <span className="text-zinc-400 text-sm tracking-[2.3px]">
                EST. TRAVEL TIME
              </span>
              <p className="font-bellefair text-2xl">3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
