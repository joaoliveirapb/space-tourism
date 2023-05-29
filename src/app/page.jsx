import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-white flex flex-1 items-center justify-between px-40 max-lg:flex-col max-lg:py-20 max-lg:gap-8 max-sm:px-8">
      <div className="flex flex-col max-w-[450px] max-sm:text-center">
        <p className="text-[28px] tracking-[4.725px] max-sm:text-base">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="font-bellefair text-[150px] leading-[172px] max-sm:text-[80px]">
          SPACE
        </h1>
        <p className="font-barlow text-lg leading-8 max-sm:text-base">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="h-[400px] w-[400px] max-sm:h-[350px] max-sm:w-[350px]">
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
