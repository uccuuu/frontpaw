"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Transition from "./Components/Transition"
 
export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Page/WelcomingPage") 
    }, 3909) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7EFDD]">
      <div className="slide-up">
        {/* Circle Container */}
        <div
          className="
            bubble 
            w-[270px] h-[270px] 
            sm:w-[320px] sm:h-[320px]
            md:w-[400px] md:h-[400px]
            lg:w-[430px] lg:h-[430px]
            bg-[#FF9C40] rounded-full 
            flex items-center justify-center 
            shadow-[0_20px_40px_rgba(0,0,0,0.5)]
            -translate-y-10 md:-translate-y-20 lg:-translate-y-10
          "
        >
          {/* Logo */}
          <div className="w-[150%] h-[150%] flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="logo" 
              className="logo-pop w-[600px]" 
            />
          </div>
        </div>
      </div>
    </main>
  )
}
