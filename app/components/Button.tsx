type ButtonProps = {
  text: string
  onClick?: () => void
  className?: string
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-[200px] bg-[#E0A66B] text-white py-2.5 rounded-full font-semibold shadow-md ${className}`}
    >
      {text}
    </button>
  )
}