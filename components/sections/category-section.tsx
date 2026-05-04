"use client";
import { useCategories } from "@/hooks/use-categories";
import Image from "next/image";

interface ICategory {
  id: number;
  name: string;
  image: string;
  slug: string;
  file_id: string;
}
export default function CategorySection() {
  const { data: categories, isLoading } = useCategories();
  
  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <section className="w-full overflow-hidden bg-white  overflow-x-hidden md:py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="flex max-w-7xl flex-col mx-auto">
        <h1 className="text-black font-bold text-3xl text-center font-montserrat">
          Eksplor berdasarkan{" "}
          <span className="text-primary relative inline-block">
            Kategori
            <Image
              src="/line-doodle.png"
              alt=""
              width={120}
              height={12}
              className="absolute -bottom-3 left-0 w-full"
            />
          </span>
        </h1>

        <div className="mt-12 grid  md:grid-cols-5 grid-cols-2 justify-around md:gap-0 gap-y-5">
          {categories?.map((category: ICategory) => (
            <div
              className="flex flex-col gap-3 items-center justify-between"
              key={category.id}
            >
              <Image
                src={`https://drive.google.com/uc?export=view&id=${category.file_id}`}
                alt={category.name}
                width={100}
                height={100}
                className="rounded-full w-25 h-25 object-cover"
              />
              <p className="text-base text-black font-semibold">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
