export function Title({ index, content }) {
  return (
    <h1 className="mt-10 ml-40 text-3xl tracking-[4.725px]">
      <span className="text-white/30 mr-7">{index}</span>
      {content}
    </h1>
  )
}
