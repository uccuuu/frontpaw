type InputProps = {
  type: string
  placeholder: string
  className?: string
}

export default function Input({ type, placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full bg-[#E6D1AF] text-gray-700 placeholder-gray-500 px-5 py-2.5 rounded-full outline-none ${className}`}
    />
  )
}