"use client";

import { useCategories } from "@/hooks/use-categories";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter() {
  const { data: categories } = useCategories();

  const router = useRouter();
  const params = useSearchParams();

  const activeCategory = params.get("category_id");

  const setCategory = (id?: number) => {
    const newParams = new URLSearchParams(params.toString());

    newParams.set("page", "1");

    if (!id) newParams.set("category_id", "");
    else newParams.set("category_id", id.toString());

    router.push(`?${newParams.toString()}`);
  };

  return (
    <>
      <button
        onClick={() => setCategory()}
        className={`md:px-12 px-8 md:py-4  rounded-lg text-sm ${!activeCategory ? "bg-primary text-white" : "bg-secondary text-white"}`}
      >
        Semua
      </button>

      {categories?.map((cat: any) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.id)}
          className={`md:px-12 px-8 md:py-4 py-2 text-sm rounded-lg ${
            activeCategory == cat.id
              ? "bg-primary text-white"
              : "bg-secondary text-white hover:bg-secondary/90"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </>
  );
}
