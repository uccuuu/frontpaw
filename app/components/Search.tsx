"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState("Semua");
  const [search, setSearch] = useState("");
  const isActive = distance !== "Semua";

  const options = ["Semua", "1 km", "3 km", "5 km", "10 km"];

  useEffect(() => {
  const saved = sessionStorage.getItem("distanceFilter")
  if (saved) {
    setDistance(saved)
  }
}, [])

  useEffect(() => {
  sessionStorage.setItem("distanceFilter", distance)
}, [distance])

  return (
    <div className="w-full bg-[#E6D1AF] rounded-full px-3 py-0.5 relative">
      {/* 🔹 SEARCH ROW */}
      <div className="flex items-center w-full px-1 py-1 justify-between">
        {/* LEFT */}
        <div className="flex items-center w-full">
          <Search size={25} className="text-white" />

          <input
            type="text"
            placeholder="Cari..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white text-md ml-2 w-full placeholder-white/70"
          />
        </div>

        {/* 🔹 FILTER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-2 w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 transition relative"
        >
          <SlidersHorizontal
            size={23}
            className={`${isActive ? "text-[#362316]" : "text-white"}`}
          />

          {/* 🔹 DOT INDICATOR */}
          {isActive && (
            <span className="absolute top-1 right-1 w-3 h-3 bg-[#362316] rounded-full"></span>
          )}
        </button>
      </div>

      {/* 🔹 DROPDOWN */}
      {open && (
        <div className="absolute right-2 top-14 bg-white rounded-xl shadow-md p-2 w-[120px] z-10">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                setDistance(item);
                setOpen(false);
              }}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
