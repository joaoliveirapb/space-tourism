export function ButtonChangeCrew({ value, selectedButton, onClick }) {
  return (
    <button
      onClick={onClick}
      value={value}
      className={`h-3 w-3 ${
        selectedButton === value ? 'bg-white' : 'bg-zinc-500 hover:bg-zinc-400'
      } rounded-full`}
    />
  )
}
