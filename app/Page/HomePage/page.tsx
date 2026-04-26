import Header from "../../Components/Header";
import UserCard from "../../Components/UserCard";
import ServiceCard from "../../Components/ServiceCard";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function WelcomingPage() {
  return (
    <main className="w-full min-h-screen bg-[#F7EFDD]">
      <Header />

      {/* 🔹 SHAPE PUTIH (INI YANG KAMU MAU) */}
      <div className="bg-white rounded-t-[40px] -mt-2 px-4 pt-4 pb-10 min-h-[calc(100vh-80px)]">
        {" "}
        {/* 🔹 USER */}
        <UserCard
          name="User"
          image="/user.jpg" 
        />
        <div className="bg-[#E6D1AF] rounded-[40px] p-4 mt-4">
          <div className="flex justify-between items-center">
            <ServiceCard
              label="PawShop"
              icon={
                <Image
                  src="/pawshop.png"
                  alt="pawshop"
                  width={45}
                  height={45}
                />
              }
            />

            <ServiceCard
              label="PawHotel"
              icon={
                <Image
                  src="/pawhotel.png"
                  alt="pawhotel"
                  width={45}
                  height={45}
                />
              }
            />
            
          </div>

          <div className="flex justify-center mt-2">
            <ChevronDown size={18} className="text-black" />
          </div>
        </div>
      </div>
    </main>
  );
}
