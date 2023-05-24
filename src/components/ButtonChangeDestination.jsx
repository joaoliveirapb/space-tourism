export function ButtonChangeDestination({ children, selectedButton, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`tracking-[2.7px] ${
        selectedButton === children
          ? 'border-b-2'
          : 'hover:border-b-2 hover:border-gray-500'
      }`}
    >
      {children}
    </button>
  )
}
