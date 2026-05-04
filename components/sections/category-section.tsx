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

function CategorySkeleton() {
  return (
    <div className="flex flex-col gap-3 items-center justify-between animate-pulse">
      <div className="rounded-full w-25 h-25 bg-gray-200" />
      <div className="h-4 w-16 bg-gray-200 rounded-md" />
    </div>
  );
}
export default function CategorySection() {
  const { data: categories, isLoading } = useCategories();

  return (
    <section className="w-full overflow-hidden bg-white  overflow-x-hidden md:py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="flex max-w-7xl flex-col mx-auto">
        <div className="absolute -left-30 -top-1 w-80 h-80 bg-primary/30 rounded-full blur-3xl -z-10" />
        <div className="absolute left-10 top-3 w-48 h-48 bg-primary/30 rounded-full blur-2xl -z-10" />
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
          {isLoading
            ? Array.from({ length: 5 }, (_, i) => <CategorySkeleton key={i} />)
            : categories?.map((category: ICategory) => (
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
