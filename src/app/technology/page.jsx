import Image from 'next/image'
import rocket from '../../assets/rocket.png'
import { Title } from '@/components/Title'

export default function Technology() {
  return (
    <div className=" flex-1 text-white">
      <Title index="03" content="SPACE LAUNCH 101" />

      <div className="flex justify-between items-center">
        <div className="ml-40 flex gap-20 max-w-[610px]">
          <div className="flex flex-col gap-8">
            <button className="flex items-center justify-center font-bellefair text-3xl w-20 h-20 rounded-full border border-zinc-500 hover:border-white">
              1
            </button>
            <button className="flex items-center justify-center font-bellefair text-3xl w-20 h-20 rounded-full border border-zinc-500 hover:border-white">
              2
            </button>
            <button className="flex items-center justify-center font-bellefair text-3xl w-20 h-20 rounded-full border border-zinc-500 hover:border-white">
              3
            </button>
          </div>
          <div>
            <span className="text-zinc-300 tracking-[2.7px]">
              THE TERMINOLOGY...
            </span>
            <h1 className="font-bellefair text-5xl mt-3 mb-4">
              LAUNCH VEHICLE
            </h1>
            <p className="font-barlow text-zinc-300 text-lg">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth’s surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it’s quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
        <Image src={rocket} alt="" className="max-h-[480px]" />
      </div>
    </div>
  )
}
