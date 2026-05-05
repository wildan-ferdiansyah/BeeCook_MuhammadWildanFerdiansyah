import {  ICategory } from "@/types";

export const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category?search=`, {
    method: "GET",
  })

  if(!res.ok) throw new Error("Gagal mengambil data kategori")

  const json = await res.json();

  return json.data.categories;
}