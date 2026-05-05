"use client";
import { useMenuDetail } from "@/hooks/use-menu-detail";
import { useParams } from "next/navigation";
import { MenuDetailSkeleton } from "./menu-detail-skeleton";
import Image from "next/image";

export default function MenuDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const { data, isLoading } = useMenuDetail(slug);

  if (isLoading) return <MenuDetailSkeleton />;
  return (
    <>
      <div className="rounded-2xl md:h-80 h-40 w-full  relative shadow-lg">
        <Image
          src={`https://drive.google.com/uc?export=view&id=${data?.file_id}`}
          alt={data?.name || ""}
          width={800}
          height={400}
          priority
          className="h-full w-full object-center rounded-2xl"
        />

        <div className="absolute inset-0 bg-black/40 rounded-2xl" />

        <div className="absolute inset-0 flex flex-col justify-center md:px-16 px-12">
          <h2 className="text-2xl font-black tracking-wide text-white md:text-4xl font-montserrat">
            {data?.name}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-18 mt-5">
        <div className="flex items-center gap-4">
          <Image
            src={"/category.svg"}
            alt="Category Icon"
            width={20}
            height={20}
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-gray-400 text-sm font-semibold">Kategori</h3>
            <p className="text-black font-semibold">{data?.category.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={"/duration.svg"}
            alt="Durasi Icon"
            width={20}
            height={20}
            className="w-10 h-10"
          />
          <div>
            <h3 className="text-gray-400 text-sm font-semibold">Durasi</h3>
            <p className="text-black font-semibold">
              {data?.cooking_duration} menit
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-justify text-[#4B5563] leading-relaxed text-base tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="mt-16 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-black">Informasi Nutrisi</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center justify-center">
          <div className="bg-default-gray rounded-xl p-4 flex flex-col items-center border-2 border-primary">
            <h1 className="text-black font-semibold text-xl">
              {data?.nutrition.calory} kcal
            </h1>
            <p className="text-black text-sm">Kalori</p>
          </div>
          <div className="bg-default-gray rounded-xl p-4 flex flex-col items-center border-2 border-primary">
            <h1 className="text-black font-semibold text-xl">
              {data?.nutrition.protein}g
            </h1>
            <p className="text-black text-sm">Protein</p>
          </div>
          <div className="bg-default-gray rounded-xl p-4 flex flex-col items-center border-2 border-primary">
            <h1 className="text-black font-semibold text-xl">
              {data?.nutrition.fat}g
            </h1>
            <p className="text-black text-sm">Lemak</p>
          </div>
          <div className="bg-default-gray rounded-xl p-4 flex flex-col items-center border-2 border-primary">
            <h1 className="text-black font-semibold text-xl">
              {data?.nutrition.carbohydrate}g
            </h1>
            <p className="text-black text-sm">Karbohidrat</p>
          </div>
        </div>
      </div>

      <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-y-6 mt-16">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-semibold text-black">Bahan-bahan</h1>
          <ul className="mt-3 text-black space-y-2 ">
            {data?.ingredients.map((ingredient: any) => (
              <li
                key={ingredient.id}
                className="text-sm tracking-wide capitalize"
              >
                {ingredient.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <h1 className="text-3xl font-semibold text-black">Cara Masak</h1>
          <div className="mt-3 flex gap-4 flex-col">
            {data?.recipes
              .sort((a: any, b: any) => a.sort_number - b.sort_number)
              .map((recipe: any) => (
                <div key={recipe.id}>
                  <div className="flex items-center gap-6 capitalize">
                    <div className="bg-primary text-sm rounded-full text-black font-semibold w-10 h-10 flex items-center justify-center">
                      {recipe.sort_number}
                    </div>

                    <div className="text-black text-sm">
                      {recipe.description}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
