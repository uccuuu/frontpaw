"use client"

import Button from "../../Components/Button"

export default function Login() {
  return (
    <main className="min-h-[100dvh] bg-[#F4EFE6] flex flex-col items-center justify-center px-6">

      {/* 🔹 LOGO PLACEHOLDER */}
      <div className="mb-10 -mt-17">
        {/* GANTI IMG INI DENGAN LOGO KAMU */}
        <img 
          src="/logo.png" 
          alt="logo"
          className="w-[350px] object-contain"
        />
      </div>

      {/* 🔹 FORM */}
      <div className="w-full max-w-[300px] space-y-4 -mt-10">

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#E6D1AF] text-gray-700 placeholder-gray-500 px-5 py-2.5 rounded-full outline-none"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Kata sandi"
          className="w-full bg-[#E6D1AF] text-gray-700 placeholder-gray-500 px-5 py-2.5 rounded-full outline-none"
        />

      </div>

      {/* 🔹 BUTTON */}
      <Button text="Masuk" className="mt-23" />

    </main>
  )
}