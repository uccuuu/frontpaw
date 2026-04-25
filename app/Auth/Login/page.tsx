"use client"

export default function Login() {
  return (
    <main className="min-h-[100dvh] bg-[#F4EFE6] flex flex-col items-center px-6">

      {/* 🔹 LOGO (SAMA SEPERTI REGISTER) */}
      <div className="flex items-end justify-center w-full h-[25vh] sm:h-[28vh] md:h-[30vh]">
        <img 
          src="/logo.png" 
          alt="logo"
          className="w-[60%] max-w-[300px] object-contain"
        />
      </div>

      {/* 🔹 FORM */}
      <div className="w-full max-w-[320px] space-y-3 mt-6">

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#E6D1AF] text-gray-700 placeholder-gray-500 px-5 py-2.5 rounded-full text-sm outline-none"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Kata sandi"
          className="w-full bg-[#E6D1AF] text-gray-700 placeholder-gray-500 px-5 py-2.5 rounded-full text-sm outline-none"
        />

      </div>

      {/* 🔹 BUTTON */}
      <div className="flex flex-col items-center mt-10 gap-3">

        <button className="w-[70%] max-w-[220px] bg-[#E0A66B] text-white py-2.5 rounded-full font-semibold shadow-md">
          Masuk
        </button>

      </div>

    </main>
  )
}