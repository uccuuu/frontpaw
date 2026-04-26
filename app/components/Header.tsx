import Image from "next/image"
import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full -mt-2 -ml-1 flex justify-between">

      {/* 🔹 LOGO */}
      <Image
        src="/logo.png"
        alt="logo"
        width={120}
        height={60}
        className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[160px] h-auto object-contain"
      />

      {/* 🔹 ICON */}
      <div className="flex items-center px-5 gap-3">

        <button className="w-10 h-10 bg-[#E0A66B] rounded-full flex items-center justify-center shadow-sm">
          <Search className="w-6 h-6 md:w-5 md:h-5 text-white" />
        </button>

        <button className="w-10 h-10 bg-[#E0A66B] rounded-full flex items-center justify-center shadow-sm">
          <Bell className="w-6 h-6 md:w-5 md:h-5 text-white" />
        </button>

      </div>

    </div>
  )
}