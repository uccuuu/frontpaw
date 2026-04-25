"use client"

export default function HomeHeader() {
  return (
    <div className="w-full bg-[#DCCEB5] px-5 pt-6 pb-8 flex items-center justify-between">

      {/* 🔹 LOGO */}
      <img
        src="/logo.png"
        alt="logo"
        className="w-[100px] h-[100px] bg-red-500"
      />

      {/* 🔹 ICON */}
      <div className="flex items-center gap-3">

        {/* SEARCH */}
        <button className="w-[clamp(36px,10vw,48px)] h-[clamp(36px,10vw,48px)] bg-[#E0A66B] rounded-full flex items-center justify-center shadow-sm">
          <span className="text-lg sm:text-xl">🔍</span>
        </button>

        {/* NOTIF */}
        <button className="w-[clamp(36px,10vw,48px)] h-[clamp(36px,10vw,48px)] bg-[#E0A66B] rounded-full flex items-center justify-center shadow-sm">
          <span className="text-lg sm:text-xl">🔔</span>
        </button>

      </div>

    </div>
  )
}