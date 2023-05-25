export function Title({ index, content }) {
  return (
    <h1 className="text-3xl tracking-[4.725px] max-lg:text-center max-sm:text-base">
      <span className="text-white/30 mr-7">{index}</span>
      {content}
    </h1>
  )
}
