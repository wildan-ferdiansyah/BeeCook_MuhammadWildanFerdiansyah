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
    <Link href={`/menu/${menu.slug}`} className="bg-white shadow-xl rounded-2xl md:max-w-75 w-full flex flex-col">
      <Image
        src={image}
        alt={menu.name}
        width={300}
        height={200}
        className="h-52 w-full object-cover  rounded-2xl"
      />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="bg-blue-700 rounded-md px-4 py-2 text-xs">{menu.category.name}</h3>
          <div className=" flex items-center gap-1 text-sm font-semibold text-gray-400">
            <Clock className="w-3 h-3 "  />
            {menu.cooking_duration} m
          </div>
        </div>
        <h1 className="mt-4 text-black font-semibold">{menu.name}</h1>
      </div>
    </Link>
  );
}
