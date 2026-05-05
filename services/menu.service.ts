import { MenuResponse } from "@/types";

export interface IMenuParams {
  page?: number;
  limit?: number;
  search?: string;
  category_id?: string | null;
}

export const getMenus = async ({
  page = 1,
  limit = 15,
  search = "",
  category_id = "",
}: IMenuParams): Promise<MenuResponse> => {
  const url =
    `${process.env.NEXT_PUBLIC_API_URL}/menu` +
    `?page=${page}` +
    `&limit=${limit}` +
    `&search=${search}` +
    `&category_id=${category_id ?? ""}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Gagal mengambil data menu");

  const json = await res.json();

  return json.data;
};

export const getMenuSlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/menu/detail/${slug}`,
  );

  if (!res.ok) throw new Error("Gagal mengambil data slug menu");

  const json = await res.json();
  return json.data.menu;
};
