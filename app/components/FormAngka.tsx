type FormAngkaProps = {
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export default function FormAngka({
  placeholder,
  value,
  onChange,
  className,
}: FormAngkaProps) {
  return (
    <input
      type="tel"
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-[#E6D1AF] text-gray-700 placeholder-gray-500 px-5 py-2.5 rounded-full outline-none ${className}`}
    />
  )
}