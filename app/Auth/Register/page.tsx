"use client"

import Button from "../../Components/Button"
import FormHuruf from "../../Components/FormHuruf"
import FormAngka from "../../Components/FormAngka"


export default function Register() {
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

      <div className="flex flex-col items-center -mt-20"></div>
      {/* 🔹 FORM */}
      <div className="w-full max-w-[300px] space-y-4">

        {/* INPUT NAMA */}
        <FormHuruf type="text" placeholder="Nama Anda" />

        {/* INPUT NO HP (NUMBER PAD) */}
        <FormAngka placeholder="No. HP" />

        {/* INPUT EMAIL */}
        <FormHuruf type="email" placeholder="Email" />

        {/* INPUT PASSWORD */}
        <FormHuruf type="password" placeholder="Password" />

      </div>

      {/* 🔹 BUTTON */}
      <Button text="Buat Akun" className="mt-13" />

      {/* 🔹 SKIP */}
      <button className="mt-4 text-gray-400 text-sm">
        Lewati
      </button>

    </main>
  )
}