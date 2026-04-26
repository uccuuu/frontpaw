type UserCardProps = {
  name: string
  image?: string
}

export default function UserCard({ name, image }: UserCardProps) {
  return (
    <div className="w-full bg-[#E6D1AF] rounded-full px-4 py-3 flex items-center gap-3">

      {/* 🔹 FOTO USER */}
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt="user"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500 text-sm">👤</span>
        )}
      </div>

      {/* 🔹 NAMA USER */}
      <span className="font-medium text-gray-800">
        {name}
      </span>

    </div>
  )
}