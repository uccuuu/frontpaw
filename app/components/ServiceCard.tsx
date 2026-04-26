type ServiceCardProps = {
  icon: React.ReactNode
  label: string
}

export default function ServiceCard({ icon, label }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">

      {/* 🔹 ICON BULAT */}
      <div className="w-16 h-16 bg-[#D9C3A3] rounded-full flex items-center justify-center shadow-md">
        {icon}
      </div>

      {/* 🔹 LABEL */}
      <span className="text-sm text-gray-700 font-medium">
        {label}
      </span>

    </div>
  )
}