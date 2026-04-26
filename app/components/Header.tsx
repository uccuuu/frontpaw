import Image from "next/image"
import { Bell, UserRound } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full -mt-2 -ml-1 flex justify-between">

      {/* 🔹 LOGO */}
      <Image
        src="/logo.png"
        alt="logo"
        width={120}
        height={60}
        className="w-[100px] sm:w-[110px] md:w-[120px] lg:w-[130px] h-auto object-contain"
      />

      {/* 🔹 ICON */}
      <div className="flex items-center px-5 gap-3">

        <button className="w-10 h-10 bg-[#E0A66B] rounded-full flex items-center justify-center shadow-sm">
          <Bell className="w-6 h-6 md:w-5 md:h-5 text-white" />
        </button>

        <button className="w-10 h-10 bg-[#E0A66B] rounded-full flex items-center justify-center shadow-sm">
          <UserRound className="w-6.5 h-6.5 md:w-6 md:h-6 text-white" />
        </button>

        
      </div>

    </div>
  )
}