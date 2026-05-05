import { CreateMenuPayload, MenuResponse } from "@/types";

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

export const createMenu = async (payload: CreateMenuPayload) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Gagal membuat menu");

  return res.json();
};

export const getMenuById = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/menu/find/${id}`,
  );
  if (!res.ok) throw new Error("Gagal mengambil detail menu");
  const json = await res.json();
  return json.data.menu;
};

export const updateMenu = async (
  id: number,
  payload: Partial<CreateMenuPayload>,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/menu/update/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!res.ok) throw new Error("Gagal update menu");

  return res.json();
};

export const uploadMenuImage = async (id: number, file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/menu/upload/${id}`,
    {
      method: "PUT",
      body: formData,
    },
  );

  if (!res.ok) throw new Error("Upload gagal");

  return res.json();
};

export const deleteMenu = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu/delete/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Gagal menghapus menu");
  return res.json();
};
 

