import { IMenu } from "@/types";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MenuCardProps {
  menu: IMenu;
}

export default function MenuCard({ menu }: MenuCardProps) {
  const image = `https://drive.google.com/uc?export=view&id=${menu.file_id}`;

  return (
    <Link
      href={`/menu/${menu.slug}`}
      className="group bg-white shadow-xl rounded-2xl md:max-w-75 w-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={menu.name}
          priority
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Lihat Detail
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="bg-blue-700 rounded-md px-4 py-2 text-xs text-white">
            {menu.category.name}
          </h3>

          <div className="flex items-center gap-1 text-sm font-semibold text-gray-400">
            <Clock className="w-3 h-3" />
            {menu.cooking_duration} m
          </div>
        </div>

        <h1 className="mt-4 text-black font-semibold">
          {menu.name}
        </h1>
      </div>
    </Link>
  );
}