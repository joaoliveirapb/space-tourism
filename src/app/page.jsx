import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-white flex flex-1 items-center justify-between px-40">
      <div className="flex flex-col max-w-[450px]">
        <p className="text-[28px] tracking-[4.725px]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="font-bellefair text-[150px] leading-[172px]">SPACE</h1>
        <p className="font-barlow text-lg leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="h-[400px] w-[400px]">
        <div className="flex items-center justify-center h-full w-full rounded-full bg-white/10">
          <Link
            href="/destination"
            className="flex items-center justify-center h-[274px] w-[274px] bg-white rounded-full font-bellefair text-black text-3xl leading-9 tracking-[2px]"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  )
}
