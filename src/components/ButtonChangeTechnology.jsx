export function ButtonChangeTechnology({ children, onClick, selectedButton }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-bellefair text-3xl w-20 h-20 rounded-full ${
        selectedButton === children
          ? 'bg-white text-black'
          : 'border border-zinc-500 hover:border-white'
      }`}
    >
      {children}
    </button>
  )
}
