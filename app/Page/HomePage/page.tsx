"use client"

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#F4EFE6] px-4 py-4">

      {/* 🔹 HEADER */}
      <div className="flex justify-between items-center mb-6">
        <img src="/logo.png" className="w-[90px]" />

        <div className="flex gap-3">
          <div className="w-10 h-10 bg-[#E0A66B] rounded-full flex items-center justify-center text-white">
            🔍
          </div>
          <div className="w-10 h-10 bg-[#E0A66B] rounded-full flex items-center justify-center text-white">
            🔔
          </div>
        </div>
      </div>

      {/* 🔹 USER CARD */}
      <div className="bg-[#E8D3B3] rounded-2xl p-3 flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
          {/* TEMPAT FOTO USER */}
          <img src="/user.jpg" className="w-full h-full object-cover" />
        </div>
        <p className="font-semibold text-gray-800">User</p>
      </div>

      {/* 🔹 MENU */}
      <div className="bg-[#E8D3B3] rounded-2xl p-4 mb-5">

        <div className="grid grid-cols-4 gap-3 text-center">

          {[
            { name: "PawShop", icon: "🛍️" },
            { name: "PawHotel", icon: "🏠" },
            { name: "PawCare", icon: "🐕" },
            { name: "PawHealth", icon: "👨‍⚕️" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-[#D9C3A0] rounded-full flex items-center justify-center text-xl shadow-md">
                {item.icon}
              </div>
              <p className="text-xs">{item.name}</p>
            </div>
          ))}

        </div>

        <p className="text-xs text-right mt-3 text-gray-600">
          Lihat lainnya
        </p>

      </div>

      {/* 🔹 BANNER */}
      <div className="bg-[#E8D3B3] rounded-2xl p-4 flex items-center gap-3 mb-5">

        {/* TEMPAT GAMBAR WANITA */}
        <img
          src="/banner.png"
          className="w-[90px] h-[90px] object-cover rounded-xl"
        />

        <p className="text-sm text-gray-800 leading-snug">
          Cintai hewan peliharaan anda dengan perawatan yang tepat.
        </p>

      </div>

      {/* 🔹 GRID CARD (SIAP CRUD) */}
      <div className="grid grid-cols-2 gap-4">

        {/* 🔸 CARD KOSONG (PLACEHOLDER) */}
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-[#E8D3B3] rounded-2xl overflow-hidden shadow-sm"
          >
            {/* IMAGE */}
            <div className="w-full h-[140px] bg-gray-300"></div>

            {/* CONTENT */}
            <div className="p-2 space-y-1">

              <div className="flex justify-between text-xs font-semibold">
                <span>Nama Hewan</span>
                <span className="bg-[#E0A66B] text-white px-2 py-[2px] rounded-full text-[10px]">
                  Harga
                </span>
              </div>

              <p className="text-[11px] text-gray-600">Lokasi</p>
              <p className="text-[11px] text-gray-600">Jenis</p>
              <p className="text-[11px] text-gray-600">Umur</p>

            </div>
          </div>
        ))}

      </div>

    </main>
  )
}