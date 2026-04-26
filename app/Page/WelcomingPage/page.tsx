"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../Components/Button"

export default function Home() {
  const images = ["/hewan1.jpg", "/hewan2.jpg", "/hewan3.jpg"];
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#F7EFDD] flex flex-col">
      {/* 🔹 IMAGE SECTION (SLIDER) */}
      <div className="relative w-full h-[55vh] overflow-hidden bg-[#F7EFDD]">
        <div
          className="flex absolute top-0 left-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ left: `-${current * 100}%` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F7EFDD]" />
      </div>

      {/* 🔹 CONTENT */}
      <div className="flex-1 flex flex-col items-center text-center px-6 pt-10">
        {/* 🔸 INDICATOR */}
        <div className="flex gap-2 mb-6">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                cursor-pointer rounded-full transition-all duration-1000
                ${
                  current === index
                    ? "w-6 h-1.5 bg-[#F4A340]"
                    : "w-4 h-1.5 bg-gray-300"
                }
              `}
            ></span>
          ))}
        </div>

        {/* 🔸 TITLE */}
        <h1 className="text-2xl font-semibold text-black leading-snug">
          Adopsi hewan dengan mudah
        </h1>

        {/* 🔸 SUBTITLE */}
        <p className="text-gray-500 mt-3 text-sm">
          Teman terbaik untuk sahabat berbulu
        </p>

        <Button
        text="Masuk"
        className="mt-10"
        onClick={() => router.push("/Auth/Register")}
      />

        {/* 🔸 LOGIN TEXT */}
        <p className="mt-4 text-sm text-gray-500">
          Sudah punya akun?{" "}
          <span
            onClick={() => router.push("/Auth/Login")}
            className="font-semibold text-black cursor-pointer"
          >
            Masuk disini
          </span>
        </p>
      </div>
    </main>
  );
}
