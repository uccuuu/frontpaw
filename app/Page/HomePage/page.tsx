"use client";

import { useState } from "react";
import Header from "../../Components/Header";
import Search from "../../Components/Search";
import ServiceCard from "../../Components/ServiceCard";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function WelcomingPage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <main className="w-full min-h-screen bg-[#F7EFDD]">
      <Header />

      {/* 🔹 SHAPE PUTIH */}
      <div className="bg-white rounded-t-[40px] -mt-2 px-4 pt-4 pb-10 min-h-[calc(100vh-80px)]">
        {/* 🔹 USER */}
        <div className="max-w-[420px] md:max-w-[520px] mx-auto -px-1">
          <Search />
        </div>

        {/* 🔹 SERVICE */}
        <div className="bg-[#E6D1AF] rounded-[40px] py-4 px-2 mt-4 max-w-[420px] md:max-w-[520px] mx-auto">
          {/* 🔥 FLEX WRAPPER */}
          <div className="flex justify-center">
            <div
              className="
              grid grid-cols-[repeat(4,auto)]
              justify-between
              md:flex md:flex-wrap md:justify-between
              w-full 
              max-w-[520px] 
              px-3
              "
            >
              {/* 🔸 4 utama */}
              <ServiceCard
                label="PawShop"
                icon={
                  <Image src="/pawshop.png" alt="" width={45} height={45} />
                }
              />
              <ServiceCard
                label="PawHotel"
                icon={
                  <Image src="/Pawhotel.png" alt="" width={45} height={45} />
                }
              />
              <ServiceCard
                label="PawCare"
                icon={
                  <Image src="/Pawcare.png" alt="" width={43} height={43} />
                }
              />
              <ServiceCard
                label="PawHealth"
                icon={
                  <Image src="/Pawhealth.png" alt="" width={45} height={45} />
                }
              />

              {/* 🔸 ITEM KE-5 */}
              <div className={`${showMore ? "block" : "hidden"} md:block`}>
                <ServiceCard
                  label="PawAdopt"
                  icon={
                    <Image src="/Pawadopt.png" alt="" width={65} height={65} />
                  }
                />
              </div>
            </div>
          </div>

          {/* 🔹 CHEVRON */}
          <div className="flex justify-center mt-2 md:hidden">
            <button onClick={() => setShowMore(!showMore)}>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
