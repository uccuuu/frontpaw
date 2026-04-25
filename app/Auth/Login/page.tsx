"use client"

import Button from "../../Components/Button"
import FormHuruf from "../../Components/FormHuruf"

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
        <FormHuruf type="email" placeholder="Email" />

        {/* PASSWORD */}
       <FormHuruf type="password" placeholder="Password" />


      </div>

      {/* 🔹 BUTTON */}
      <Button text="Masuk" className="mt-23" />

    </main>
  )
}