type PetCardProps = {
  image: string
  name: string
  location: string
  breed: string
  age: string
  price: string
  gender?: "male" | "female"
}

export default function PetCard({
  image,
  name,
  location,
  breed,
  age,
  price,
  gender = "male",
}: PetCardProps) {
  return (
    <div className="w-[260px] rounded-2xl overflow-hidden shadow-md bg-[#E8D3B3]">

      {/* 🔹 IMAGE (DARI USER / DATABASE) */}
      <div className="w-full h-[180px] bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 CONTENT */}
      <div className="p-3 space-y-2">

        {/* NAME + PRICE */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 font-semibold text-gray-800">
            🐾 {name}
            <span className="text-xs">
              {gender === "male" ? "♂" : "♀"}
            </span>
          </div>

          <div className="bg-[#E0A66B] text-white text-xs px-2 py-1 rounded-full">
            {price}
          </div>
        </div>

        {/* LOCATION */}
        <div className="text-xs text-gray-700 flex items-center gap-1">
          📍 {location}
        </div>

        {/* BREED */}
        <div className="text-xs text-gray-700 flex items-center gap-1">
          🐱 {breed}
        </div>

        {/* AGE */}
        <div className="text-xs text-gray-700 flex items-center gap-1">
          📅 {age}
        </div>

      </div>
    </div>
  )
}